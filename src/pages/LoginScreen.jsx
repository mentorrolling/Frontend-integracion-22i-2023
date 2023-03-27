import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//importar función de autenticación de API

import logo from "../assets/logo.png";
import "../css/login.css";

//importar componente para mensaje

const LoginScreen = ({ iniciarSesion, guardarUsuario }) => {
  const navigate = useNavigate(); // defino función para redireccionar

  //Defino estados
  // EStado para guardar correo y password de los inputs

  //Estado para obtener el mensaje de resultado de la petición

  //Estado para manejar un loading o carga de datos

  //Función del formulario de login:
  const handleLogin = async (e) => {
    //obtener datos ingresados
    //hacer petición a la API
    //guardar token
    //ejecutar función de iniciar sesión
    //Guardar datos del usuario
    //redireccionar
  };

  return (
    <div className="bg-dark">
      <div className="container container-login">
        <div className="row px-2">
          <div className="col-12 col-md-4 offset-md-4 card-login">
            <div className="d-flex justify-content-center align-items-center">
              <img src="" alt="logo" />
            </div>
            <h3 className="text-center mt-2">
              <span>
                <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
              </span>
              Inicio de sesión
            </h3>
            <form onSubmit="">
              <div className="mt-3">
                <label className="fw-bold">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  value=""
                  onChange=""
                />
              </div>
              <div className="mt-3">
                <label className="fw-bold">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value=""
                  onChange=""
                />
              </div>
              <div className="mt-3 d-grid">
                <button className="btn btn-dark" disabled="">
                  Iniciar
                </button>
              </div>
            </form>
            {/*  Mostrar componente de mensaje obtenido en la respuesta de la API */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
