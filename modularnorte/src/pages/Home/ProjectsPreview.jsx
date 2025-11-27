import projects from "../../data/modularprojects";
import "./projectspreview.css";

export default function ProjectsPreview() {
const slugs = ["tenerife", "project-220", "denia", "muchamiel"];

const preview = projects
  .filter(p => slugs.includes(p.slug))
  .sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug));

  console.log(preview);

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

      {/* Cuadrícula */}
      <div className="container-fluid listado_proyectos">
        <div className="row">
          {preview.map((p) => (
            <div
              key={p.id}
              className="col-lg-3 col-md-6 miniatura_proyecto"
              style={{
                backgroundImage: `url(${p.img})`,
              }}
            >
              <a href={`/producto/${p.slug}`}>
                <div className="texto">
                  <h4>{p.title}</h4>
                  <h5>{p.location}</h5>
                </div>

                <div className="flecha_especial">
                  <div className="animated-arrow">
                    <span className="the-arrow -left">
                      <span className="shaft"></span>
                    </span>
                    <span className="main">
                      <span className="text">VER MÁS</span>
                      <span className="the-arrow -right">
                        <span className="shaft"></span>
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Botón */}
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
