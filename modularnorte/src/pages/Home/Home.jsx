import { useEffect, useState } from "react";

import ContactModal from "../ContactModal/ContactModal";

import "./HomeHero.css";



const ICONS = {

  icon1: (

    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>

  ),

  icon2: (

    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>

  ),

  icon3: (

    <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>

  ),

  icon4: (

    <path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>

  ),

  icon5: (

    <path d="M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128Zm64.15,0c1.39-30.77,10.53-52.81,18.3-66.24A106.44,106.44,0,0,1,128,43.16a106.31,106.31,0,0,1,13.52,18.6C154.8,84.7,159,109.28,159.82,128Zm79.65,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z"></path>

  ),

  icon6: (

    <path d="M232,88H216V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64V88H16a8,8,0,0,0,0,16H32v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V104h16v50L131.6,182.65A16.07,16.07,0,0,0,120,198v34a8,8,0,0,0,16,0V198l100.4-28.68A16.07,16.07,0,0,0,248,154V104A16,16,0,0,0,232,88Zm-32,40H48V64H200v64Z"></path>

  ),

  icon7: (

    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>

  ),

  icon8: (

    <path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"></path>

  ),

  icon9: (

    <path d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"></path>

  ),

  icon10: (

    <path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"></path>

  ),

  icon11: (

    <path d="M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>

  ),

  icon12: (

    <path d="M128,136a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h48A8,8,0,0,1,128,136Zm-8-40H72a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm112,65.47V224A8,8,0,0,1,220,231l-24-13.74L172,231A8,8,0,0,1,160,224V200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V86.53a51.88,51.88,0,0,1,0,74.94ZM160,184V161.47A52,52,0,0,1,216,76V56H40V184Zm56-12a51.88,51.88,0,0,1-40,0v38.22l16-9.16a8,8,0,0,1,7.94,0l16,9.16Zm16-48a36,36,0,1,0-36,36A36,36,0,0,0,232,124Z"></path>

  ),

  icon13: (

    <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>

  ),

  icon14: (

    <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path>

  ),

  icon15: (

    <path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z"></path>

  ),

  icon16: (

    <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>

  ),

  icon17: (

    <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>

  ),

  icon18: (

    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>

  ),

  icon19: (

    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>

  ),

};



function Icon({ name }) {

  return (

    <svg

      className="ico"

      aria-hidden="true"

      viewBox="0 0 256 256"

      fill="currentColor"

    >

      {ICONS[name]}

    </svg>

  );

}



/** includeChrome: true only if your global layout has no header/footer. */

export default function Home({

  includeChrome = false,

  heroVideo = "/assets/modularnorte-hero.mp4",

}) {

  const [modal, setModal] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const closeModal = () => setModal(null);

  const openBudget = () => {

    setMenuOpen(false);

    setModal("budget");

  };

  const openContact = () => {

    setMenuOpen(false);

    setModal("contact");

  };



  useEffect(() => {

    const onKeyDown = (event) => {

      if (event.key === "Escape") setMenuOpen(false);

    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);

  }, []);



  return (

    <>

      <div className="mn-home">

        {includeChrome && (

          <>

            <div className="aviso">

              <div className="wrap">

                <span>Más de 400 viviendas llave en mano desde 2009</span>

                <a href="tel:+34722782240">

                  <Icon name="icon1" />

                  722 782 240

                </a>

              </div>

            </div>

            <header className="cab">

              <div className="wrap">

                <a href="#inicio" aria-label="Modular Norte, inicio">

                  <img

                    className="logo"

                    src="https://www.modularnorte.com/assets/custom/img/logo_menu.png"

                    alt="Logo Modular Norte"

                    width="64"

                    height="64"

                  />

                </a>

                <nav

                  aria-label="Principal"

                  id="mn-home-navigation"

                  className={menuOpen ? "is-open" : ""}

                  onClick={() => setMenuOpen(false)}

                >

                  <a href="#casas">Qué construimos</a>

                  <a href="#proyectos">Proyectos</a>

                  <a href="#proceso">Cómo construimos</a>

                  <a href="#preguntas">Preguntas</a>

                  <a href="#blog">Blog</a>

                  <button type="button" onClick={openContact}>

                    Contacto

                  </button>

                </nav>

                <a className="tel" href="tel:+34722782240">

                  <Icon name="icon1" />

                  722 782 240

                </a>

                <button className="boton" type="button" onClick={openBudget}>

                  Pedir presupuesto

                </button>

                <button

                  className="hamb"

                  type="button"

                  aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}

                  aria-expanded={menuOpen}

                  aria-controls="mn-home-navigation"

                  onClick={() => setMenuOpen(!menuOpen)}

                >

                  <Icon name="icon2" />

                </button>

              </div>

            </header>

          </>

        )}

        <main id="inicio">

          <div className="hero">

            <video

              className="hero-video"

              autoPlay

              muted

              loop

              playsInline

              preload="metadata"

              poster="https://www.modularnorte.com/assets/custom/img/home.webp"

              aria-hidden="true"

              onError={(event) => {

                event.currentTarget.style.display = "none";

              }}

            >

              <source type="video/mp4" src={heroVideo} />

            </video>

            <img

              className="hero-foto"

              src="https://www.modularnorte.com/assets/custom/img/home.webp"

              alt=""

              width="1600"

              height="900"

            />

            <div className="hero-sombra"></div>

            <div className="wrap">

              <h1>Casas modulares <br/> desde Galicia</h1>

              <p>

                Diseñamos a medida y construimos llave en mano, desde A Coruña.

              </p>

              <div className="acciones">

                <button

                  className="boton claro"

                  type="button"

                  onClick={openBudget}

                >

                  Pedir presupuesto

                </button>

                <a className="boton linea" href="#proyectos">

                  Ver proyectos

                </a>

              </div>

            </div>

          </div>

          <div className="marco">

            <div className="wrap">

              <div className="marco-caja">

                <div>

                  <div className="cifra">+400</div>

                  <h3>viviendas llave en mano</h3>

                  <p>En toda España, desde 2009.</p>

                </div>

                <div>

                  <Icon name="icon3" />

                  <h3>Garantía legal de 10 años</h3>

                  <p>Para cualquier estructura.</p>

                </div>

                <div>

                  <Icon name="icon4" />

                  <h3>Pago por certificación</h3>

                  <p>Pagas únicamente las obras ejecutadas.</p>

                </div>

                <div>

                  <Icon name="icon5" />

                  <h3>Seguro todo-construcción</h3>

                  <p>Cubre el valor total durante la obra.</p>

                </div>

              </div>

            </div>

          </div>

          <section className="que" id="casas">

            <div className="wrap">

              <h2>¿Tienes un terreno o una idea de vivienda?</h2>

              <p className="lead">

                Arquitectos, aparejadores, ingenieros y decoradores estudian tu

                caso y lo construyen en madera.

              </p>

              <div className="rejilla">

                <article className="tipo">

                  <img

                    src="/images/SATE1.jpeg"

                    alt="Vivienda modular de dos plantas de Modular Norte"

                    width="1050"

                    height="700"

                    loading="lazy"

                  />

                  <div>

                    <h3>Viviendas a medida</h3>

                    <p>

                      Cada proyecto es único. Ninguna vivienda es igual a otra.

                    </p>

                  </div>

                </article>

                <article className="tipo">

                  <img

                    src="/images/esqueleto.jpeg"

                    alt="Ático modular de Modular Norte"

                    width="1620"

                    height="1080"

                    loading="lazy"

                  />

                  <div>

                    <h3>Construcción rápida y eficiente</h3>

                    <p>Nuestro modelo constructivo mejora la construcción tradicional</p>

                  </div>

                </article>

                <article className="tipo texto">

                  <div className="crd3">

                    <Icon name="icon6" />

                    <div>

                      <h3>Proyecto llave en mano</h3>

                      <p>

                        Nos encargamos de todo el proceso, desde el diseño hasta la entrega de tu nueva vivienda.

                      </p>

                    </div>

                    <button

                      className="boton"

                      type="button"

                      onClick={openBudget}

                    >

                      Contar mi proyecto

                    </button>

                  </div>

                </article>

              </div>

            </div>

          </section>

                    <section className="madera">

            <div className="wrap dos">

              <div className="fotos">

                <div className="f">

                  <img

                    src="/images/Madera1.jpeg"

                    alt="Vivienda modular terminada con revestimiento de madera"

                    width="697"

                    height="465"

                    loading="lazy"

                  />

                </div>

                <div className="f">

                  <img

                    src="/images/Madera2.jpeg"

                    alt="Salón de una vivienda modular terminada"

                    width="686"

                    height="457"

                    loading="lazy"

                  />

                </div>

                <div className="f">

                  <img

                    src="/images/Madera3.jpeg"

                    alt="Dormitorio con pared de madera"

                    width="793"

                    height="497"

                    loading="lazy"

                  />

                </div>

              </div>

              <div>

                <h2>Por qué construir en madera</h2>

                <ul className="ventajas">

                  <li>

                    <span className="circ">

                      <Icon name="icon13" />

                    </span>

                    <div>

                      <h3>Calificación energética A</h3>

                      <p>Gran aislamiento y ausencia de puentes térmicos.</p>

                    </div>

                  </li>

                  <li>

                    <span className="circ">

                      <Icon name="icon14" />

                    </span>

                    <div>

                      <h3>Madera laminada con sello CE</h3>

                      <p>Estructura homologada que cumple el Código Técnico.</p>

                    </div>

                  </li>

                  <li>

                    <span className="circ">

                      <Icon name="icon15" />

                    </span>

                    <div>

                      <h3>El exterior que tú elijas</h3>

                      <p>

                        Obra vista, piedra o monocapa. No tiene que ser madera.

                      </p>

                    </div>

                  </li>

                  <li>

                    <span className="circ">

                      <Icon name="icon16" />

                    </span>

                    <div>

                      <h3>Material ecológico</h3>

                      <p>Renovable, reciclable y con bajo impacto ambiental.</p>

                    </div>

                  </li>

                </ul>

              </div>

            </div>

          </section>



          <section className="obra-pasos" id="proceso">

            <div className="wrap">

              <h2>Así se levanta tu casa</h2>

              <p className="lead">

                Cinco fases de obra, con fotos de una construcción real.

              </p>

              <div className="pasos">

                <div className="paso">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/recurso/pagina/imagen/proceso_constructivo/proceso1.jpg"

                      alt="Replanteo de la losa de cimentación"

                      width="725"

                      height="544"

                      loading="lazy"

                    />

                  </div>

                  <h3>Replanteo de la losa</h3>

                </div>

                <div className="paso">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/recurso/pagina/imagen/proceso_constructivo/proceso2.jpg"

                      alt="Encofrado y hormigonado de la losa"

                      width="900"

                      height="675"

                      loading="lazy"

                    />

                  </div>

                  <h3>Encofrado y hormigonado</h3>

                </div>

                <div className="paso">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/recurso/pagina/imagen/proceso_constructivo/proceso3.jpg"

                      alt="Montaje de la estructura de madera laminada"

                      width="695"

                      height="522"

                      loading="lazy"

                    />

                  </div>

                  <h3>Estructura de madera laminada</h3>

                </div>

                <div className="paso">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/recurso/pagina/imagen/proceso_constructivo/proceso4.jpg"

                      alt="Recubrimiento perimetral con panel OSB/3"

                      width="718"

                      height="538"

                      loading="lazy"

                    />

                  </div>

                  <h3>Recubrimiento con panel OSB/3</h3>

                </div>

                <div className="paso">

                  <div className="foto">

                    <img

                      src="/images/5SATE.jpeg"

                      alt="Instalaciones de luz y agua sin rozas"

                      width="690"

                      height="518"

                      loading="lazy"

                    />

                  </div>

                  <h3>Fachada en SATE o a medida</h3>

                </div>

              </div>

              <div className="gestion">

                <div>

                  <Icon name="icon9" />

                  Proyecto de arquitectura

                </div>

                <div>

                  <Icon name="icon10" />

                  Gestión con el ayuntamiento

                </div>

                <div>

                  <Icon name="icon11" />

                  Construcción llave en mano

                </div>

                <div>

                  <Icon name="icon12" />

                  Licencia de primera ocupación

                </div>

              </div>

            </div>

          </section>



          <section className="dudas" id="preguntas">

            <div className="wrap dos">

              <div>

                <h2>Antes de pedir presupuesto</h2>

                <a className="mas" href="/preguntas-frecuentes">

                  Leer todas las preguntas

                </a>

              </div>

              <div>

                <details open>

                  <summary>

                    ¿Cómo se paga la obra?

                    <Icon name="icon18" />

                  </summary>

                  <p>

                    Mediante certificaciones de obra. Ves avanzar tu vivienda y

                    pagas únicamente las obras ejecutadas.

                  </p>

                </details>

                <details>

                  <summary>

                    ¿Se puede hipotecar?

                    <Icon name="icon18" />

                  </summary>

                  <p>

                    Sí. Son bienes inmuebles con proyecto visado, licencia de

                    obra y cédula de habitabilidad.

                  </p>

                </details>

                <details>

                  <summary>

                    ¿Es sólida una estructura de madera?

                    <Icon name="icon18" />

                  </summary>

                  <p>

                    Soporta el mismo peso que una vivienda tradicional y cumple

                    todas las normativas vigentes.

                  </p>

                </details>

                <details>

                  <summary>

                    ¿Y si hay un incendio?

                    <Icon name="icon18" />

                  </summary>

                  <p>

                    La madera tiene baja conductividad térmica, lo que retrasa

                    el colapso estructural más que en acero.

                  </p>

                </details>

              </div>

            </div>

          </section>



          <section className="blog" id="blog" style={{ paddingTop: 0 }}>

            <div className="wrap">

              <h2>Guías para construir en Galicia</h2>

              <div className="dos">

                <a

                  className="grande"

                  href="/blog/elegir-terreno-casa-modular-galicia"

                >

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/proyectos/varias/pasiaje_galicia.jpg"

                      alt="Paisaje de Galicia"

                      width="1023"

                      height="686"

                      loading="lazy"

                    />

                  </div>

                  <h3 syle={{color:"#000"}}>

                    Cómo elegir el terreno ideal para una casa modular en

                    Galicia

                  </h3>

                </a>

                <div className="lista">

                  <a href="/blog/ventajas-estructura-madera-galicia">

                    <h3>

                      Ventajas de construir con estructura de madera en Galicia

                    </h3>

                    <p>Por qué funciona con el clima gallego.</p>

                  </a>

                  <a href="/blog/comprar-casa-modular-galicia-sin-errores">

                    <h3>

                      Claves para comprar una casa modular en Galicia sin

                      errores

                    </h3>

                    <p>Terrenos no edificables y presupuestos incompletos.</p>

                  </a>

                  <a href="/blog/">

                    <h3>Ver todos los artículos</h3>

                  </a>

                </div>

              </div>

            </div>

          </section>

        </main>

        <section className="proyectos" id="proyectos">

            <div className="wrap">



              <div className="cabeza">

                <div>

                  <h2>Proyectos reales, con su ubicación</h2>

                  <p className="lead">

                    Del norte a Canarias. Cada ficha dice dónde está la obra.

                  </p>

                </div>

                <a className="boton" href="/proyectos/">

                  Ver todos los proyectos

                </a>

              </div>

              <div className="obras">

                <a

                  className="obra ancha"

                  href="/proyecto/ampliacion-modular-y-reforma-integral"

                >

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/proyectos/ampliacion-modular-y-reforma-integral/cover.jpg"

                      alt="Ampliación modular y reforma integral en San Sebastián"

                      width="1620"

                      height="1080"

                      loading="lazy"

                    />

                  </div>

                  <h3>Ampliación modular y reforma integral</h3>

                  <span className="lugar">

                    <Icon name="icon7" />

                    San Sebastián

                  </span>

                </a>

                <a className="obra ancha" href="/proyecto/project-130">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/proyectos/project-130/cover.jpg"

                      alt="Project 130 en Lizarraga, Navarra"

                      width="1613"

                      height="1080"

                      loading="lazy"

                    />

                  </div>

                  <h3>Project 130</h3>

                  <span className="lugar">

                    <Icon name="icon7" />

                    Lizarraga, Navarra

                  </span>

                </a>

                <a className="obra" href="/proyecto/tenerife">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/proyectos/tenerife/imagen_8.jpg"

                      alt="Project 140 en Adeje, Tenerife"

                      width="1050"

                      height="700"

                      loading="lazy"

                    />

                  </div>

                  <h3>Project 140</h3>

                  <span className="lugar">

                    <Icon name="icon7" />

                    Adeje, Tenerife

                  </span>

                </a>

                <a className="obra" href="/proyecto/denia">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/proyectos/denia/cover.jpg"

                      alt="Project 160 en Denia, Alicante"

                      width="1050"

                      height="700"

                      loading="lazy"

                    />

                  </div>

                  <h3>Project 160</h3>

                  <span className="lugar">

                    <Icon name="icon7" />

                    Denia, Alicante

                  </span>

                </a>

                <a className="obra" href="/proyecto/project-90-tarragona">

                  <div className="foto">

                    <img

                      src="https://www.modularnorte.com/proyectos/project-90-tarragona/img_1.jpg"

                      alt="Project 90 en Tarragona, Tarragona"

                      width="1050"

                      height="700"

                      loading="lazy"

                    />

                  </div>

                  <h3>Project 90</h3>

                  <span className="lugar">

                    <Icon name="icon7" />

                    Tarragona

                  </span>

                </a>

              </div>

            </div>

          </section>



        <div className="presu" id="presupuesto">

          <div className="wrap dos">

            <div className="out">

              <h2>Pide tu presupuesto</h2>

              <p className="lead">

                Cuéntanos qué necesitas y estudiamos contigo las posibilidades

                de tu proyecto.

              </p>

              <ul className="datos">

                <li>

                  <span className="circ">

                    <Icon name="icon1" />

                  </span>

                  <a href="tel:+34722782240">722 782 240</a>

                </li>

                <li>

                  <span className="circ">

                    <Icon name="icon19" />

                  </span>

                  <a href="mailto:info@modularnorte.com">

                    info@modularnorte.com

                  </a>

                </li>

                <li>

                  <span className="circ">

                    <Icon name="icon7" />

                  </span>

                  Pazo Arenaza, Iñas, Oleiros (A Coruña)

                </li>

              </ul>

            </div>

            <div className="contact-card" id="home-contact-cta">

              <h3>Hablemos de tu proyecto</h3>

              <p>

                Cuéntanos tu idea, dónde quieres construir y qué necesitas.

                Estudiamos contigo las posibilidades.

              </p>

              <ul>

                <li>Vivienda a medida</li>

                <li>Ampliaciones y áticos</li>

                <li>Reforma y decoración</li>

              </ul>

              <button className="boton" type="button" onClick={openBudget}>

                Pedir presupuesto

              </button>

              <button

                className="contact-link"

                type="button"

                onClick={openContact}

              >

                Hacer una consulta

              </button>

            </div>

          </div>

        </div>

        {includeChrome && (

          <footer>

            <div className="wrap">

              <div className="cols">

                <div className="marca">

                  <img

                    className="logo"

                    src="https://www.modularnorte.com/assets/custom/img/logo_menu.png"

                    alt="Logo Modular Norte"

                    width="84"

                    height="84"

                    loading="lazy"

                  />

                  <p>

                    Casas modulares de madera, diseñadas a medida y construidas

                    llave en mano.

                  </p>

                </div>

                <div>

                  <h3>Modular Norte</h3>

                  <ul>

                    <li>

                      <a href="/proyectos/">Proyectos</a>

                    </li>

                    <li>

                      <a href="/proceso-constructivo">Proceso constructivo</a>

                    </li>

                    <li>

                      <a href="/preguntas-frecuentes">Preguntas</a>

                    </li>

                    <li>

                      <a href="/conocenos">Conócenos</a>

                    </li>

                    <li>

                      <a href="/politica-privacidad">Política de privacidad</a>

                    </li>

                  </ul>

                </div>

                <div>

                  <h3>Contacto</h3>

                  <ul>

                    <li>

                      <Icon name="icon1" />

                      <a href="tel:+34722782240">722 782 240</a>

                    </li>

                    <li>

                      <Icon name="icon19" />

                      <a href="mailto:info@modularnorte.com">

                        info@modularnorte.com

                      </a>

                    </li>

                    <li>

                      <Icon name="icon7" />A Coruña

                    </li>

                  </ul>

                </div>

              </div>

              <p className="firma">

                © Modular Norte · Casas modulares de madera

              </p>

            </div>

          </footer>

        )}

      </div>

      <ContactModal

        open={modal === "contact"}

        mode="contact"

        onClose={closeModal}

      />

      <ContactModal

        open={modal === "budget"}

        mode="budget"

        onClose={closeModal}

      />

    </>

  );

}




