import projects from "../../data/modularprojects";

export function ProyectosGrid() {
  const preview = projects.slice(0, 4); // Los 4 primeros

  return (
    <div className="container-fluid listado_proyectos">
      <div className="row">

        {preview.map((p) => (
          <div
            key={p.id}
            className="col-lg-3 col-md-6 miniatura_proyecto"
            style={{ backgroundImage: `url(${p.img})` }}
          >
            <a href={`/producto/${p.slug}`}>
              <div className="texto">
                <h4>{p.title}</h4>
                <h5>{p.location}</h5>
              </div>
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}
