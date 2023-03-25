import React from "react";

const TableCursos = ({ cursos }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Categoría</th>
          <th scope="col">Precio</th>
          <th scope="col">Destacado</th>
        </tr>
      </thead>
      <tbody>
        {cursos.map((curso) => (
          <tr key={curso._id}>
            <th>{curso.nombre}</th>
            <td>{curso.categoria.nombre}</td>
            <td>{curso.precio}</td>
            <td>
              {curso.destacado ? (
                <i className="fa fa-star" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-star-o" aria-hidden="true"></i>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCursos;
