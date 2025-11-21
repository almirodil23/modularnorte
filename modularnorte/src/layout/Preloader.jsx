import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    if (window.$) {
      window.$(".preloader").fadeOut("fast");
    }
  }, []);

  return (
    <div className="preloader">
      <div>
        <img src="/assets/custom/img/loading.gif" alt="loading" />
      </div>
    </div>
  );
}
