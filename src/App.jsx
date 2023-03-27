import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //Estados para manejar login y datos de usuario

  //Función para guardar datos del usuario autenticado

  //Función cuando inicia sesión

  //Función cuando cierra sesión

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas protegidas que reciben login, datos de usuario y función cerrar sesión */}

        {/* Ruta de Login que recibe función para iniciar sesión y gusrdar datos de usuario*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
