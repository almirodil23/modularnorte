import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gracias.css";

export default function Gracias() {
  const navigate = useNavigate();


  return (
    <main className="gracias-page">

      <section className="gracias-content">
        <div className="gracias-card">
          <div className="gracias-check-wrap">
            <img
              src="/images/check-green.png"
              alt=""
              className="gracias-check"
              aria-hidden="true"
            />
          </div>

          <h1>¡Gracias por tu mensaje!</h1>

          <span className="gracias-line" />

          <p className="gracias-text">
            Hemos recibido tu formulario correctamente.
            <br />
            Nuestro equipo se pondrá en contacto contigo
            <br />
            lo antes posible.
          </p>

          <div className="gracias-divider" />

          <div className="gracias-redirect">
            <img
              src="/images/clock-green.png"
              alt=""
              className="gracias-clock"
              aria-hidden="true"
            />

            <p>
              Serás redirigido automáticamente en
              <br />
              unos segundos...
            </p>
          </div>

          <button
            type="button"
            className="gracias-home-btn"
            onClick={() => navigate("/")}
          >
            Volver al inicio <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}