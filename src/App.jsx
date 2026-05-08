import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Login from "./pages/Auth/Login";
import Registrar from "./pages/Auth/Registrar";
import Datos1 from "./pages/Auth/Datos1";
import Datos2 from "./pages/Auth/Datos2";
import Datos3 from "./pages/Auth/Datos3";

import Antecedentes from "./pages/Urgencia/Antecedentes";
import TipoPaciente from "./pages/Urgencia/TipoPaciente";
import Banderas from "./pages/Urgencia/Banderas";
import Submenu from "./pages/Urgencia/Submenu";

import Tramites from "./pages/Tramites/Tramites";
import SubmenuTramites from "./pages/Tramites/SubmenuTramites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/datos1" element={<Datos1 />} />
        <Route path="/datos2" element={<Datos2 />} />
        <Route path="/datos3" element={<Datos3 />} />

        <Route path="/antecedentes" element={<Antecedentes />} />
        <Route path="/tipopaciente" element={<TipoPaciente />} />
        <Route path="/banderas" element={<Banderas />} />
        <Route path="/submenu" element={<Submenu />} />

        <Route path="/tramites" element={<Tramites />} />
        <Route path="/submenu-tramites" element={<SubmenuTramites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


