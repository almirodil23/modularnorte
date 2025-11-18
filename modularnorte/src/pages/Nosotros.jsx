import "./nosotros.css";

export default function Nosotros() {
  return (
    <div className="pagina_con_fragmento_fijo container-fluid">

      <div className="row justify-content-between">

        {/* COLUMNA IZQUIERDA FIJA */}
        <div className="col-xl-4 col-lg-5 centrar_al_medio fragmento_fijo">
          <div className="contenido">
            <h1 className="titulo">Sobre Modular Norte</h1>
          </div>
        </div>

        {/* COLUMNA DERECHA SCROLL */}
        <div className="col-xl-8 col-lg-7 fragmento_scroll">
          <div className="contenido_texto">

            <p>
              <strong>Modular Norte</strong> es el partner oficial de Modular Projects en 
              Galicia y norte de la Península, y desde nuestros inicios hemos llevado al 
              mercado un producto de arquitectura modular basado en el sistema de 
              construcción industrializada con estructura de madera que define la marca.
            </p>

            <p>
              Este sistema, consolidado en países del norte de Europa y Estados Unidos, 
              nos permite edificar en tiempos récord, con un coste muy inferior al de la 
              construcción tradicional de ladrillo y una eficiencia energética 
              insuperable, <strong>sin renunciar a unos acabados de alto standing</strong>. 
              Nuestra vinculación con arquitectura de calidad hace que el diseño 
              vanguardista y personalizado sea un pilar fundamental en cada uno de 
              nuestros proyectos.
            </p>

            <p>
              Con el respaldo de <strong>más de 400 viviendas entregadas</strong> en España, 
              Francia, Inglaterra y Portugal, nuestras construcciones modulares son más 
              rápidas y sencillas de ejecutar, lo que permite reducir costes de forma 
              significativa. Utilizamos la madera como material principal: seguro, 
              ecológico, flexible y con unas prestaciones térmico-acústicas muy superiores 
              a las de la construcción convencional.
            </p>

            <p>
              Contamos con un equipo técnico especializado —formado por arquitectos, 
              aparejadores, delineantes e ingenieros— con amplia experiencia en el sector 
              residencial avanzado, lo que nos permite <strong>adaptar y personalizar 
              cualquier tipo de proyecto</strong>: viviendas unifamiliares, naves, 
              ampliaciones, viviendas bajo cubierta, etc., siempre según las necesidades 
              y gustos del cliente.
            </p>

            <p>
              En apenas <strong>120 días</strong>, una vez obtenida la licencia de obra —de 
              la que nos ocupamos integralmente—, su vivienda o proyecto estará totalmente 
              finalizado, con los acabados que desee, ya sea dentro de nuestra memoria de 
              calidades estándar o con las variaciones y mejoras que prefiera.
            </p>

          </div>
        </div>
      </div>

    </div>
  );
}
