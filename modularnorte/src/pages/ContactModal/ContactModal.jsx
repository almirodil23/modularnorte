import { useEffect, useId, useRef, useState } from "react";
import "./ContactModal.css";

const INITIAL_VALUES = {
  nombre: "", email: "", telefono: "", tipo_proyecto: "", metros: "",
  terreno: "", ubicacion: "", motivo_consulta: "informacion", mensaje: "",
  privacidad: false,
};

const BUDGET_STEPS = [
  { field: "tipo_proyecto", title: "¿Qué proyecto tienes en mente?", hint: "Selecciona el tipo de proyecto." },
  { field: "metros", title: "¿Qué superficie necesitas?", hint: "Indica una superficie aproximada en metros cuadrados." },
  { field: "terreno", title: "¿Tienes terreno?", hint: "Puedes dejar esta pregunta sin responder si todavía no lo sabes." },
  { field: "ubicacion", title: "¿Dónde quieres construir?", hint: "Dinos el municipio o la provincia." },
  { field: "mensaje", title: "Cuéntanos un poco más", hint: "Necesidades, tipo de vivienda, plazo aproximado…" },
  { field: "contacto", title: "¿Cómo podemos contactar contigo?", hint: "Déjanos tus datos para responder a tu solicitud." },
];

const CONTACT_STEPS = [
  { field: "motivo_consulta", title: "¿En qué podemos ayudarte?", hint: "Selecciona el motivo de tu consulta." },
  { field: "mensaje", title: "Cuéntanos qué necesitas", hint: "Escribe tu consulta para que podamos orientarte." },
  { field: "contacto", title: "¿Cómo podemos contactar contigo?", hint: "Déjanos tus datos para responder a tu consulta." },
];

export default function ContactModal({ open, mode = "contact", onClose }) {
  const [values, setValues] = useState({ ...INITIAL_VALUES });
  const [stepIndex, setStepIndex] = useState(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const id = useId();
  const panelRef = useRef(null);
  const titleRef = useRef(null);
  const requestRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const isBudget = mode === "budget";
  const steps = isBudget ? BUDGET_STEPS : CONTACT_STEPS;
  const currentStepIndex = Math.min(stepIndex, steps.length - 1);
  const step = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;
  const fieldId = (name) => `${id}-${name}`;

  useEffect(() => {
    if (!open) return;
    setValues({ ...INITIAL_VALUES });
    setStepIndex(0);
    setSending(false);
    setSent(false);
    setError("");
    return () => {
      requestRef.current?.abort();
      requestRef.current = null;
    };
  }, [open, mode]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onCloseRef.current?.();
      if (event.key !== "Tab") return;
      const elements = Array.from(panelRef.current?.querySelectorAll(
        'button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href]'
      ) || []);
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && (document.activeElement === first || !elements.includes(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !elements.includes(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    titleRef.current?.focus();
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [open, mode, stepIndex, sent]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((previous) => ({ ...previous, [name]: type === "checkbox" ? checked : value }));
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending || requestRef.current) return;
    if (!event.currentTarget.reportValidity()) return;
    if (!isLastStep) {
      setError("");
      setStepIndex((previous) => previous + 1);
      return;
    }

    const data = {
      nombre: values.nombre.trim(), email: values.email.trim(),
      telefono: values.telefono.trim(), mensaje: values.mensaje.trim(),
      privacidad: "on",
      tipo_formulario: isBudget ? "solicitud_presupuesto" : "contacto_home",
      ...(isBudget ? {
        tipo_proyecto: values.tipo_proyecto, metros: values.metros,
        terreno: values.terreno, ubicacion: values.ubicacion.trim(),
      } : { motivo_consulta: values.motivo_consulta }),
    };
    // Los valores de todos los pasos se conservan en el estado.
    // FormData solo incluiría los campos del paso que se está mostrando.
    const controller = new AbortController();
    requestRef.current = controller;
    setSending(true);
    setError("");
    try {
      const response = await fetch("https://modularnorte.com/api/email.php", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), signal: controller.signal,
      });
      const json = await response.json();
      if (!response.ok || json.status !== "ok") {
        throw new Error(json.mail_error || "No se pudo enviar el formulario");
      }
      if (!controller.signal.aborted) setSent(true);
    } catch (err) {
      if (!controller.signal.aborted) {
        console.error(err);
        setError("No hemos podido enviar el formulario. Inténtalo de nuevo.");
      }
    } finally {
      if (requestRef.current === controller) {
        requestRef.current = null;
        setSending(false);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="mn-modal" role="dialog" aria-modal="true" aria-labelledby={`${id}-title`}>
      <button type="button" className="mn-modal__backdrop" onClick={onClose} aria-label="Cerrar formulario" tabIndex={-1} />
      <div className="mn-modal__panel" ref={panelRef}>
        <button type="button" className="mn-modal__close" onClick={onClose} aria-label="Cerrar formulario">×</button>
        {!sent ? (
          <>
            <header className="mn-modal__header">
              <span className="mn-modal__eyebrow">{isBudget ? "TU PRESUPUESTO" : "HABLEMOS"}</span>
              <div className="mn-modal__progress-info">
                <span>Paso {currentStepIndex + 1} de {steps.length}</span>
                <span>{Math.round(((currentStepIndex + 1) / steps.length) * 100)} %</span>
              </div>
              <div className="mn-modal__progress" role="progressbar" aria-label="Progreso del formulario" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={currentStepIndex + 1}>
                <span style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }} />
              </div>
              <h2 id={`${id}-title`} ref={titleRef} tabIndex={-1}>{step.title}</h2>
              <p id={`${id}-hint`}>{step.hint}</p>
            </header>

            <form className="mn-modal__form" onSubmit={handleSubmit} aria-busy={sending}>
              <fieldset className="mn-modal__fields" disabled={sending} key={step.field}>
                {step.field === "tipo_proyecto" && (
                  <div className="mn-modal__field">
                    <label htmlFor={fieldId("tipo_proyecto")}>Tipo de proyecto</label>
                    <select id={fieldId("tipo_proyecto")} name="tipo_proyecto" value={values.tipo_proyecto} onChange={handleChange} required>
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="vivienda_nueva">Vivienda Modular</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                )}
                {step.field === "metros" && (
                  <div className="mn-modal__field">
                    <label htmlFor={fieldId("metros")}>Superficie aproximada (m²)</label>
                    <input id={fieldId("metros")} type="number" min="1" step="any" name="metros" value={values.metros} onChange={handleChange} required placeholder="Ej. 120" />
                  </div>
                )}
                {step.field === "terreno" && (
                  <div className="mn-modal__field">
                    <label htmlFor={fieldId("terreno")}>¿Tienes terreno? <small>(opcional)</small></label>
                    <select id={fieldId("terreno")} name="terreno" value={values.terreno} onChange={handleChange}>
                      <option value="si">Sí</option><option value="no">No</option>
                    </select>
                  </div>
                )}
                {step.field === "ubicacion" && (
                  <div className="mn-modal__field">
                    <label htmlFor={fieldId("ubicacion")}>Ubicación</label>
                    <input id={fieldId("ubicacion")} type="text" name="ubicacion" value={values.ubicacion} onChange={handleChange} required pattern=".*\S.*" placeholder="Municipio o provincia" />
                  </div>
                )}
                {step.field === "motivo_consulta" && (
                  <div className="mn-modal__field">
                    <label htmlFor={fieldId("motivo_consulta")}>Motivo de la consulta</label>
                    <select id={fieldId("motivo_consulta")} name="motivo_consulta" value={values.motivo_consulta} onChange={handleChange} required>
                      <option value="informacion">Quiero información</option>
                      <option value="terreno">Quiero construir una casa</option>
                      <option value="otro">Otra consulta</option>
                    </select>
                  </div>
                )}
                {step.field === "mensaje" && (
                  <div className="mn-modal__field">
                    <label htmlFor={fieldId("mensaje")}>{isBudget ? "Detalles de tu proyecto" : "Mensaje"}</label>
                    <textarea id={fieldId("mensaje")} name="mensaje" rows={5} value={values.mensaje} onChange={handleChange} required placeholder={isBudget ? "Tipo de vivienda, necesidades, plazo aproximado…" : "Cuéntanos brevemente qué necesitas…"} />
                  </div>
                )}
                {step.field === "contacto" && (
                  <>
                    <div className="mn-modal__contact-grid">
                      <div className="mn-modal__field mn-modal__field--full">
                        <label htmlFor={fieldId("nombre")}>Nombre</label>
                        <input id={fieldId("nombre")} type="text" name="nombre" autoComplete="name" value={values.nombre} onChange={handleChange} required pattern=".*\S.*" placeholder="Tu nombre" />
                      </div>
                      <div className="mn-modal__field">
                        <label htmlFor={fieldId("email")}>Email</label>
                        <input id={fieldId("email")} type="email" name="email" autoComplete="email" value={values.email} onChange={handleChange} required placeholder="tu@email.com" />
                      </div>
                      <div className="mn-modal__field">
                        <label htmlFor={fieldId("telefono")}>Teléfono</label>
                        <input id={fieldId("telefono")} type="tel" name="telefono" autoComplete="tel" value={values.telefono} onChange={handleChange} required pattern=".*\S.*" placeholder="+34 600 000 000" />
                      </div>
                    </div>
                    <label className="mn-modal__privacy">
                      <input type="checkbox" name="privacidad" checked={values.privacidad} onChange={handleChange} required />
                      <span>Acepto la política de privacidad</span>
                    </label>
                  </>
                )}
              </fieldset>
              {error && <p className="mn-modal__error" role="alert">{error}</p>}
              <div className="mn-modal__actions">
                {stepIndex > 0 && <button type="button" className="mn-modal__back" disabled={sending} onClick={() => { setError(""); setStepIndex((previous) => previous - 1); }}>← Atrás</button>}
                <button type="submit" className="mn-modal__submit" disabled={sending}>
                  {sending ? "ENVIANDO…" : isLastStep ? (isBudget ? "SOLICITAR PRESUPUESTO" : "ENVIAR CONSULTA") : "CONTINUAR"}
                  {!sending && <span aria-hidden="true">→</span>}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="mn-modal__success">
            <span className="mn-modal__eyebrow">ENVIADO</span>
            <h2 id={`${id}-title`} ref={titleRef} tabIndex={-1}>Gracias por contactarnos</h2>
            <p>Hemos recibido tu solicitud. Nos pondremos en contacto contigo lo antes posible.</p>
            <button type="button" className="mn-modal__submit" onClick={onClose}>CERRAR</button>
          </div>
        )}
      </div>
    </div>
  );
}
