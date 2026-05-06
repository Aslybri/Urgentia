import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <img src="/logo.png" alt="Logo" className="logo" />

        <h1 className="title">Urgentia</h1>

        <h2 className="subtitle">Sistema de Pre-Triaje para Urgencias</h2>

        <p className="description">
          Bienvenido. Esta encuesta de pre-triaje durará aproximadamente 5
          minutos.
        </p>

        <p className="description">
          Inicia sesión o regístrate para conocer más de tu perfil, o presiona
          el botón de atención de urgencia para continuar.
        </p>

        <div className="buttons">
          <button
            className="btn emergency"
            onClick={() => navigate("/antecedentes")}
          >
            Atención de urgencia
          </button>

          <button className="btn login" onClick={() => navigate("/login")}>
            Iniciar Sesión / Registrarse
          </button>

          <button
            className="btn tramites"
            onClick={() => navigate("/tramites")}
          >
            Trámites y Fórmulas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
