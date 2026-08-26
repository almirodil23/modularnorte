import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Evitamos que el navegador restaure automáticamente
    // la posición anterior del scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Subimos inmediatamente
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Volvemos a hacerlo cuando React haya terminado
    // de pintar la nueva ruta
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    // Y una última vez por si algún JS antiguo
    // modifica el scroll justo después
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}