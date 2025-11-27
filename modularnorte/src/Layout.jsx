import React from "react";
import useIsLargeScreen from "./hooks/useLargeScreen";


export default function Layout({ children }) {
    const isSmall= useIsLargeScreen(765)
return (
<>
{/* Header */}
<header id="header" className="">
<div className="logo_head">
<a href="/">
<img src="/assets/custom/img/logo_menu.png" alt="Logo Modular Norte"  style={{marginTop: isSmall? "80px": "80px"}}/>
</a>
</div>


<div className="boton_menu">
<div>
<a><i className="fa fa-bars" aria-hidden="true"></i></a>
</div>
</div>
</header>


{/* Sidebar */}
<div id="menu_lateral" className="centrar_al_medio">
<ul className="navbar-nav mr-auto">
<li className="nav-item"><a href="/" className="nav-link">Home</a></li>
<li className="nav-item"><a href="/projects" className="nav-link">Proyectos</a></li>
<li className="nav-item"><a href="/tour-virtual" className="nav-link">Tours Virtuales</a></li>
<li className="nav-item"><a href="/proceso-constructivo" className="nav-link">Proceso Constructivo</a></li>
<li className="nav-item"><a href="/preguntas-frecuentes" className="nav-link">Preguntas</a></li>
<li className="nav-item"><a href="/nosotros" className="nav-link">Nosotros</a></li>
<li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
<li className="nav-item"><a href="/contactar" className="nav-link">Contacto</a></li>
</ul>
</div>


{/* Main Content */}
{children}


{/* Footer */}
<footer>
<div className="enlaces_legales">
<ul>
<li><a href="/politica-privacidad">Política de privacidad</a></li>
<li>|</li>
<li><a href="/aviso-legal">Aviso legal</a></li>
<li>|</li>
<li><a href="/politica-cookies">Política de Cookies</a></li>
</ul>
</div>


<div className="enlaces_contacto">
<ul>
<li><a href="tel:657156065">695 88 48 96</a></li>
<li className="separador">|</li>
<li><a href="mailto:clientes@modularnorte.com">clientes@modularnorte.com</a></li>
<li className="separador">|</li>
<li><a>A CORUÑA – SPAIN</a></li>
</ul>
</div>
</footer>
</>
);
}