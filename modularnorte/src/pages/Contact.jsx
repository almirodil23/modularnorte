import { useEffect } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  // Inicializar Google Map
  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 43.320117, lng: -8.313211 },
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat: 43.320117, lng: -8.313211 },
      map,
      title: "Modular Norte",
    });
  }, []);

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("https://modularnorte.com/api/email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });


const json = await res.json();
console.log("RESPUESTA COMPLETA DEL SERVIDOR:", json);

if (json.status === "ok") {
  navigate("/gracias");
} else {
  alert("Error del servidor: " + (json.mail_error ?? "desconocido"));
}
  };

  return (
    <div className="pagina_con_fragmento_fijo container-fluid contact-page">
      <div className="row justify-content-between">

        {/* COLUMNA IZQUIERDA */}
        <div className="col-xl-4 col-lg-5 centrar_al_medio fragmento_fijo">
          <div className="contenido">
            <h1 className="titulo">Cuéntanos tu proyecto</h1>
            <p>
              Estaremos encantados de atenderte. También puedes llamarnos al{" "}
              <a href="tel:722782240">722782240</a>{" "}
              o escribirnos a{" "}
              <a href="mailto:info@modularnorte.com">
                info@modularnorte.com
              </a>.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="col-xl-8 col-lg-7 fragmento_scroll contact-form-area">
          <div id="map" className="contact-map"></div>

          <form className="formulario_contacto" onSubmit={handleSubmit}>
            <h3 className="titulo">Formulario de Contacto</h3>

            <div className="row">

              <div className="col-md-6">
                <label>Nombre:</label>
                <input type="text" name="nombre" required className="form-control" />

                <label>Email:</label>
                <input type="email" name="email" required className="form-control" />

                <label>Teléfono:</label>
                <input type="text" name="telefono" required className="form-control" />
              </div>

              <div className="col-md-6">
                <label>Motivo de la consulta:</label>
                <select name="motivo_consulta" required className="form-control">
                  <option value="quiero_informacion">Quiero Información</option>
                  <option value="tengo_terreno">Tengo un terreno</option>
                  <option value="reformar_o_ampliar">Reforma o ampliación</option>
                  <option value="otros">Otros</option>
                </select>

                <label>Plazo:</label>
                <select name="plazo" required className="form-control">
                  <option value="corto">Corto Plazo</option>
                  <option value="medio">Medio Plazo</option>
                  <option value="largo">Largo Plazo</option>
                </select>

                <label>Entidad:</label>
                <select name="entidad" required className="form-control">
                  <option value="profesional">Soy Profesional</option>
                  <option value="particular">Soy Particular</option>
                  <option value="organismo_publico">Organismo Público</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div className="col-12">
                <label>Mensaje:</label>
                <textarea name="mensaje" required rows="6" className="form-control"></textarea>

                <label className="checkbox">
                  <input type="checkbox" required /> Acepto la política de privacidad
                </label>

                <button type="submit" className="btn enviar">ENVIAR</button>
              </div>

            </div>

            <div className="legal_pag_contact">
              Responsable: Modular Norte
            </div>
          </form>

          <img src="/assets/custom/img/home.JPG" className="footer-img" />
        </div>
      </div>
    </div>
  );
}
