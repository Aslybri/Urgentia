import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

function TipoPaciente() {

  const navigate = useNavigate();

  const {
    setTipoPaciente
  } = useAppContext();

  const seleccionarPaciente = (tipo) => {

    setTipoPaciente(tipo);

    navigate("/banderas");
  };

  return (
    <div className="container">
      <div className="card">

        <h2 className="title">
          Selecciona tipo de paciente
        </h2>

        <div className="grid">

          <button
            className="card-btn"
            onClick={() => seleccionarPaciente("Niño")}
          >
            <img src="/nino.png" alt="Niño" />
            <span>Niño</span>
          </button>

          <button
            className="card-btn"
            onClick={() => seleccionarPaciente("Adulto")}
          >
            <img src="/adulto.png" alt="Adulto" />
            <span>Adulto</span>
          </button>

          <button
            className="card-btn"
            onClick={() => seleccionarPaciente("Adultomayor")}
          >
            <img src="/adulto.png" alt="Adulto Mayor" />
            <span>Adulto Mayor +65</span>
          </button>

          <button
            className="card-btn"
            onClick={() => seleccionarPaciente("Embarazada")}
          >
            <img src="/embarazada.png" alt="Embarazada" />
            <span>Embarazada</span>
          </button>

          <button
            className="card-btn"
            onClick={() => seleccionarPaciente("Trauma")}
          >
            <img src="/trauma.png" alt="Trauma" />
            <span>Trauma</span>
          </button>

        </div>

        <button
          className="back"
          onClick={() => navigate("/antecedentes")}
        >
          ← Volver
        </button>

      </div>
    </div>
  );
}

export default TipoPaciente;