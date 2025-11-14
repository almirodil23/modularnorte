import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {

  useEffect(() => {
    const $ = window.$;

    if ($) {
      // Abrir/cerrar menú con el botón
      $("#toggleMenu").on("click", () => {
        $("#menu_lateral").toggleClass("open_menu");
        $("#detector_click").toggleClass("activar");
      });

      // Cerrar menú haciendo click fuera
      $("#detector_click").on("click", () => {
        $("#menu_lateral").removeClass("open_menu");
        $("#detector_click").removeClass("activar");
      });
    }
  }, []);

  return (
    <>
      <div id="detector_click"></div>

      <div id="menu_lateral" className="centrar_al_medio">
        <ul className="navbar-nav mr-auto">

          {/* ENLACES EXACTOS DEL MENÚ ORIGINAL */}
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/projects" className="nav-link">Proyectos</Link>
          </li>

          <li className="nav-item">
            <Link to="/tour-virtual" className="nav-link">Tours Virtuales</Link>
          </li>

          <li className="nav-item">
            <Link to="/proceso-constructivo" className="nav-link">Proceso Constructivo</Link>
          </li>

          <li className="nav-item">
            <Link to="/preguntas-frecuentes" className="nav-link">Preguntas</Link>
          </li>

          <li className="nav-item">
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
          </li>

          <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>

          <li className="nav-item">
            <Link to="/contactar" className="nav-link">Contacto</Link>
          </li>

          {/* REDES IGUALES AL ORIGINAL */}
          <li className="redes">
            <a href="https://www.facebook.com/Modular-Projects-145924372121713" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/modularprojects?lang=es" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/explore/tags/modularprojects/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}
