import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "120px 24px 60px" }}>
      <div style={{ textAlign: "center", maxWidth: 640 }}>
        <p style={{ letterSpacing: 3, marginBottom: 8 }}>ERROR 404</p>
        <h1>Página no encontrada</h1>
        <p>La dirección que has abierto no existe o ha cambiado.</p>
        <Link to="/" className="boton_linea_blanco" style={{ display: "inline-block", marginTop: 20, background: "#111" }}>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
