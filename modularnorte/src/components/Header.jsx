import useIsLargeScreen from "../hooks/useLargeScreen";

export default function Header() {

      const isSmall= useIsLargeScreen(765)

  return (
    <header id="header">
      <div className="logo_head">
        <a href="/">
          <img src="/assets/custom/img/logo_menu.png" style={{marginTop:isSmall?20:40}} alt="Logo Modular Norte" />
        </a>
      </div>

      <div className="boton_menu">
        <div>
          <a
            id="toggleMenu"
            href="#"
            onClick={(e) => e.preventDefault()} // <-- necesario
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

