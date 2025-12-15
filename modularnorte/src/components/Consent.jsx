import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (!saved) setShow(true);
  }, []);

  const handleConsent = (mode) => {
    if (mode === "accept") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
      localStorage.setItem("cookie-consent", "accepted");
    } else {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
      localStorage.setItem("cookie-consent", "denied");
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={banner.container}>
      <div style={banner.content}>
        <p style={banner.text}>
          Usamos cookies para mejorar tu experiencia y analizar el tráfico. Puedes aceptarlas o rechazarlas.
        </p>

        <div style={banner.buttons}>
          <button style={banner.btnSecondary} onClick={() => handleConsent("reject")}>
            Rechazar
          </button>

          <button style={banner.btnPrimary} onClick={() => handleConsent("accept")}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
   ESTILOS MINIMALISTAS
------------------------------ */
const banner = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "16px",
    background: "rgba(20, 20, 20, 0.95)",
    backdropFilter: "blur(6px)",
    zIndex: 999999,
    animation: "fadeIn 0.3s ease-out",
  },

  content: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  text: {
    margin: 0,
    fontSize: "15px",
    lineHeight: "1.4",
    color: "white",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  btnPrimary: {
    flex: 1,
    background: "#ffffff",
    color: "#111",
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.2s",
    fontWeight: 500,
  },

  btnSecondary: {
    flex: 1,
    background: "transparent",
    color: "white",
    border: "1px solid #555",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.2s",
    fontWeight: 500,
  },
};

/* Animación opcional */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);
