export default function Footer() {
  return (
    <>
      <div className="boton_flotante">
        <a href="/contactar">Contáctanos</a>
      </div>

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

            <li className="redes">
              <a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
