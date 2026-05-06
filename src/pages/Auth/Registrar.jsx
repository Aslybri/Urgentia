import { useNavigate } from "react-router-dom";

function Registrar() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">

        <h2 className="title title-small">
          Nueva Cuenta
        </h2>

        <div className="form-box">

          <label>Nombre Completo</label>
          <input type="text" placeholder="ejemplo ejemploso" />

          <label>Contraseña</label>
          <input type="password" placeholder="************" />

          <label>Correo</label>
          <input type="email" placeholder="example@example.com" />

          <label>Número celular</label>
          <input type="text" placeholder="+57 123 456 78" />

          <label>Fecha de Nacimiento</label>
          <input type="text" placeholder="07 / 02 / 2000" />

          <p className="small-text">
            Necesitamos tus datos personales.
          </p>

          <button
            className="btn login"
            onClick={() => navigate("/datos1")}
          >
            Continuar
          </button>

        </div>

        <button
          className="back"
          onClick={() => navigate("/login")}
        >
          ← Volver
        </button>

      </div>
    </div>
  );
}

export default Registrar;