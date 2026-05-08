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
//<select
//                 value={epsSeleccionada}
//                 onChange={(e) => setEpsSeleccionada(e.target.value)}
//               >
//                 <option value="">Seleccione su EPS</option>
//                 <option value="Nueva EPS">Nueva EPS</option>
//                 <option value="Salud Total EPS">Salud Total EPS</option>
//                 <option value="Compensar EPS">Compensar EPS</option>
//                 <option value="EPS Sura">EPS Sura</option>
//                 <option value="Famisanar EPS">Famisanar EPS</option>
//                 <option value="Mutual Ser EPS">Mutual Ser EPS</option>
//                 <option value="Coosalud EPS">Coosalud EPS</option>
//                 <option value="Capital Salud">Capital Salud</option>
//               </select>
