import { useEffect, useState } from "react";
import "./SeptemberPromo.css";

export default function SeptemberPromo({
  onBudgetClick,
}) {
  const [popupOpen, setPopupOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = popupOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [popupOpen]);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleBudgetClick = () => {
    setPopupOpen(false);

    if (onBudgetClick) {
      onBudgetClick();
    }
  };

  return (
    <>
      {/* =========================
          POPUP
      ========================= */}

      {popupOpen && (
        <div
          className="promo-popup__overlay"
          onClick={closePopup}
        >
          <div
            className="promo-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="promo-popup__close"
              onClick={closePopup}
              aria-label="Cerrar promoción"
            >
              ×
            </button>

            <div className="promo-popup__decoration promo-popup__decoration--left" />
            <div className="promo-popup__decoration promo-popup__decoration--right" />

            <div className="promo-popup__content">
        

              <h2 className="promo-popup__title">
                <strong>TU CASA</strong>
                <span>MODULAR</span>
              </h2>


              <button
                type="button"
                className="promo-popup__button"
                onClick={handleBudgetClick}
              >
                SOLICITAR PRESUPUESTO
              </button>

              <button
                type="button"
                className="promo-popup__skip"
                onClick={closePopup}
              >
                Seguir navegando
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          HEADER PROMOCIONAL
          aparece al cerrar popup
      ========================= */}


    </>
  );
}