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
        analytics_storage: "granted"
      });
      localStorage.setItem("cookie-consent", "accepted");
    } else {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied"
      });
      localStorage.setItem("cookie-consent", "denied");
    }

    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={bannerStyles.container}>
      <p style={bannerStyles.text}>
        Usamos cookies para mejorar tu experiencia y analizar el tráfico. Elige tu configuración.
      </p>

      <div style={bannerStyles.buttons}>
        <button style={bannerStyles.reject} onClick={() => handleConsent("reject")}>
          Rechazar
        </button>

        <button style={bannerStyles.accept} onClick={() => handleConsent("accept")}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

const bannerStyles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#222",
    color: "white",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 999999,
  },
  text: {
    margin: 0,
    maxWidth: "70%",
    fontSize: "14px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  accept: {
    background: "#4caf50",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    color: "white",
    borderRadius: "5px",
  },
  reject: {
    background: "#f44336",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    color: "white",
    borderRadius: "5px",
  },
};
