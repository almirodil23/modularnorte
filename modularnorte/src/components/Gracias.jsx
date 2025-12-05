    import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gracias.css"; // estilos opcionales

export default function Gracias() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // redirige a Home
    }, 4000); // 4 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="gracias-container">
      <div className="gracias-card">
        <img
          src="/images/gracias.png"  // cambia por la imagen que quieras
          alt="Gracias"
          className="gracias-img"
        />

        <h1>¡Gracias por tu mensaje!</h1>
        <p>
          Hemos recibido tu formulario correctamente.  
          Nuestro equipo se pondrá en contacto contigo lo antes posible.
        </p>

        <p className="redirect-text">
          Serás redirigido automáticamente en unos segundos...
        </p>
      </div>
    </div>
  );
}
