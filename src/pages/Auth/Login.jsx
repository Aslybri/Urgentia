import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">

        <h2 className="title title-small">
          Iniciar Sesión
        </h2>

        <p className="description">
          Ingresa tus datos para acceder a tu perfil.
        </p>

        <div className="form-box">

          <label>Correo o número de celular</label>

          <input
            type="text"
            placeholder="example@example.com"
          />

          <label>Contraseña</label>

          <input
            type="password"
            placeholder="********"
          />

          <button className="btn login">
            Iniciar Sesión
          </button>

          <p className="small-text">
            ¿No tienes cuenta?{" "}

            <span onClick={() => navigate("/registrar")}>
              Regístrate
            </span>
          </p>

        </div>

        <button
          className="back"
          onClick={() => navigate("/")}
        >
          ← Volver
        </button>

      </div>
    </div>
  );
}

export default Login;