import { useNavigate } from "react-router-dom";

function Tramites() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">Trámites y Fórmulas</h2>

        <div className="form-box">
          <label>Tipo de documento</label>

          <select>
            <option>CC</option>
            <option>TI</option>
          </select>

          <label>Número de documento</label>

          <input type="text" placeholder="Documento" />

          <button
            className="btn login"
            onClick={() => navigate("/submenu-tramites")}
          >
            Continuar
          </button>
        </div>

        <button className="back" onClick={() => navigate("/")}>
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default Tramites;
