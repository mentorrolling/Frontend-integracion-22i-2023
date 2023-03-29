import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
import logo from "../assets/logo.png";
import "../css/login.css";

import MessageApp from "../components/MessageApp";

const LoginScreen = ({ iniciarSesion, guardarUsuario }) => {
  const navigate = useNavigate();
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const datos = {
      correo: inputCorreo,
      password: inputPassword,
    };

    const resp = await authLogin(datos);
    console.log(resp);
    if (resp?.token) {
      localStorage.setItem("token", JSON.stringify(resp.token));
      iniciarSesion();
      const { nombre, correo, rol, uid } = resp.usuario;
      guardarUsuario({
        nombre,
        correo,
        rol,
        uid,
      });
      navigate("/");
    }
    setResultado(resp);
    setLoading(false);
  };

  return (
    <div className="bg-dark">
      <div className="container container-login">
        <div className="row px-2">
          <div className="col-12 col-md-4 offset-md-4 card-login">
            <div className="d-flex justify-content-center align-items-center">
              <img src={logo} alt="logo" />
            </div>
            <h3 className="text-center mt-2">
              <span>
                <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
              </span>
              Inicio de sesión
            </h3>
            <form onSubmit={handleLogin}>
              <div className="mt-3">
                <label className="fw-bold">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  value={inputCorreo}
                  onChange={(e) => setInputCorreo(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label className="fw-bold">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                />
              </div>
              <div className="mt-3 d-grid">
                <button className="btn btn-dark" disabled={loading && true}>
                  Iniciar
                </button>
              </div>
            </form>
            {resultado?.msg && (
              <div className="mt-2">
                <MessageApp mensaje={resultado.msg} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
