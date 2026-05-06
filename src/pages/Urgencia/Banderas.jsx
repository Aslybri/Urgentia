import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

import { banderasPorPaciente } from "../../data/banderas";

function Banderas() {
  const navigate = useNavigate();

  const {
    tipoPaciente,
    banderasSeleccionadas,
    setBanderasSeleccionadas,
    setBanderaActual,
  } = useAppContext();

  const banderasActuales = banderasPorPaciente[tipoPaciente] || [];

  const abrirSubmenu = (bandera) => {
    if (!banderasSeleccionadas.includes(bandera)) {
      setBanderasSeleccionadas([...banderasSeleccionadas, bandera]);
    }

    setBanderaActual(bandera);

    navigate("/submenu");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">Banderas rojas de {tipoPaciente}</h2>

        <div className="redflags-grid">
          {banderasActuales.map((bandera) => (
            <button
              key={bandera}
              className="redflag-btn"
              onClick={() => abrirSubmenu(bandera)}
            >
              {bandera}
            </button>
          ))}
        </div>

        <button className="back" onClick={() => navigate("/tipopaciente")}>
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default Banderas;
