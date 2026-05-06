import { useNavigate } from "react-router-dom";

function Datos3() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">Nueva Cuenta</h2>

        <div className="form-box">
          <label>Alergias</label>

          <label className="check-option">
            <input type="checkbox" />
            Alimentaria
          </label>

          <label className="check-option">
            <input type="checkbox" />
            Medicamentos
          </label>

          <label className="check-option">
            <input type="checkbox" />
            Otros
          </label>

          <button className="btn login" onClick={() => navigate("/")}>
            Registrarse
          </button>
        </div>

        <button className="back" onClick={() => navigate("/datos2")}>
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default Datos3;
