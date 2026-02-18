import React from "react";
import "./conocenos.css";

const Policy = () => {
  return (
    <section className="conocenos-section">
      
      <div className="conocenos-header">
        <h1 className="conocenos-title">Política de Privacidad</h1>
      </div>

      <p className="conocenos-paragraph">
        En <strong>MODULAR NORTE</strong> nos tomamos muy en serio la protección de tus datos.  
        A continuación, te explicamos cómo tratamos la información que nos proporcionas.
      </p>

      {/* 1. Responsable */}
      <h2 className="conocenos-subtitle">1. Responsable del tratamiento</h2>
      <p className="conocenos-paragraph">
        <strong>MODULAR NORTE</strong> <br />Roberto Figueiral Prada/CIF 32833278L
        <br />Dirección: Calle Arenaza 18 cp 15171 Oleiros - A Coruña 
        <br />Email: <strong>info@modularnorte.com</strong>  
        <br />Teléfono: <strong>722 782 240</strong>
      </p>

      {/* 2. Finalidades */}
      <h2 className="conocenos-subtitle">2. Finalidades del tratamiento de datos</h2>
      <ul className="conocenos-list">
        <li>Gestionar solicitudes de información y presupuestos para casas modulares.</li>
        <li>Envío de comunicaciones comerciales (solo con consentimiento expreso).</li>
        <li>Mejorar la experiencia de usuario en nuestra web.</li>
        <li>Cumplimiento de obligaciones legales.</li>
      </ul>

      {/* 3. Base legal */}
      <h2 className="conocenos-subtitle">3. Base legal para el tratamiento</h2>
      <ul className="conocenos-list">
        <li><strong>Ejecución de medidas precontractuales</strong> (art. 6.1.b RGPD): solicitudes de presupuesto.</li>
        <li><strong>Consentimiento expreso</strong> (art. 6.1.a RGPD): comunicaciones comerciales.</li>
        <li><strong>Interés legítimo</strong> (art. 6.1.f RGPD): mejora de servicios y experiencia web.</li>
      </ul>

      {/* 4. Destinatarios */}
      <h2 className="conocenos-subtitle">4. Destinatarios de los datos</h2>
      <ul className="conocenos-list">
        <li>Proveedores necesarios para la actividad (hosting, email marketing, etc.).</li>
        <li>No se ceden datos a terceros con fines comerciales.</li>
        <li>Cesiones posibles solo si existe obligación legal.</li>
      </ul>

      {/* 5. Plazos */}
      <h2 className="conocenos-subtitle">5. Plazo de conservación</h2>
      <ul className="conocenos-list">
        <li>Presupuestos: 5 años desde la última comunicación.</li>
        <li>Newsletter: hasta que revoques el consentimiento.</li>
        <li>Datos analíticos: según herramientas externas (p. ej. Google Analytics).</li>
      </ul>

      {/* 6. Derechos */}
      <h2 className="conocenos-subtitle">6. Derechos del usuario</h2>
      <p className="conocenos-paragraph">Puedes ejercer en cualquier momento:</p>
      <ul className="conocenos-list">
        <li><strong>Acceso</strong>: saber qué datos tenemos sobre ti.</li>
        <li><strong>Rectificación</strong>: modificar datos inexactos.</li>
        <li><strong>Supresión</strong>: solicitar la eliminación.</li>
        <li><strong>Oposición</strong>: a ciertos tratamientos.</li>
        <li><strong>Limitación</strong>: restringir el uso de tus datos.</li>
        <li><strong>Portabilidad</strong>: recibir tus datos en formato estructurado.</li>
        <li><strong>Retirar el consentimiento</strong> para comunicaciones comerciales.</li>
      </ul>

      <p className="conocenos-paragraph">
        Para ejercer tus derechos, escribe a <strong>info@modularnorte.com</strong> adjuntando una prueba
        de identidad.
      </p>

      {/* 7 Cookies */}
      <h2 className="conocenos-subtitle">7. Cookies y tecnologías similares</h2>
      <p className="conocenos-paragraph">
        Nuestro sitio utiliza cookies técnicas necesarias. Puedes bloquearlas desde tu navegador, 
        aunque algunas funciones podrían dejar de funcionar correctamente.
      </p>

      {/* 8 Procedencia */}
      <h2 className="conocenos-subtitle">8. Procedencia de los datos</h2>
      <ul className="conocenos-list">
        <li>Formularios web de contacto y presupuestos.</li>
        <li>Suscripciones a newsletter.</li>
        <li>Interacciones mediante redes sociales.</li>
      </ul>

      {/* 9 Seguridad */}
      <h2 className="conocenos-subtitle">9. Medidas de seguridad</h2>
      <p className="conocenos-paragraph">
        Aplicamos medidas técnicas y organizativas para evitar accesos no autorizados, pérdidas de datos o alteraciones.
      </p>

      {/* 10 DPO */}
      <h2 className="conocenos-subtitle">10. Contacto del Delegado de Protección de Datos</h2>
      <p className="conocenos-paragraph">
        Puedes contactar con nuestro equipo de protección de datos en:  
        <strong> info@modularnorte.com</strong>
      </p>

      {/* 11 Modificaciones */}
      <h2 className="conocenos-subtitle">11. Modificaciones de esta política</h2>
      <p className="conocenos-paragraph">
        Podemos actualizar esta política para adaptarla a cambios normativos.  
        Última actualización: <strong>{new Date().toLocaleDateString()}</strong>.
      </p>
    </section>
  

  );};

  export default Policy;