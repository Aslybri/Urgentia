import { useNavigate } from "react-router-dom";

function SubmenuTramites() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">¿Qué trámite necesitas?</h2>

        <div className="submenu-grid">
          <button className="submenu-btn">Renovar fórmula</button>

          <button className="submenu-btn">Asignar cita</button>
        </div>

        <button className="back" onClick={() => navigate("/tramites")}>
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default SubmenuTramites;
