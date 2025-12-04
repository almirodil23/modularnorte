export default function Footer() {
  const textStyle = { color: "#0000006e" };

  return (
    <>
      <div className="boton_flotante">
        <a href="/contactar">Contáctanos</a>
      </div>

      <footer>
        <div className="enlaces_legales">
          <ul style={textStyle}>
            <li><a href="/privacy" style={textStyle}>Política de privacidad</a></li>
            <li style={textStyle}>|</li>
            <li><a style={textStyle}>Aviso legal</a></li>
            <li style={textStyle}>|</li>
            <li><a style={textStyle}>Política de Cookies</a></li>
          </ul>
        </div>

        <div className="enlaces_contacto">
          <ul style={textStyle}>
            <li><a href="tel:657156065" style={textStyle}>722 782 240</a></li>
            <li className="separador" style={textStyle}>|</li>
            <li>
              <a href="mailto:clientes@modularnorte.com" style={textStyle}>
                info@modularnorte.com
              </a>
            </li>
            <li className="separador" style={textStyle}>|</li>
            <li><a style={textStyle}>A CORUÑA – SPAIN</a></li>

            <li className="redes">
              <a href="https://facebook.com" target="_blank" style={textStyle}>
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" style={textStyle}>
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" style={textStyle}>
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
