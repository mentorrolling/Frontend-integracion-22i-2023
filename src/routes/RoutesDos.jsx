import { Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import HomeScreen from "../pages/HomeScreen";

const RoutesDos = ({ cerrarSesion }) => {
  return (
    <>
      <NavbarApp cerrarSesion={cerrarSesion} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </>
  );
};

export default RoutesDos;
