import { useEffect } from "react";
import "./contact.css";

export default function Contact() {

  // Inicializar Google Map
  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 43.320117, lng: -8.313211 }, // 43°19'12.8"N 8°18'47.6"W 43.320117, -8.313211


      zoom: 15,
      styles: [
        { featureType: "all", stylers: [{ saturation: -20 }] }
      ]
    });

    new window.google.maps.Marker({
      position: { lat: 43.320117, lng: -8.313211 },
      map,
      title: "Modular Norte"
    });

  }, []);

  return (
    <div className="pagina_con_fragmento_fijo container-fluid contact-page">
      <div className="row justify-content-between">

        {/* COLUMNA IZQUIERDA */}
        <div className="col-xl-4 col-lg-5 centrar_al_medio fragmento_fijo">
          <div className="contenido">
            <h1 className="titulo">Cuéntanos tu proyecto</h1>
aa
            <p>
              Estaremos encantados de atenderte, que nos cuentes tu proyecto y resolver todas tus dudas online o en nuestra oficina de A CORUÑA.<br /><br />
              Déjanos tus datos y el motivo de la consulta y nos pondremos en contacto contigo lo antes posible.
              También puedes llamarnos al <a href="tel:657156065">695 884 896</a>, mandarnos un email a{" "}
              <a href="mailto:clientes@modularnorte.com">clientes@modularnorte.com</a>.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="col-xl-8 col-lg-7 fragmento_scroll contact-form-area">

          <div id="map" className="contact-map"></div>
          {/*<p className="direccion">Calle Segura, 6, 03004 Alicante</p> */}

          <form
            action="https://crm.modularprojects.es/crmForm"
            method="post"
            className="formulario_contacto"
          >
            {/* Campos ocultos */}
            <input type="hidden" name="receptor" value="clientes@modularprojects.es" />
            <input type="hidden" name="emisor" value="clientes@modularprojects.es" />
            <input type="hidden" name="asunto" value="Formulario Web: Solicitud de Información" />
            <input type="hidden" name="orden" value="nombre,email,telefono,motivo_consulta,plazo,entidad,mensaje" />
            <input type="hidden" name="obligatorios" value="nombre,email,telefono,motivo_consulta,plazo,entidad,mensaje,aceptocondiciones" />
            <input type="hidden" name="webok" value="https://www.modularprojects.es/formok" />
            <input type="hidden" name="weberror" value="https://www.modularprojects.es/formko" />
            <input type="hidden" name="mailhtml" value="si" />
            <input type="hidden" name="ajax" value="no" />

            <h3 className="titulo">Formulario de Contacto</h3>

            <div className="row">
              <div className="col-md-6">

                <label>Nombre:</label>
                <input type="text" name="nombre" required placeholder="Tu Nombre" className="form-control" />

                <label>Email:</label>
                <input type="email" name="email" required placeholder="Tu Email" className="form-control" />

                <label>Teléfono:</label>
                <input type="text" name="telefono" required placeholder="Tu teléfono" className="form-control" />

              </div>

              <div className="col-md-6">

                <label>Motivo de la consulta:</label>
                <select name="motivo_consulta" className="form-control" required>
                  <option value="quiero_informacion">Quiero Información</option>
                  <option value="tengo_terreno">Tengo un terreno</option>
                  <option value="reformar_o_ampliar_inmueble">Reforma o ampliación</option>
                  <option value="otros">Otros</option>
                </select>

                <label>Plazo:</label>
                <select name="plazo" className="form-control" required>
                  <option value="corto">Corto Plazo</option>
                  <option value="medio">Medio Plazo</option>
                  <option value="largo">Largo Plazo</option>
                </select>

                <label>Entidad:</label>
                <select name="entidad" className="form-control" required>
                  <option value="profesional">Soy Profesional</option>
                  <option value="particular">Soy Particular</option>
                  <option value="organismo_publico">Organismo Público</option>
                  <option value="otros">Otros</option>
                </select>

              </div>

              <div className="col-12">
                <label>Mensaje:</label>
                <textarea name="mensaje" required rows="7" placeholder="Escribe tu mensaje..." className="form-control" />

                <label className="checkbox">
                <span>
                    <input
                    type="checkbox"
                    name="aceptocondiciones"
                    required
                    style={{ height: "auto" }}
                    />{" "}
                    Confirmo que he leído y acepto la{" "}
                    <a
                    href="/politica-de-privacidad"
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                    >
                    política de privacidad
                    </a>
                    , así como la suscripción al boletín y envío de comunicaciones comerciales.
                </span>
                </label>


                <div className="g-recaptcha" data-sitekey="6Ld6rtsaAAAAAMmnllKv6xThRf5dKSfAXU-ohTb3"></div>

                <button type="submit" className="btn enviar">ENVIAR</button>
              </div>

            </div>

            <div className="legal_pag_contact">
              Responsable: Modular Norte (Construcciones Laminadas SL)...  
            </div>


          </form>
          <img src="/assets/custom/img/home.JPG" className="footer-img" />
        </div>
      </div>
    </div>
  );
}