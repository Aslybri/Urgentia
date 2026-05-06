import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

import { submenus } from "../../data/submenus";

function Submenu() {
  const navigate = useNavigate();

  const { banderaActual, subrespuestas, setSubrespuestas } = useAppContext();

  const preguntasActuales = submenus[banderaActual] || [];

  const toggleSubrespuesta = (pregunta) => {
    const respuestasActuales = subrespuestas[banderaActual] || [];

    if (respuestasActuales.includes(pregunta)) {
      setSubrespuestas({
        ...subrespuestas,

        [banderaActual]: respuestasActuales.filter((item) => item !== pregunta),
      });
    } else {
      setSubrespuestas({
        ...subrespuestas,

        [banderaActual]: [...respuestasActuales, pregunta],
      });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">{banderaActual}</h2>

        <div className="selection-box">Selecciona una o varias opciones.</div>

        <div className="submenu-grid">
          {preguntasActuales.map((pregunta) => (
            <button
              key={pregunta}
              className={`submenu-btn ${
                (subrespuestas[banderaActual] || []).includes(pregunta)
                  ? "selected"
                  : ""
              }`}
              onClick={() => toggleSubrespuesta(pregunta)}
            >
              {pregunta}
            </button>
          ))}
        </div>

        <div className="buttons-secondary">
          <button
            className="secondary-btn"
            onClick={() => navigate("/banderas")}
          >
            ← Volver
          </button>

          <button
            className="secondary-btn primary-next"
            onClick={() => navigate("/banderas")}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Submenu;
