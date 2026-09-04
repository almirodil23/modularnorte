import useIsLargeScreen from "../../hooks/useLargeScreen";
import "./HomeHero.css";

export default function HomeHero({
  onBudgetClick,
}) {
  return (
    <section
      id="slide_home"
      className="home-hero"
    >
      <picture className="home-hero__picture">
        <source
          srcSet="/assets/custom/img/home.webp"
          type="image/webp"
        />

        <img
          src="/assets/custom/img/home.jpg"
          alt="Arquitectura modular Modular Norte"
          className="home-hero__bg"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      <div className="home-hero__overlay" />

      <div className="home-hero__content">
        <div className="home-hero__main">
          <div className="contenido">
            <h1 className="titulo">
              <span className="titulo__modular">MODULAR</span>
              <span className="titulo__norte">NORTE</span>
            </h1>
            <h2 className="subtitulo">
              Arquitectura modular de diseño vanguardista
            </h2>
          </div>

          <div className="boton">
            <button
              type="button"
              className="boton_linea_blanco"
              onClick={onBudgetClick}
            >
              Pedir Presupuesto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}