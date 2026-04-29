import { Link } from "react-router-dom";
import useIsLargeScreen from "../../hooks/useLargeScreen";
import "./HomeHero.css";

export default function HomeHero() {
  const isDesktop = useIsLargeScreen(765);

  return (
    <section
      id="slide_home"
      className="home-hero"
      style={{
        marginTop: isDesktop ? "-100px" : "0",
      }}
    >
      <picture className="home-hero__picture">
        <source
          srcSet="/assets/custom/img/home.webp"
          type="image/webp"
        />
        <img
          src="/assets/custom/img/home.jpg"
          alt=""
          className="home-hero__bg"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      <div className="home-hero__overlay" />

      <div className="container-fluid home-hero__content">
        <div className="row">
          <div
            className="col-12 textos"
            style={{
              marginTop: isDesktop ? "300px" : "",
            }}
          >
            <div className="contenido">
              <h1 className="titulo">MODULAR NORTE</h1>
              <h3 className="subtitulo">
                Arquitectura modular de diseño vanguardista
              </h3>
            </div>
          </div>

          <div
            className="col-12 boton"
            style={{
              top: isDesktop ? "-200px" : "",
            }}
          >
            <Link to="/projects" className="boton_linea_blanco">
              Ver Proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}