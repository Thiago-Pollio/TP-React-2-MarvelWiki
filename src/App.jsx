import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./Components/Footer/Footer";
import Header from "../src/Components/Header/Header";

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes
        terminoBusqueda={terminoBusqueda}
        setTerminoBusqueda={setTerminoBusqueda}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
