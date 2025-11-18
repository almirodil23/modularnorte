import projects from "../data/modularprojects";
import "./projects.css";


export default function Projects() {

  return (
    <div className="pagina_con_fragmento_fijo container-fluid projects-page">

      {/* COLUMNA IZQUIERDA */}
      <div className="row justify-content-between">

        <div className="col-xl-4 col-lg-5 centrar_al_medio fragmento_fijo">
          <div className="contenido">
            <h1 className="titulo">Modular Norte</h1>
            <p>
              Llevamos diseñando y construyendo llave en mano viviendas modulares
              basadas en la construcción industrializada modular con estructura de
              madera más de 15 años. Con más de 400 viviendas realizadas por toda España,
              incluyendo Baleares y Canarias.
              <br /><br />
              Una construcción ecológica, segura y rápida. Todos nuestros proyectos se
              elaboran con un material seguro, ecológico y a la vez flexible y funcional,
              con unas prestaciones térmico acústicas muy superiores a la construcción
              tradicional y con el sello de certificación de la CE.
              <br /><br />
              Nuestro equipo es capaz de personalizar cualquier proyecto al 100%:
              ya sea vivienda, naves, ampliaciones, sobre áticos, etc. según las
              necesidades y gustos del cliente. Descubre todos nuestros proyectos e
              inspírate, nosotros lo haremos realidad.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: GRID DE PROYECTOS */}
        <div className="col-xl-8 col-lg-7 fragmento_scroll">
          <div className="ordenar_articulos_orden projects-grid">

            {projects.map((p) => (
              <div className="div_articulo" key={p.id}>
                <a href={`/producto/${p.id}/${p.slug}`} className="centrar_al_medio">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <h4 className="titulo">
                    {p.title}
                    <br />
                    {p.location && <p>{p.location}</p>}
                  </h4>
                </a>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

