import React from "react";
import "../css/cards.css";

const CardCurso = ({ curso }) => {
  return (
    <div className="col ">
      <div className="card h-100 text-dark ">
        <div>
          <img src={curso.img} className="card-img-top" alt={curso.nombre} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="my-3">
            <h5 className="card-title">{curso.nombre}</h5>
            <p className="card-text">{curso.descripcion}</p>
          </div>

          <a href="#" className="btn btn-dark">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCurso;
