import React, { useEffect, useState } from "react";
import TableCursos from "../components/TableCursos";
import { getCursos } from "../helpers/cursoApi";

const AdminScreen = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    traerCursos();
  }, [cursos]);

  const traerCursos = async () => {
    const { cursos } = await getCursos();
    setCursos(cursos);
  };

  return (
    <div className="bg-dark">
      <div className="container bg-light vh-100">
        <div className="row  py-5">
          <div className="col text-center ">
            <h1>
              <span>
                <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              </span>
              Panel administrador
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            {cursos.length > 0 ? (
              <TableCursos cursos={cursos} />
            ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
