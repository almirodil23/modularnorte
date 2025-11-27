import { Link } from "react-router-dom";
import useIsLargeScreen from "../../hooks/useLargeScreen"


export default function HomeHero() {
  const isSmall= useIsLargeScreen(765)
  return (
    <section
      id="slide_home"
      style={{
        backgroundImage: 'url("/assets/custom/img/home.JPG")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        marginTop: isSmall? "": "-100px"
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 textos" style={{marginTop: isSmall? "":"300px"}}>
            <div className="contenido">
              <h1 className="titulo">MODULAR NORTE</h1>
              <h3 className="subtitulo">
                Arquitectura modular de diseño vanguardista
              </h3>
            </div>
          </div>

          <div className="col-12 boton" style={{top: isSmall? "":"-200px"}}>
            <Link to="/projects" className="boton_linea_blanco">
              Ver Proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
