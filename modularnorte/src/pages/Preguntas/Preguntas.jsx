import { useState } from "react";
import faqs from "../../data/faqs";

export default function Preguntas() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Título de la página, igual que el original */}
      <div className="titulo_pagina_standard container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Preguntas Frecuentes</h1>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container pagina_standard">
        <div className="row justify-content-md-center">
          <div className="col-md-9">
            <div id="accordion" className="preguntas_frecuentes">
              {faqs.map((faq) => (
                <div className="card" key={faq.id}>
                  <div className="card-header" id={`heading${faq.id}`}>
                    <h5 className="mb-0">
                      <button
                        className={
                          "btn btn-link" + (openId === faq.id ? "" : " collapsed")
                        }
                        type="button"
                        onClick={() => toggle(faq.id)}
                        data-toggle="collapse"
                        data-target={`#pregunt${faq.id}`}
                        aria-expanded={openId === faq.id}
                        aria-controls={`pregunt${faq.id}`}
                      >
                        {/* El HTML de la pregunta (por si lleva entidades &iacute; etc.) */}
                        <p
                          dangerouslySetInnerHTML={{ __html: faq.question }}
                          style={{ marginBottom: 0 , fontWeight:700}}
                        />
                      </button>
                    </h5>
                  </div>

                  <div
                    id={`pregunt${faq.id}`}
                    className={
                      "collapse" + (openId === faq.id ? " show" : "")
                    }
                    aria-labelledby={`heading${faq.id}`}
                    data-parent="#accordion"
                  >
                    <div
                      className="card-body"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
