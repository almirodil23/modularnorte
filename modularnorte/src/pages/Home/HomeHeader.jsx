import { Link } from "react-router-dom";

import "./HomeHeader.css";
import SideMenu from "../../components/SideMenu";

export default function HomeHeader({ onBudget, onContact }) {
  return (
    <>
      

      <header className="mn-white-header">
        <div className="mn-header-container mn-header-content">

          <Link to="/" className="mn-header-logo">
            <img
              src="https://www.modularnorte.com/assets/custom/img/logo_menu.png"
              alt="Modular Norte"
            />
          </Link>

          <nav className="mn-header-nav" aria-label="Navegación principal">
            <a href="/#casas">Qué construimos</a>
            <Link to="/proyectos/">Proyectos</Link>
            <Link to="/proceso-constructivo">Cómo construimos</Link>
            <Link to="/preguntas-frecuentes">Preguntas</Link>
            <Link to="/blog/">Blog</Link>

            <button type="button" onClick={onContact}>
              Contacto
            </button>
          </nav>

          <div className="mn-header-actions">
            <a className="mn-header-phone" href="tel:+34722782240">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.13.96.37 1.91.71 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 7 7l1.27-1.25a2 2 0 0 1 2.11-.45c.9.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z" />
              </svg>
              722 782 240
            </a>

            <button
              type="button"
              className="mn-budget-button"
              onClick={onBudget}
            >
              Pedir presupuesto
            </button>
          </div>

          <button
            type="button"
            id="toggleMenu"
            className="mn-mobile-toggle"
            aria-label="Abrir o cerrar menú"
            aria-controls="menu_lateral"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <SideMenu />
    </>
  );
}