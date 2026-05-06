import { useNavigate } from "react-router-dom";

function Datos2() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">Nueva Cuenta</h2>

        <div className="form-box">
          <label>Antecedentes Personales</label>

          <label className="check-option">
            <input type="checkbox" />
            Enfermedades crónicas diagnosticadas
          </label>

          <label className="check-option">
            <input type="checkbox" />
            Cirugías recientes
          </label>

          <button className="btn login" onClick={() => navigate("/datos3")}>
            Continuar
          </button>
        </div>

        <button className="back" onClick={() => navigate("/datos1")}>
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default Datos2;
