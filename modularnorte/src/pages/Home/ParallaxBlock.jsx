import { useState } from "react";

import ContactModal from "../ContactModal/ContactModal";

import "./parallaxBlock.css";

export default function ParallaxBlock() {
  const [modal, setModal] = useState(null);

  const closeModal = () => {
    setModal(null);
  };

  return (
    <>
      <section className="home-contact-cta">
        <div className="container">
          <div className="home-contact-cta__grid">

            {/* IZQUIERDA */}

            <div className="home-contact-cta__content">
              <span className="home-contact-cta__eyebrow">
                TU PROYECTO
              </span>

              <h2>
                ¿TIENES UN TERRENO?
                <br />

                ¿UNA VIVIENDA ANTIGUA?
                <br />

                ¿O SIMPLEMENTE UNA IDEA?
              </h2>

              <p>
                En Modular Norte diseñamos, construimos y
                damos forma a proyectos completamente
                personalizados.
              </p>

              <p>
                Cuéntanos qué necesitas y estudiaremos
                contigo las posibilidades, plazos y
                presupuesto de tu proyecto.
              </p>
            </div>


            {/* DERECHA */}

            <div className="home-contact-cta__actions">

              <div className="home-contact-cta__action">
                <span>01</span>

                <h3>
                  CUÉNTANOS TU PROYECTO
                </h3>

                <p>
                  ¿Tienes dudas o quieres explicarnos tu
                  idea? Hablemos.
                </p>

                <button
                  type="button"
                  className="home-contact-cta__button"
                  onClick={() => setModal("contact")}
                >
                  CONTÁCTANOS

                  <span>→</span>
                </button>
              </div>


              <div className="home-contact-cta__action">
                <span>02</span>

                <h3>
                  PIDE TU PRESUPUESTO
                </h3>

                <p>
                  Danos algunos datos de tu proyecto y
                  podremos orientarte mejor.
                </p>

                <button
                  type="button"
                  className="
                    home-contact-cta__button
                    home-contact-cta__button--outline
                  "
                  onClick={() => setModal("budget")}
                >
                  PEDIR PRESUPUESTO

                  <span>→</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* MODAL CONTACTO */}

      <ContactModal
        open={modal === "contact"}
        mode="contact"
        onClose={closeModal}
      />


      {/* MODAL PRESUPUESTO */}

      <ContactModal
        open={modal === "budget"}
        mode="budget"
        onClose={closeModal}
      />
    </>
  );
}