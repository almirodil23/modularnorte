export default function ParallaxBlock() {
  return (
    <div
      className="container-fluid parallax"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="padding_seccion">
        <div className="container">
          <div className="row">
            <div className="col-12 centrar_al_medio texto">
              <div className="contenido">
                <p><strong>¿Tienes un terreno? ¿Una vivienda antigua? ¿Un local? ¿O una idea?</strong></p>
                <p style={{color:"#0000006e" ,textAlign: "justify",fontWeight:500}}
    >
                  En Modular Norte construimos y damos forma a todo lo que pase<br />
                  por tu mente.
                </p>

                <a href="/contactar" className="boton_standard">
                  ¿Hablamos?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
