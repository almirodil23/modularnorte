import { useEffect } from "react";

export default function Testimonials() {

  useEffect(() => {
    // Esperar a que jQuery y OwlCarousel estén cargados
    if (window.$) {
      window.$(".carrusel_opiniones").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        dots: true,
      });
    }
  }, []);

  return (
    <div className="container-fluid opinion_clientes">
      <div className="row">

        <div
          className="col-lg-6 imagen_full"
          style={{ backgroundImage: 'url(/recurso/pagina/opiniones_home.jpg)' }}
        ></div>

        <div className="col-lg-6 info_home">
          <div className="fragmento_sup">
            <div className="texto_vertical"><span>Nuestra Experiencia Habla</span></div>

            <div className="textos_intro">
              <h2 className="titulo">Lo que dicen nuestros clientes</h2>

              <div className="owl-carousel carrusel_opiniones owl-theme">

                <div className="item">
                  <p>“Modular Projects realizó la reforma...”</p>
                  <h6>B&S</h6>
                </div>

                <div className="item">
                  <p>“Hace apenas dos meses realizamos...”</p>
                  <h6>C&C</h6>
                </div>

                <div className="item">
                  <p>“La primera vez que hablé con José Buyo...”</p>
                  <h6>A&M</h6>
                </div>

                <div className="item">
                  <p>“Recibimos la vivienda hace tan solo...”</p>
                  <h6>S&L</h6>
                </div>

                <div className="item">
                  <p>“Nos costó mucho tiempo encontrar...”</p>
                  <h6>P&L</h6>
                </div>

                <div className="item">
                  <p>“Llevamos instalados en esta vivienda...”</p>
                  <h6>M&J</h6>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
