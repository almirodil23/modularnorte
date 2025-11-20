import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  // Escuchar clic en el botón #toggleMenu que está en Header
  useEffect(() => {
    const toggleBtn = document.getElementById("toggleMenu");

    if (!toggleBtn) return;

    const handler = () => {
      setOpen((v) => !v);
    };

    toggleBtn.addEventListener("click", handler);

    return () => toggleBtn.removeEventListener("click", handler);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Cerrar al hacer click fuera */}
      <div
        id="detector_click"
        className={open ? "activar" : ""}
        onClick={closeMenu}
      ></div>

      {/* Aquí cambiamos open_menu → abierto */}
      <div
        id="menu_lateral"
        className={`centrar_al_medio ${open ? "abierto" : ""}`}
      >
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={closeMenu}>Proyectos</Link>
          </li>

          <li className="nav-item">
            <Link to="/proceso-constructivo" className="nav-link" onClick={closeMenu}>
              Proceso Constructivo
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/preguntas-frecuentes" className="nav-link" onClick={closeMenu}>
              Preguntas
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/nosotros" className="nav-link" onClick={closeMenu}>Nosotros</Link>
          </li>

          <li className="nav-item">
            <Link to="/contactar" className="nav-link" onClick={closeMenu}>Contacto</Link>
          </li>

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
