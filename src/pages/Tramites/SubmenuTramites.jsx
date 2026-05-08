import { useNavigate } from "react-router-dom";

function SubmenuTramites() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">¿Qué trámite necesitas?</h2>

        <div className="submenu-grid">
          <button className="submenu-btn">
            Autorización de examen / procedimiento / cirugía
          </button>

          <button className="submenu-btn">
            Autorización para valoración con especialista
          </button>

          <button className="submenu-btn">
            Asignación de cita por consulta externa
          </button>

          <button className="submenu-btn">Renovar fórmula</button>

          <button className="submenu-btn">
            Vencimiento de orden para examen / procedimiento / cirugía
          </button>

          <button className="submenu-btn">
            Vencimiento de orden para valoración con especialista
          </button>
        </div>

        <button className="back" onClick={() => navigate("/tramites")}>
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default SubmenuTramites;
