import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./projectDetail.css";
import projects from "../../data/modularprojects";
import Lightbox from "../../components/LightBox"

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    const p = projects.find((x) => x.slug === slug);
    setProject(p);
  }, [slug]);

  if (!project) return <p>Cargando...</p>;

  return (
    <div className="pagina_con_fragmento_fijo container-fluid">

      <div className="row justify-content-between">

        {/* COLUMNA IZQUIERDA */}
        <div className="col-xl-4 col-lg-5 centrar_al_medio fragmento_fijo">
          <div className="contenido">
            <Link to="/projects" className="volver">
              <i className="fa fa-angle-left" /> Volver
            </Link>

            <h1 className="titulo">
              {project.title}
              {project.location && <p>{project.location}</p>}
            </h1>

            <p style={{color:"black"}}>{project.description}</p>
          </div>
        </div>

        {/* GALERÍA */}
        <div className="col-xl-8 col-lg-7 fragmento_scroll">

          {/* Imagen principal */}
          <img
            src={project.img}
            onClick={() => setActiveImg(project.img)}
            className="project-main-img"
            alt={project.title}
          />

          {/* Miniaturas */}
          <div id="_lcms_divLoad" className="ordenar_galeria ordenar_articulos">
            {project.gallery?.map((img, i) => (
              <div className="div_articulo" key={i}>
                <img
                  src={img}
                  alt={project.title}
                  onClick={() => setActiveImg(img)}
                />
              </div>
            ))}
          </div>

          {/* CTA Contactar */}
          <div className="contacto_articulo">
            <div className="contenido">
              <h3>¿Quieres un proyecto como este?</h3>
              <Link to="/contactar" className="boton_linea_blanco">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeImg && (
        <Lightbox image={activeImg} onClose={() => setActiveImg(null)} />
      )}
    </div>
  );
}
