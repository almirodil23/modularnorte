export default function Intro() {
  return (
    <div className="container-fluid">
      <div className="row">
        
        
        {/* COLUMNA IZQUIERDA */}
        <div className="col-lg-6 info_home">
  {/* 
          <li className="redes_intro">
            <a href="https://www.facebook.com/Modular-Projects-145924372121713" target="_blank"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/modularprojects?lang=es" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="https://www.instagram.com/explore/tags/modularprojects/" target="_blank"><i className="fa fa-instagram"></i></a>
          </li>
*/}
          <div className="fragmento_sup">
            <div className="texto_vertical"><span>Modular Norte</span></div>

            <div className="textos_intro">
              <h2 className="titulo">Viviendas Modulares de diseño</h2>

              <p>En <strong>Modular Norte</strong> diseñamos a medida y construimos llave en mano viviendas modulares con estructura de madera en cualquier punto de España.</p>
              <p>Además, nuestro departamento de decoración podrá realizarte la mejor reforma para tu vivienda de diseño.</p>
              <p>Nuestro equipo formado por arquitectos, aparejadores, ingenieros y decoradores estudiará minuciosamente tus necesidades para proponerte la mejor vivienda posible con la mayor eficiencia energética, el mejor diseño al mejor precio y en el menor tiempo.</p>
              <p>Modular Norte da forma a tus ideas e ilusiones</p>



              <a href="/web/131" className="boton_adicional">Conócenos</a>
            </div>
          </div>

          <div className="video">
            <img
              src="/assets/custom/img/fotoxvideo.jpg"
              alt="Modular Norte"
            />
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="col-lg-6 info_home caracteristicas_home">

          <div className="fotos">
            <img src="/recurso/pagina/borrar1.jpg" alt="Modular Norte" />
            <img src="/recurso/pagina/borrar2.jpg" alt="Modular Norte" />
          </div>

          <div className="textos_intro centrar_al_medio">
            <div className="texto_vertical"><span>SOMOS DIFERENTES</span></div>

            <div>
              <h2 className="titulo">Lo que nos<br />hace diferentes</h2>
              
              <h4>REDUCCIÓN</h4>
              <p>Nuestro sistema constructivo modular con estructura de madera laminada con sello de homologacion por la CE , nos permite reducir drásticamente los plazos de ejecución de nuestras viviendas así como el consumo energético futuro de tu hogar.</p>

              <h4>EFICIENCIA</h4>
              <p>Todas nuestras viviendas tienen la calificación energética A, debido al gran aislamiento global de nuestras edificaciones y la ausencia de puentes térmicos. Con esto conseguimos que tu futura vivienda sea lo mas eficiente posible.</p>

              <h4>COMPROMISO</h4>
              <p>Más de 400 viviendas llave en mano en toda España desde 2009 nos avalan a la hora de garantizar la alta calidad de nuestras construcciones y la entrega en los plazos acordados. Los pagos de nuestras obras se hacen por certificación de obra.</p>

              <h4>PROCESOS</h4>
              <p>En Modular Norte nos ocupamos de todo el proceso para la construccion de tu vivienda. Proyectos, gestión con ayuntamientos, construcción llave en mano y una vez finalizada la obra nos ocupamos de tramitar la licencia de primera ocupación..</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
