import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./projectDetail.css";
import projects from "../../data/modularprojects";
import Lightbox from "../../components/LightBox";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [activeImg, setActiveImg] = useState(null);

  if (!project) {
    return (
      <main style={{ minHeight: "65vh", display: "grid", placeItems: "center", padding: "120px 24px 60px" }}>
        <div style={{ textAlign: "center" }}>
          <h1>Proyecto no encontrado</h1>
          <p>El proyecto que buscas no existe o ha cambiado de dirección.</p>
          <Link to="/proyectos/">Ver todos los proyectos</Link>
        </div>
      </main>
    );
  }

  return (
    <div className="pagina_con_fragmento_fijo container-fluid">
      <div className="row justify-content-between">
        <div className="col-xl-4 col-lg-5 centrar_al_medio fragmento_fijo">
          <div className="contenido">
            <Link to="/proyectos/" className="volver">
              <i className="fa fa-angle-left" /> Volver
            </Link>

            <h1 className="titulo">
              {project.title}
              {project.location && <span className="project-location">{project.location}</span>}
            </h1>

            <p style={{ color: "black", whiteSpace: "pre-line" }}>{project.description}</p>
          </div>
        </div>

        <div className="col-xl-8 col-lg-7 fragmento_scroll">
          <img
            src={project.img}
            onClick={() => setActiveImg(project.img)}
            className="project-main-img"
            alt={`${project.title}${project.location ? ` en ${project.location}` : ""}`}
            fetchPriority="high"
          />

          <div id="_lcms_divLoad" className="ordenar_galeria ordenar_articulos">
            {project.gallery?.map((img, i) => (
              <div className="div_articulo" key={img}>
                <img
                  src={img}
                  alt={`${project.title} - imagen ${i + 1}`}
                  onClick={() => setActiveImg(img)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="contacto_articulo">
            <div className="contenido">
              <h2>¿Quieres un proyecto como este?</h2>
              <Link to="/contactar" className="boton_linea_blanco">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {activeImg && <Lightbox image={activeImg} onClose={() => setActiveImg(null)} />}
    </div>
  );
}
