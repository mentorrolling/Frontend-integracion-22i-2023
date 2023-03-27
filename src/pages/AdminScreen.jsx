import React, { useEffect, useState } from "react";

//importar componente de tabla

//importar función para traer los cursos desde la API

const AdminScreen = () => {
  //estado para guardar los cursos
  const [cursos, setCursos] = useState([]);

  //cargar cursos cuando se monta y pendiente de actualización
  useEffect(() => {}, []);

  const traerCursos = async () => {
    //Ejecutar petición a la API
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
            {/* Componente de la tabla que carga los cursos  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
