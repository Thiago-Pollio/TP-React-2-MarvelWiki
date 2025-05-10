import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Favoritos from "../../Pages/Favoritos";
import PersonajeDetalles from "../../Pages/PersonajeDetalles";
import Error404 from "../../Pages/Error404";

function AppRoutes({ terminoBusqueda, setTerminoBusqueda }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            terminoBusqueda={terminoBusqueda}
            setTerminoBusqueda={setTerminoBusqueda}
          />
        }
      />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/personaje/:id" element={<PersonajeDetalles />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;
