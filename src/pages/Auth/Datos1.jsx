import { useNavigate } from "react-router-dom";

function Datos1() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">Nueva Cuenta</h2>

        <div className="form-box">
          <label>Sexo biológico</label>

          <div className="checkbox-row">
            <label>
              <input type="checkbox" /> F
            </label>
            <label>
              <input type="checkbox" /> M
            </label>
          </div>

          <label>Peso (Kg)</label>

          <input type="number" placeholder="Peso (kg)" />

          <button className="btn login" onClick={() => navigate("/datos2")}>
            Continuar
          </button>
        </div>

        <button className="back" onClick={() => navigate("/registrar")}>
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default Datos1;
