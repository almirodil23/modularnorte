export default function ProjectsPreview() {
  return (
    <>
      {/* Título negro */}
      <div className="container-fluid titulo_negro">
        <div className="row">
          <div className="col-12">
            <h2>Proyectos</h2>
          </div>
        </div>
      </div>

      {/* Cuadrícula de proyectos */}
      <div className="container-fluid listado_proyectos">
        <div className="row">

          {/* 1 */}
          <div
            className="col-lg-3 col-md-6 miniatura_proyecto"
            style={{ backgroundImage: 'url(/recurso/articulo/portada_project_180_aspe.jpg)' }}
          >
            <a href="/producto/117/project-180">
              <div className="texto">
                <h4>Project 180</h4>
                <h5>Aspe, Alicante</h5>
              </div>

              <div className="flecha_especial">
                <div className="animated-arrow">
                  <span className="the-arrow -left"><span className="shaft"></span></span>
                  <span className="main">
                    <span className="text">VER MÁS</span>
                    <span className="the-arrow -right"><span className="shaft"></span></span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 2 */}
          <div
            className="col-lg-3 col-md-6 miniatura_proyecto"
            style={{ backgroundImage: 'url(/recurso/articulo/1_3.jpg)' }}
          >
            <a href="/producto/57/project-140">
              <div className="texto">
                <h4>Project 140</h4>
                <h5>Adeje, Tenerife</h5>
              </div>

              <div className="flecha_especial">
                <div className="animated-arrow">
                  <span className="the-arrow -left"><span className="shaft"></span></span>
                  <span className="main">
                    <span className="text">VER MÁS</span>
                    <span className="the-arrow -right"><span className="shaft"></span></span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 3 */}
          <div
            className="col-lg-3 col-md-6 miniatura_proyecto"
            style={{ backgroundImage: 'url(/recurso/articulo/image0_mdp.jpeg)' }}
          >
            <a href="/producto/116/project-170">
              <div className="texto">
                <h4>Project 170</h4>
                <h5>Guadalajara</h5>
              </div>

              <div className="flecha_especial">
                <div className="animated-arrow">
                  <span className="the-arrow -left"><span className="shaft"></span></span>
                  <span className="main">
                    <span className="text">VER MÁS</span>
                    <span className="the-arrow -right"><span className="shaft"></span></span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 4 */}
          <div
            className="col-lg-3 col-md-6 miniatura_proyecto"
            style={{ backgroundImage: 'url(/recurso/articulo/56a257a1_5e51_4fd6_a468_af2b54d3b0a6.jpg)' }}
          >
            <a href="/producto/115/project-120">
              <div className="texto">
                <h4>Project 120</h4>
                <h5>Muchamiel, Alicante</h5>
              </div>

              <div className="flecha_especial">
                <div className="animated-arrow">
                  <span className="the-arrow -left"><span className="shaft"></span></span>
                  <span className="main">
                    <span className="text">VER MÁS</span>
                    <span className="the-arrow -right"><span className="shaft"></span></span>
                  </span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Botón debajo */}
      <div className="container-fluid titulo_negro">
        <div className="row">
          <div className="col-12">
            <a href="/projects" className="boton_linea_blanco">
              Ver Más Proyectos
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
