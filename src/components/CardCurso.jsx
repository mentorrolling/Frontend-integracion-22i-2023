import React from "react";
import "../css/cards.css";

const CardCurso = ({ curso }) => {
  return (
    <div className="col">
      <div className="card h-100 text-dark">
        <img src={curso.img} className="card-img-top" alt={curso.nombre} />
        <div className="card-body">
          <h5 className="card-title">{curso.nombre}</h5>
          <p className="card-text">{curso.descripcion}</p>
          <a href="#" className="btn btn-dark">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCurso;
