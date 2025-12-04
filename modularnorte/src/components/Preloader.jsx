import { useEffect } from "react";
import "./preloader.css";

export default function Preloader() {
  useEffect(() => {
    // Desaparece después de cargar
    const timer = setTimeout(() => {
      const el = document.querySelector(".preloader");
      if (el) el.classList.add("hide-preloader");
    }, 500); // delay opcional

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <img src="/preloader.gif" alt="loading" className="preloader-img" />
    </div>
  );
}
