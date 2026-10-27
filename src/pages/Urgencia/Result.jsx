import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function Result() {
  const navigate = useNavigate();
  const { banderasSeleccionadas, subrespuestas } = useAppContext();

  // La prioridad baja solo se sugiere cuando no hay banderas ni respuestas
  // de alarma seleccionadas. Es una orientación preliminar, no un diagnóstico.
  const hayIndicadoresSeleccionados =
    banderasSeleccionadas.length > 0 ||
    Object.values(subrespuestas).some(
      (respuestas) => Array.isArray(respuestas) && respuestas.length > 0
    );

  const prioridadBaja = !hayIndicadoresSeleccionados;

  return (
    <div className="container">
      <div className="card">
        <h2 className="title title-small">Resultado de pretriaje</h2>

        {prioridadBaja ? (
          <>
            <div className="result-advice">
              <h3>Orientación de baja prioridad</h3>
              <p>
                Según las respuestas registradas, tu solicitud podría no
                requerir atención por el servicio de urgencias. Para temas
                administrativos o no urgentes, como citas, autorizaciones o
                renovación de fórmulas, puedes consultar la sección de Trámites
                y Fórmulas.
              </p>
              <button
                className="btn tramites"
                onClick={() => navigate("/tramites")}
              >
                Ir a Trámites y Fórmulas
              </button>
            </div>
          </>
        ) : (
          <div className="selection-box">
            <strong>Requiere valoración adicional.</strong>
            <p>
              Se seleccionaron síntomas o respuestas que deben revisarse. Este
              resultado no reemplaza la valoración de un profesional de salud.
            </p>
          </div>
        )}

        <div className="selection-box">
          Si tus síntomas son intensos, empeoran, aparece dificultad para
          respirar, dolor fuerte en el pecho, pérdida de conciencia, sangrado
          abundante u otra señal de alarma, busca atención de urgencia de
          inmediato. No retrases la atención por esta orientación.
        </div>

        <button className="back" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default Result;
