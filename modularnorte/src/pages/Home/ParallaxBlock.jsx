import "./parallaxBlock.css";

export default function ParallaxBlock({
  onContactClick,
  onBudgetClick,
}) {
  return (
    <section
      id="home-contact-cta"
      className="home-contact-cta"
    >
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

              ¿O SIMPLEMENTE UNA IDEA?
            </h2>

            <p>
              En Modular Norte diseñamos,
              construimos y damos forma a
              proyectos completamente
              personalizados.
            </p>

            <p>
              Cuéntanos qué necesitas y
              estudiaremos contigo las
              posibilidades, plazos y
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
                ¿Tienes dudas o quieres
                explicarnos tu idea?
                Hablemos.
              </p>

              <button
                type="button"
                className="home-contact-cta__button"
                onClick={onContactClick}
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
                Danos algunos datos de tu
                proyecto y podremos
                orientarte mejor.
              </p>

              <button
                type="button"
                className="
                  home-contact-cta__button
                  home-contact-cta__button--outline
                "
                onClick={onBudgetClick}
              >
                PEDIR PRESUPUESTO

                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}