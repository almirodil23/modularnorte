import tours from "../../data/tourVirtual";
import "./tourvirtual.css";


export default function TourVirtual() {
  return (
    <div className="tour-container">
      <div className="titulo_pagina_standard">
        <h1>Tour Virtual</h1>
      </div>

      <div className="pagina_standard container">
        <div className="row justify-content-md-center">
          {tours.map(tour => (
            <div key={tour.id} className="col-12 col-md-6 tour-item">
              <div className="embed-responsive embed-responsive-21by9 tour-image">
                <a href={tour.url} target="_blank">
                  <img src={tour.img} alt={tour.title} />
                </a>
              </div>

              <h6>{tour.title}</h6>
              <p>{tour.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
