import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

function Antecedentes() {

  const navigate = useNavigate();

  const {
    antecedentesSeleccionados,
    setAntecedentesSeleccionados
  } = useAppContext();

  const antecedentes = [
    "Anticoagulantes",
    "Inmunocomprometido",
    "Autoinmune",
    "Hemodiálisis",
    "Cáncer activo",
  ];

  const seleccionarAntecedente = (antecedente) => {

    if (antecedentesSeleccionados.includes(antecedente)) {

      setAntecedentesSeleccionados(
        antecedentesSeleccionados.filter(
          (item) => item !== antecedente
        )
      );

    } else {

      setAntecedentesSeleccionados([
        ...antecedentesSeleccionados,
        antecedente
      ]);

    }
  };

  return (
    <div className="container">
      <div className="card">

        <h2 className="title title-small">
          Antecedentes importantes
        </h2>

        <div className="redflags-grid">

          {antecedentes.map((antecedente) => (

            <button
              key={antecedente}
              className={`redflag-btn ${
                antecedentesSeleccionados.includes(antecedente)
                  ? "selected"
                  : ""
              }`}
              onClick={() => seleccionarAntecedente(antecedente)}
            >
              {antecedente}
            </button>

          ))}

        </div>

        <div className="buttons-secondary">

          <button
            className="secondary-btn"
            onClick={() => navigate("/")}
          >
            ← Volver
          </button>

          <button
            className="secondary-btn primary-next"
            onClick={() => navigate("/tipopaciente")}
          >
            Continuar
          </button>

        </div>

      </div>
    </div>
  );
}

export default Antecedentes;