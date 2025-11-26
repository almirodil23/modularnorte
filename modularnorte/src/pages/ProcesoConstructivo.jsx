import "./proceso.css"

export default function ProcesoConstructivo() {
  return (
    <>
      {/* Título estándar */}
      <div className="titulo_pagina_standard container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Proceso Constructivo</h1>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container pagina_standard">
        <div className="row justify-content-md-center">

          {/* ======= COLUMNA PRINCIPAL (9/12) ======= */}
          <div className="col-md-9">

            {/* Paso 1 */}
            <div className="col-12 ficha_blog ficha_proceso">
              <div className="row">
                <div className="col-md-6 col-12">

                  <a data-gallery="example-gallery" data-toggle="lightbox" href="/recurso/pagina/imagen/proceso_constructivo/proceso1.jpg">
                    <img src="/recurso/pagina/imagen/proceso_constructivo/proceso1.jpg" alt="Paso 1"/>
                  </a>
                </div>
                <div className="col-md-6 col-12 centrar_al_medio">
                  <div className="contenedor">
                    <p>Día 1</p>
                    <h3 className="titulo">
                      <span>1.</span> Replanteo de la losa de cimentación una vez preparada la parcela.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="col-12 ficha_blog ficha_proceso">
              <div className="row">
                <div className="col-md-6 col-12">
                  <a data-gallery="example-gallery" data-toggle="lightbox" href="/recurso/pagina/imagen/proceso_constructivo/proceso2.jpg">
                    <img src="/recurso/pagina/imagen/proceso_constructivo/proceso2.jpg" alt="Paso 2"/>
                  </a>
                </div>
                <div className="col-md-6 col-12 centrar_al_medio">
                  <div className="contenedor">
                    <p>Día 5</p>
                    <h3 className="titulo">
                      <span>2.</span> Encofrado y hormigonado de losa según parámetros del estudio geotécnico.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="col-12 ficha_blog ficha_proceso">
              <div className="row">
                <div className="col-md-6 col-12">
                  <a data-gallery="example-gallery" data-toggle="lightbox" href="/recurso/pagina/imagen/proceso_constructivo/proceso3.jpg">
                    <img src="/recurso/pagina/imagen/proceso_constructivo/proceso3.jpg" alt="Paso 3"/>
                  </a>
                </div>
                <div className="col-md-6 col-12 centrar_al_medio">
                  <div className="contenedor">
                    <p>Día 15</p>
                    <h3 className="titulo">
                      <span>3.</span> Montaje de estructura portante de madera laminada.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="col-12 ficha_blog ficha_proceso">
              <div className="row">
                <div className="col-md-6 col-12">
                  <a data-gallery="example-gallery" data-toggle="lightbox" href="/recurso/pagina/imagen/proceso_constructivo/proceso4.jpg">
                    <img src="/recurso/pagina/imagen/proceso_constructivo/proceso4.jpg" alt="Paso 4"/>
                  </a>
                </div>
                <div className="col-md-6 col-12 centrar_al_medio">
                  <div className="contenedor">
                    <p>Día 30</p>
                    <h3 className="titulo">
                      <span>4.</span> Recubrimiento perimetral con panel OSB/3.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="col-12 ficha_blog ficha_proceso">
              <div className="row">
                <div className="col-md-6 col-12">
                  <a data-gallery="example-gallery" data-toggle="lightbox" href="/recurso/pagina/imagen/proceso_constructivo/proceso5.jpg">
                    <img src="/recurso/pagina/imagen/proceso_constructivo/proceso5.jpg" alt="Paso 5"/>
                  </a>
                </div>
                <div className="col-md-6 col-12 centrar_al_medio">
                  <div className="contenedor">
                    <p>Día 45</p>
                    <h3 className="titulo">
                      <span>5.</span> Instalaciones de luz y agua sin rozas.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 6 al 13 (puedo añadir el resto si quieres) */}

          </div>

          {/* ======= SIDEBAR DERECHA (3/12) ======= */}
          <div className="col-md-3">
            <div className="sidebar_galeria">
              {Array.from({ length: 11 }).map((_, i) => (
                <a
                  key={i}
                  data-gallery="example-gallery2"
                  data-toggle="lightbox"
                  href={`/recurso/pagina/imagen/proceso_constructivo/acabado${i+1}.jpg`}
                >
                  <img src={`/recurso/pagina/imagen/proceso_constructivo/acabado${i+1}.jpg`} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Botón flotante */}
      <div className="boton_flotante">
        <a href="/contactar">Contáctanos</a>
      </div>
    </>
  );
}
