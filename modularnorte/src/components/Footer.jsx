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
            <li><a href="/politica-privacidad" style={textStyle}>Política de privacidad</a></li>
            <li style={textStyle}>|</li>
            <li><span style={textStyle}>Aviso legal</span></li>
            <li style={textStyle}>|</li>
            <li><span style={textStyle}>Política de Cookies</span></li>
          </ul>
        </div>

        <div className="enlaces_contacto">
          <ul style={textStyle}>
            <li><a href="tel:+34722782240" style={textStyle}>722 782 240</a></li>
            <li className="separador" style={textStyle}>|</li>
            <li>
              <a href="mailto:info@modularnorte.com" style={textStyle}>
                info@modularnorte.com
              </a>
            </li>
            <li className="separador" style={textStyle}>|</li>
            <li><span style={textStyle}>A CORUÑA – SPAIN</span></li>


          </ul>
        </div>
      </footer>
    </>
  );
}
