import { useEffect } from "react";

export default function SideMenu() {

  useEffect(() => {
    if (window.$) {
      const $ = window.$;

      // Abrir/cerrar menú
      $("#toggleMenu").on("click", () => {
        $("#menu_lateral").toggleClass("open_menu");
        $("#detector_click").toggleClass("activar");
      });

      // Cerrar al hacer click fuera
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
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/proyectos" className="nav-link">Proyectos</a></li>
          <li className="nav-item"><a href="/tour-virtual" className="nav-link">Tours Virtuales</a></li>
          <li className="nav-item"><a href="/proceso-constructivo" className="nav-link">Proceso Constructivo</a></li>
          <li className="nav-item"><a href="/preguntas-frecuentes" className="nav-link">Preguntas</a></li>
          <li className="nav-item"><a href="/nosotros" className="nav-link">Nosotros</a></li>
          <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="/contactar" className="nav-link">Contacto</a></li>

          <li className="redes">
            <a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </>
  );
}
