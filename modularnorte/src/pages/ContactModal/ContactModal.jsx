import { useEffect, useState } from "react";
import "./ContactModal.css";

export default function ContactModal({
  open,
  mode = "contact",
  onClose,
}) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setSent(false);
      setError("");
    }
  }, [open, mode]);

  if (!open) return null;

  const isBudget = mode === "budget";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData.entries());

      data.tipo_formulario = isBudget
        ? "solicitud_presupuesto"
        : "contacto_home";

      const res = await fetch(
        "https://modularnorte.com/api/email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const json = await res.json();

      if (!res.ok || json.status !== "ok") {
        throw new Error(
          json.mail_error || "No se pudo enviar el formulario"
        );
      }

      setSent(true);
    } catch (err) {
      console.error(err);

      setError(
        "No hemos podido enviar el formulario. Inténtalo de nuevo."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="mn-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mn-modal-title"
    >
      <button
        className="mn-modal__backdrop"
        onClick={onClose}
        aria-label="Cerrar"
      />

      <div className="mn-modal__panel">
        <button
          type="button"
          className="mn-modal__close"
          onClick={onClose}
          aria-label="Cerrar formulario"
        >
          <span />
          <span />
        </button>

        {!sent ? (
          <>
            <header className="mn-modal__header">
              <span className="mn-modal__eyebrow">
                {isBudget
                  ? "TU PROYECTO"
                  : "HABLEMOS"}
              </span>

              <h2 id="mn-modal-title">
                {isBudget
                  ? "PIDE TU PRESUPUESTO"
                  : "CUÉNTANOS TU PROYECTO"}
              </h2>

              <p>
                {isBudget
                  ? "Danos algunos datos y podremos orientarte sobre tu proyecto."
                  : "Déjanos tus datos y cuéntanos brevemente qué necesitas."}
              </p>
            </header>

            <form
              className="mn-modal__form"
              onSubmit={handleSubmit}
            >
              <div className="mn-modal__grid">
                <div className="mn-modal__field">
                  <label htmlFor={`${mode}-nombre`}>
                    Nombre
                  </label>

                  <input
                    id={`${mode}-nombre`}
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="mn-modal__field">
                  <label htmlFor={`${mode}-email`}>
                    Email
                  </label>

                  <input
                    id={`${mode}-email`}
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="mn-modal__field">
                  <label htmlFor={`${mode}-telefono`}>
                    Teléfono
                  </label>

                  <input
                    id={`${mode}-telefono`}
                    type="tel"
                    name="telefono"
                    required
                    placeholder="+34 600 000 000"
                  />
                </div>

                {isBudget ? (
                  <>
                    <div className="mn-modal__field">
                      <label htmlFor="tipo_proyecto">
                        Tipo de proyecto
                      </label>

                      <select
                        id="tipo_proyecto"
                        name="tipo_proyecto"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecciona
                        </option>

                        <option value="vivienda_nueva">
                          Vivienda nueva
                        </option>

                        <option value="ampliacion">
                          Ampliación
                        </option>

                        <option value="reforma">
                          Reforma
                        </option>

                        <option value="local">
                          Local / negocio
                        </option>

                        <option value="otro">
                          Otro
                        </option>
                      </select>
                    </div>

                    <div className="mn-modal__field">
                      <label htmlFor="metros">
                        Superficie aproximada
                      </label>

                      <input
                        id="metros"
                        type="number"
                        min="1"
                        name="metros"
                        placeholder="Ej. 120 m²"
                      />
                    </div>

                    <div className="mn-modal__field">
                      <label htmlFor="terreno">
                        ¿Tienes terreno?
                      </label>

                      <select
                        id="terreno"
                        name="terreno"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecciona
                        </option>

                        <option value="si">
                          Sí
                        </option>

                        <option value="no">
                          No
                        </option>

                        <option value="buscando">
                          Estoy buscando
                        </option>
                      </select>
                    </div>

                    <div className="mn-modal__field mn-modal__field--full">
                      <label htmlFor="ubicacion">
                        Ubicación
                      </label>

                      <input
                        id="ubicacion"
                        type="text"
                        name="ubicacion"
                        placeholder="Municipio o provincia"
                      />
                    </div>
                  </>
                ) : (
                  <div className="mn-modal__field">
                    <label htmlFor="motivo_consulta_home">
                      Motivo
                    </label>

                    <select
                      id="motivo_consulta_home"
                      name="motivo_consulta"
                      defaultValue="informacion"
                    >
                      <option value="informacion">
                        Quiero información
                      </option>

                      <option value="terreno">
                        Tengo un terreno
                      </option>

                      <option value="reforma">
                        Reforma o ampliación
                      </option>

                      <option value="otro">
                        Otra consulta
                      </option>
                    </select>
                  </div>
                )}

                <div className="mn-modal__field mn-modal__field--full">
                  <label htmlFor={`${mode}-mensaje`}>
                    {isBudget
                      ? "Cuéntanos un poco más"
                      : "Mensaje"}
                  </label>

                  <textarea
                    id={`${mode}-mensaje`}
                    name="mensaje"
                    rows="4"
                    required
                    placeholder={
                      isBudget
                        ? "Tipo de vivienda, necesidades, plazo aproximado..."
                        : "Cuéntanos brevemente qué necesitas..."
                    }
                  />
                </div>
              </div>

              <label className="mn-modal__privacy">
                <input
                  type="checkbox"
                  name="privacidad"
                  required
                />

                <span>
                  Acepto la política de privacidad
                </span>
              </label>

              {error && (
                <p className="mn-modal__error">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mn-modal__submit"
                disabled={sending}
              >
                {sending
                  ? "ENVIANDO..."
                  : isBudget
                    ? "SOLICITAR PRESUPUESTO"
                    : "ENVIAR CONSULTA"}

                {!sending && <span>→</span>}
              </button>
            </form>
          </>
        ) : (
          <div className="mn-modal__success">
            <span>ENVIADO</span>

            <h2>
              GRACIAS POR
              <br />
              CONTACTARNOS
            </h2>

            <p>
              Hemos recibido tu solicitud. Nos pondremos
              en contacto contigo lo antes posible.
            </p>

            <button
              type="button"
              onClick={onClose}
            >
              CERRAR
            </button>
          </div>
        )}
      </div>
    </div>
  );
}