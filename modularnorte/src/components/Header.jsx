export default function Header() {
  return (
    <header id="header">
      <div className="logo_head">
        <a href="/">
          <img src="/assets/custom/img/logo_menu.png" alt="Logo Modular Projects" />
        </a>
      </div>

      <div className="boton_menu">
        <div>
          <a id="toggleMenu">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
