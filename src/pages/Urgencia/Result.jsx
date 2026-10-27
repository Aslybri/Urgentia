import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function Result() {
  const navigate = useNavigate();
  const { banderasSeleccionadas, subrespuestas, antecedentesSeleccionados } = useAppContext();

  // Resultado preliminar de demostración: el botón de trámites solo aparece
  // cuando no se seleccionaron banderas ni respuestas de alarma.
  // En producción, reemplazar esta regla por la prioridad calculada por Urgentia.
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
          <div className="result-advice">
            <h3>Orientación preliminar: prioridad baja</h3>
            <p>
              Con la información registrada no se identificaron señales de
              alarma en las opciones seleccionadas. Si necesitas gestionar una
              cita, una autorización o la renovación de una fórmula, puedes
              consultar la sección de Trámites y Fórmulas.
            </p>
            <button
              type="button"
              className="btn tramites"
              onClick={() => navigate("/tramites")}
            >
              Consultar Trámites y Fórmulas
            </button>
          </div>
        ) : (
          <div className="selection-box">
            <strong>Se requiere valoración adicional.</strong>
            <p>
              Se seleccionaron síntomas o respuestas que deben revisarse. Este
              resultado es orientativo y no reemplaza la valoración de un
              profesional de salud.
            </p>
          </div>
        )}

        <div className="selection-box">
          <strong>Importante:</strong> este pretriaje no descarta una urgencia ni
          sustituye la evaluación de un profesional de salud. Si tus síntomas
          son intensos, empeoran o presentas dificultad para respirar, dolor
          fuerte en el pecho, pérdida de conciencia, sangrado abundante u otra
          señal de alarma, busca atención de urgencia de inmediato. No retrases
          la atención por esta orientación.
        </div>

        <button className="back" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default Result;
