import { useState } from "react";
import "./App.css";

function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [antecedentesSeleccionados, setAntecedentesSeleccionados] = useState([]);
  const [tipoPaciente, setTipoPaciente] = useState("");
  const [banderasSeleccionadas, setBanderasSeleccionadas] = useState([]);
  const [banderaActual, setBanderaActual] = useState("");
  const [subrespuestas, setSubrespuestas] = useState({});

  const [otroSeleccionado, setOtroSeleccionado] = useState(false);
  const [otraEnfermedad, setOtraEnfermedad] = useState("");

  const [otroAntecedente, setOtroAntecedente] = useState(false);
  const [otroAntecedenteTexto, setOtroAntecedenteTexto] = useState("");

  const [otraAlergiaAlimentaria, setOtraAlergiaAlimentaria] = useState(false);
  const [alergiaAlimentariaTexto, setAlergiaAlimentariaTexto] = useState("");

  const [otraAlergiaMedicamento, setOtraAlergiaMedicamento] = useState(false);
  const [alergiaMedicamentoTexto, setAlergiaMedicamentoTexto] = useState("");

  const [otraAlergia, setOtraAlergia] = useState(false);
  const [otraAlergiaTexto, setOtraAlergiaTexto] = useState("");

  const [otroMedicamento, setOtroMedicamento] = useState(false);
  const [otroMedicamentoTexto, setOtroMedicamentoTexto] = useState("");

  const antecedentes = [
    "Anticoagulantes",
    "Inmunocomprometido",
    "Autoinmune",
    "Hemodiálisis",
    "Cáncer activo",
  ];

  const banderasPorPaciente = {
    Niño: [
      "Dolor de cabeza",
      "Dolor de pecho",
      "Dificultad respiratoria",
      "Dolor abdominal",
      "Fiebre",
    ],

    Adulto: [
      "Dolor de cabeza",
      "Dolor de pecho",
      "Dificultad respiratoria",
      "Dolor abdominal",
      "Fiebre",
    ],

    Adultomayor: [
      "Dolor de cabeza",
      "Dolor de pecho",
      "Dificultad respiratoria",
      "Dolor abdominal",
      "Fiebre",
      "Caída o golpe reciente",
      "Confusión o cambio del estado mental",
      "Debilidad repentina",
    ],

    Embarazada: [
      "Dolor de cabeza",
      "Dolor de pecho",
      "Dificultad respiratoria",
      "Dolor abdominal",
      "Fiebre",
      "Hemorragia vaginal",
      "Tos con sangre",
      "No siente al bebé",
      "Contracciones prematuras",
      "Presión alta",
      "Tengo dolor en la boca del estómago",
      "Veo borroso, veo luces o escucho pitos en los oídos",
    ],

    Trauma: [
      "Herida profunda o sangrado abundante",
      "Golpe en la cabeza o alteración neurológica",
      "Dificultad respiratoria después del trauma",
      "Dolor de pecho después del trauma",
      "Dolor abdominal después del trauma",
      "Posible fractura o deformidad",
      "Lesión en cuello, espalda o columna",
      "Quemadura grave",
    ],
  };

  const submenuNino = {
    "Dolor de cabeza": [
      "El dolor apareció de forma súbita y muy intensa (como un golpe)",
      "Es el peor dolor de cabeza que ha tenido en su vida",
      "Tiene fiebre junto con rigidez en el cuello",
      "Tiene fiebre o dificultad para mover el cuello",
      "Ha perdido la conciencia o se ha desmayado",
      "Tiene visión borrosa o dificultad para hablar",
      "Tuvo un golpe reciente en la cabeza",
    ],
    "Dolor de pecho": [
      "El dolor es fuerte, opresivo o como presión",
      "Se corre hacia el brazo, cuello o mandíbula",
      "Tiene dificultad para respirar",
      "Está sudando frío o siente náuseas",
      "Tiene antecedentes de problemas del corazón",
    ],
    "Dificultad respiratoria": [
      "Le cuesta respirar incluso estando quieto",
      "No puede hablar frases completas por falta de aire",
      "Sus labios o uñas se ven morados",
      "Tiene dolor en el pecho",
      "La dificultad empezó de repente",
    ],
    "Dolor abdominal": [
      "El dolor es muy intenso y no mejora",
      "Tiene el abdomen duro o muy sensible",
      "Está vomitando constantemente",
      "Tiene fiebre alta",
      "Hay sangre en vómito o heces",
      "Tiene diarrea",
    ],
    "Fiebre": [
      "La fiebre es mayor a 39°C",
      "Está muy somnoliento o confundido",
      "Tiene rigidez en el cuello",
      "Tiene manchas en la piel tipo moradas o rojas",
      "Es un bebé menor de 3 meses",
    ],
  };

  const submenuAdulto = {
    "Dolor de cabeza": [
      "El dolor apareció de forma súbita y muy intensa",
      "Es el peor dolor de cabeza de su vida",
      "Tiene rigidez en el cuello o fiebre",
      "Ha perdido la conciencia o se ha desmayado",
      "Tiene debilidad en un lado del cuerpo",
      "Tiene visión borrosa o dificultad para hablar",
      "Tuvo un golpe reciente en la cabeza",
    ],
    "Dolor de pecho": [
      "El dolor es fuerte, opresivo o como presión",
      "Se corre hacia el brazo, cuello o mandíbula",
      "Tiene dificultad para respirar",
      "Está sudando frío o siente náuseas",
      "Tiene antecedentes de problemas del corazón",
    ],
    "Dificultad respiratoria": [
      "Le cuesta respirar incluso estando quieto",
      "No puede hablar frases completas por falta de aire",
      "Sus labios o uñas se ven morados",
      "Tiene dolor en el pecho",
      "La dificultad empezó de repente",
    ],
    "Dolor abdominal": [
      "El dolor es muy intenso y no mejora",
      "Tiene el abdomen duro o muy sensible",
      "Está vomitando constantemente",
      "Tiene fiebre alta",
      "Hay sangre en vómito o heces",
      "Tiene diarrea",
    ],
    "Fiebre": [
      "La fiebre es mayor a 39°C",
      "Está muy somnoliento o confundido",
      "Tiene rigidez en el cuello",
      "Tiene manchas en la piel tipo moradas o rojas",
      "Tiene dificultad para respirar",
    ],
  };

  const submenuAdultoMayor = {
    "Dolor de cabeza": [
      "El dolor apareció de forma súbita y muy intensa",
      "Tiene confusión, desorientación o somnolencia",
      "Tiene debilidad en un lado del cuerpo",
      "Tiene dificultad para hablar",
      "Tiene visión borrosa",
      "Tuvo una caída o golpe reciente",
      "Toma anticoagulantes",
    ],
    "Dolor de pecho": [
      "El dolor es fuerte, opresivo o como presión",
      "Se corre hacia el brazo, cuello o mandíbula",
      "Tiene dificultad para respirar",
      "Está sudando frío o siente náuseas",
      "Tiene antecedentes de infarto o problemas del corazón",
      "El dolor apareció en reposo",
    ],
    "Dificultad respiratoria": [
      "Le cuesta respirar incluso estando quieto",
      "No puede hablar frases completas por falta de aire",
      "Sus labios o uñas se ven morados",
      "Tiene dolor en el pecho",
      "Tiene confusión o somnolencia",
      "La dificultad empezó de repente",
    ],
    "Dolor abdominal": [
      "El dolor es muy intenso y no mejora",
      "Tiene el abdomen duro o muy sensible",
      "Está vomitando constantemente",
      "Tiene fiebre alta",
      "Hay sangre en vómito o heces",
      "Se siente débil, mareado o como si se fuera a desmayar",
    ],
    "Fiebre": [
      "La fiebre es mayor a 38°C",
      "Está muy somnoliento o confundido",
      "Tiene dificultad para respirar",
      "Tiene presión baja, debilidad extrema o mareo",
      "Tiene escalofríos fuertes",
      "Tiene cáncer activo, hemodiálisis o defensas bajas",
    ],
    "Caída o golpe reciente": [
      "Perdió la conciencia",
      "Toma anticoagulantes",
      "Tiene dolor fuerte después de la caída",
      "No puede levantarse o caminar",
      "Tiene golpe en la cabeza",
      "Tiene deformidad o posible fractura",
    ],
    "Confusión o cambio del estado mental": [
      "Está desorientado o no reconoce personas/lugares",
      "Tiene somnolencia extrema",
      "El cambio apareció de repente",
      "Tiene fiebre",
      "Tiene dificultad para hablar",
      "Tiene debilidad en un lado del cuerpo",
    ],
    "Debilidad repentina": [
      "La debilidad apareció de repente",
      "Afecta un lado del cuerpo",
      "Tiene dificultad para hablar",
      "Tiene desviación de la boca",
      "Tiene pérdida de equilibrio",
      "Tiene visión borrosa o doble",
    ],
  };

  const submenuTrauma = {
    "Herida profunda o sangrado abundante": [
      "¿Sangra sin parar?",
      "¿La sangre sale a chorros o empapa la ropa rápidamente?",
      "¿Se siente que se va a desmayar o está muy débil?",
      "¿Está pálido, sudoroso o frío?",
      "¿La herida es profunda o se ven tejidos por dentro?",
      "¿Tiene amputación o pérdida parcial de una extremidad?",
    ],
    "Golpe en la cabeza o alteración neurológica": [
      "¿Perdió la conciencia aunque haya sido por segundos?",
      "¿Está confundido, desorientado o no responde bien?",
      "¿Ha vomitado después del golpe?",
      "¿Tiene convulsiones?",
      "¿Tiene visión borrosa o dificultad para hablar?",
      "¿Tiene debilidad o no puede mover alguna parte del cuerpo?",
      "¿Es el golpe en la cabeza reciente y fuerte?",
    ],
    "Dificultad respiratoria después del trauma": [
      "¿Le cuesta respirar incluso estando quieto?",
      "¿No puede hablar frases completas por falta de aire?",
      "¿Respira muy rápido o muy lento?",
      "¿Sus labios o uñas se ven morados?",
      "¿Siente que se ahoga o que no le entra el aire?",
      "¿La dificultad respiratoria empezó justo después del golpe o accidente?",
    ],
    "Dolor de pecho después del trauma": [
      "¿El dolor de pecho es fuerte o empeora al respirar?",
      "¿Recibió un golpe directo en el pecho?",
      "¿Tiene dificultad para respirar además del dolor?",
      "¿Siente presión o deformidad en el pecho?",
      "¿Tiene moretones marcados o heridas en el tórax?",
      "¿Escucha o siente un ruido extraño al respirar?",
    ],
    "Dolor abdominal después del trauma": [
      "¿Recibió un golpe fuerte en el abdomen?",
      "¿El dolor es intenso y no mejora?",
      "¿Tiene el abdomen duro o muy sensible?",
      "¿Tiene náuseas o vómito después del golpe?",
      "¿Hay moretones marcados en el abdomen?",
      "¿Se siente mareado o que se va a desmayar?",
    ],
    "Posible fractura o deformidad": [
      "¿La extremidad se ve deformada o en una posición anormal?",
      "¿No puede mover el brazo o la pierna?",
      "¿El dolor es muy intenso al tocar o mover?",
      "¿Hay hinchazón importante?",
      "¿Se ve hueso expuesto o herida cerca de la fractura?",
      "¿La mano o el pie están fríos, pálidos o sin sensibilidad?",
    ],
    "Lesión en cuello, espalda o columna": [
      "¿Tuvo caída, choque o golpe fuerte en cuello o espalda?",
      "¿Tiene dolor intenso en cuello o espalda?",
      "¿Siente hormigueo o adormecimiento en brazos o piernas?",
      "¿No puede mover bien alguna extremidad?",
      "¿Perdió fuerza en brazos o piernas?",
      "¿El accidente fue de alto impacto?",
    ],
    "Quemadura grave": [
      "¿La quemadura está en cara, cuello, manos, genitales o pecho?",
      "¿La piel está blanca, negra o carbonizada?",
      "¿Tiene ampollas extensas?",
      "¿La quemadura fue por electricidad o químico?",
      "¿Tiene dificultad para respirar después de la quemadura?",
      "¿La quemadura cubre un área grande del cuerpo?",
    ],
  };

  const seleccionarAntecedente = (antecedente) => {
    if (antecedentesSeleccionados.includes(antecedente)) {
      setAntecedentesSeleccionados(
        antecedentesSeleccionados.filter((item) => item !== antecedente)
      );
    } else {
      setAntecedentesSeleccionados([...antecedentesSeleccionados, antecedente]);
    }
  };

  const seleccionarPaciente = (tipo) => {
    setTipoPaciente(tipo);
    setBanderasSeleccionadas([]);
    setBanderaActual("");
    setSubrespuestas({});
    setPantalla("banderas");
  };

  const abrirSubmenu = (bandera) => {
    if (!banderasSeleccionadas.includes(bandera)) {
      setBanderasSeleccionadas([...banderasSeleccionadas, bandera]);
    }
    setBanderaActual(bandera);
    setPantalla("submenu");
  };

  const toggleBandera = (bandera) => {
    if (banderasSeleccionadas.includes(bandera)) {
      setBanderasSeleccionadas(
        banderasSeleccionadas.filter((item) => item !== bandera)
      );
    } else {
      setBanderasSeleccionadas([...banderasSeleccionadas, bandera]);
    }
  };

  const toggleSubrespuesta = (pregunta) => {
    const respuestasActuales = subrespuestas[banderaActual] || [];

    if (respuestasActuales.includes(pregunta)) {
      setSubrespuestas({
        ...subrespuestas,
        [banderaActual]: respuestasActuales.filter((item) => item !== pregunta),
      });
    } else {
      setSubrespuestas({
        ...subrespuestas,
        [banderaActual]: [...respuestasActuales, pregunta],
      });
    }
  };

  const volverAInicio = () => {
    setPantalla("inicio");
    setAntecedentesSeleccionados([]);
    setTipoPaciente("");
    setBanderasSeleccionadas([]);
    setBanderaActual("");
    setSubrespuestas({});
  };

  const volverAAntecedentes = () => {
    setPantalla("antecedentes");
    setTipoPaciente("");
    setBanderasSeleccionadas([]);
    setBanderaActual("");
    setSubrespuestas({});
  };

  const volverATipos = () => {
    setPantalla("emergencia");
    setBanderasSeleccionadas([]);
    setBanderaActual("");
    setSubrespuestas({});
  };

  const banderasActuales = banderasPorPaciente[tipoPaciente] || [];

  let preguntasActuales = [];

  if (tipoPaciente === "Niño" && banderaActual) {
    preguntasActuales = submenuNino[banderaActual] || [];
  }

  if (tipoPaciente === "Adulto" && banderaActual) {
    preguntasActuales = submenuAdulto[banderaActual] || [];
  }

  if (tipoPaciente === "Adultomayor" && banderaActual) {
    preguntasActuales = submenuAdultoMayor[banderaActual] || [];
  }

  if (tipoPaciente === "Trauma" && banderaActual) {
    preguntasActuales = submenuTrauma[banderaActual] || [];
  }
  if (tipoPaciente === "Tramites y fórmulas" && banderaActual) {
    preguntasActuales = submenuTrauma[banderaActual] || [];
  }

  const usaSubmenu =
    tipoPaciente === "Niño" ||
    tipoPaciente === "Adulto" ||
    tipoPaciente === "Adultomayor" ||
    tipoPaciente === "Trauma"||
    tipoPaciente === "Tramites y fórmulas";

  return (
    <div className="container">
      <div className="card">
        {pantalla === "inicio" && (
          <>
            <img src="/logo.png" alt="Logo" className="logo" />

            <h1 className="title">Urgentia</h1>

            <h2 className="subtitle">Sistema de Pre-Triaje para Urgencias</h2>

            <p className="description">
              Bienvenido. Esta encuesta de pre-triaje durará aproximadamente 5
              minutos. Evalúa tus síntomas, recibe una clasificación preliminar y
              agiliza tu atención en urgencias.
            </p>

            <p className="description">
              Inicia sesión o regístrate para conocer más de tu perfil, o
              presiona el botón de emergencia inmediata para continuar.
            </p>

            <div className="buttons">
              <button
                className="btn emergency"
                onClick={() => setPantalla("antecedentes")}
              >
                Emergencia Inmediata
              </button>

              <button
                className="btn login"
                onClick={() => setPantalla("login")}
              >
                Iniciar Sesión / Registrarse
              </button>

              <button
                className="btn tramites"
                onClick={() => seleccionarPaciente("Tramites y fórmulas")}
              >
                Trámites y Fórmulas
              </button>
            </div>
          </>
        )}

        {pantalla === "login" && (
          <>
            <h2 className="title title-small">Iniciar Sesión</h2>

            <p className="description">
              Ingresa tus datos para acceder a tu perfil.
            </p>

            <div className="form-box">
              <label>Correo o número de celular</label>
              <input type="text" placeholder="example@example.com" />

              <label>Contraseña</label>
              <input type="password" placeholder="********" />

              <button className="btn login" onClick={() => setPantalla("home")}>
                Iniciar Sesión
              </button>

              <p className="small-text">
                ¿No tienes cuenta?{" "}
                <span onClick={() => setPantalla("registro")}>Regístrate</span>
              </p>
            </div>

            <button className="back" onClick={volverAInicio}>
              ← Volver
            </button>
          </>
        )}

        {pantalla === "registro" && (
  <>
          <h2 className="title title-small">Nueva Cuenta</h2>

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
              Necesitamos tus datos personales, por favor presiona continuar.
            </p>

            <button
              className="btn login"
              onClick={() => setPantalla("datos1")}
            >
              Continuar
            </button>
          </div>

          <button className="back" onClick={() => setPantalla("login")}>
            ← Volver
          </button>
        </>
      )}

{pantalla === "datos1" && (
  <>
    <h2 className="title title-small">Nueva Cuenta</h2>

    <div className="form-box">
      <label>Sexo biológico</label>

      <div className="checkbox-row">
        <label><input type="checkbox" /> F</label>
        <label><input type="checkbox" defaultChecked /> M</label>
      </div>

      <label>Peso (Kg)</label>
      <input type="number" placeholder="Peso (kg)" />

      <label>Enfermedades</label>

      {[
        "Diabetes tipo 2",
        "Hipertensión",
        "Hipercolesterolemia Familiar",
        "Cáncer Activo",
        "Asma",
        "Enfermedad Renal",
        "Enfermedad Cardíaca",
        "Otro"
      ].map((item) => (
        <label className="check-option" key={item}>
          <input
            type="checkbox"
            onChange={(e) => {
              if (item === "Otro") {
                setOtroSeleccionado(e.target.checked);
              }
            }}
          />
          {item}
        </label>
      ))}

      {otroSeleccionado && (
        <>
          <input
            type="text"
            placeholder="Ingrese su enfermedad"
            value={otraEnfermedad}
            onChange={(e) => setOtraEnfermedad(e.target.value)}
          />
        </>
      )}


      <button className="btn login" onClick={() => setPantalla("datos2")}>
        Continuar
      </button>
    </div>

    <button className="back" onClick={() => setPantalla("registro")}>
      ← Volver
    </button>
  </>
)}

{pantalla === "datos2" && (
  <>
    <h2 className="title title-small">Nueva Cuenta</h2>

    <div className="form-box">
      <label>Antecedentes Personales:</label>

      {[
        "Enfermedades crónicas diagnosticadas",
        "Cirugías recientes (<4 sem)",
        "Hospitalización Reciente",
        "Embarazo o postparto reciente",
        "Trauma reciente",
        "Antecedente cardiaco importante",
        "Discapacidad o condición neurológica importante",
        "Otro"
      ].map((item) => (
        <label className="check-option" key={item}>
          <input
            type="checkbox"
            onChange={(e) => {
              if (item === "Otro") {
                setOtroAntecedente(e.target.checked);
                if (!e.target.checked) setOtroAntecedenteTexto("");
              }
            }}
          />
          {item}
        </label>
      ))}

      {otroAntecedente && (
        <>
          <label>Otro antecedente</label>
          <input
            type="text"
            placeholder="Ingrese otro antecedente"
            value={otroAntecedenteTexto}
            onChange={(e) => setOtroAntecedenteTexto(e.target.value)}
          />
        </>
      )}
      <button className="btn login" onClick={() => setPantalla("datos3")}>
        Continuar
      </button>
    </div>

    <button className="back" onClick={() => setPantalla("datos1")}>
      ← Volver
    </button>
  </>
)}

{pantalla === "datos3" && (
  <>
    <h2 className="title title-small">Nueva Cuenta</h2>

    <div className="form-box">
      <label>Alergias</label>

{[
  "Alimentaria",
  "Medicamentos",
  "Otros",
  "Ninguna alergia"
].map((item) => (
  <label className="check-option" key={item}>
    <input
      type="checkbox"
      onChange={(e) => {
        if (item === "Alimentaria") {
          setOtraAlergiaAlimentaria(e.target.checked);
          if (!e.target.checked) setAlergiaAlimentariaTexto("");
        }

        if (item === "Medicamentos") {
          setOtraAlergiaMedicamento(e.target.checked);
          if (!e.target.checked) setAlergiaMedicamentoTexto("");
        }

        if (item === "Otros") {
          setOtraAlergia(e.target.checked);
          if (!e.target.checked) setOtraAlergiaTexto("");
        }
      }}
    />
    {item}
  </label>
))}

{otraAlergiaAlimentaria && (
  <>
    <label>¿A qué alimento es alérgico?</label>
    <input
      type="text"
      placeholder="Ej: maní, mariscos, leche..."
      value={alergiaAlimentariaTexto}
      onChange={(e) => setAlergiaAlimentariaTexto(e.target.value)}
    />
  </>
)}

{otraAlergiaMedicamento && (
  <>
    <label>¿A qué medicamento es alérgico?</label>
    <input
      type="text"
      placeholder="Ej: penicilina, ibuprofeno..."
      value={alergiaMedicamentoTexto}
      onChange={(e) => setAlergiaMedicamentoTexto(e.target.value)}
    />
  </>
)}

{otraAlergia && (
  <>
    <label>Otra alergia</label>
    <input
      type="text"
      placeholder="Ingrese otra alergia"
      value={otraAlergiaTexto}
      onChange={(e) => setOtraAlergiaTexto(e.target.value)}
    />
  </>
)}

<label>Medicamentos Actuales</label>

{[
  "Insulina",
  "Corticoides",
  "Anticoagulantes",
  "Otros"
].map((item) => (
  <label className="check-option" key={item}>
    <input
      type="checkbox"
      onChange={(e) => {
        if (item === "Otros") {
          setOtroMedicamento(e.target.checked);
          if (!e.target.checked) setOtroMedicamentoTexto("");
        }
      }}
    />
    {item}
  </label>
))}

{otroMedicamento && (
  <>
    <label>Otro medicamento</label>
    <input
      type="text"
      placeholder="Ingrese el medicamento"
      value={otroMedicamentoTexto}
      onChange={(e) => setOtroMedicamentoTexto(e.target.value)}
    />
  </>
)}

<label>Estado Especial</label>

{["Embarazo", "Inmunosuprimido"].map((item) => (
  <label className="check-option" key={item}>
    <input type="checkbox" />
    {item}
  </label>
))}

<label>Alergias</label>

{[
  "Alimentaria",
  "Medicamentos",
  "Otros",
  "Ninguna alergia"
].map((item) => (
  <label className="check-option" key={item}>
    <input
      type="checkbox"
      onChange={(e) => {
        if (item === "Alimentaria") {
          setOtraAlergiaAlimentaria(e.target.checked);
          if (!e.target.checked) setAlergiaAlimentariaTexto("");
        }

        if (item === "Medicamentos") {
          setOtraAlergiaMedicamento(e.target.checked);
          if (!e.target.checked) setAlergiaMedicamentoTexto("");
        }

        if (item === "Otros") {
          setOtraAlergia(e.target.checked);
          if (!e.target.checked) setOtraAlergiaTexto("");
        }
      }}
    />
    {item}
  </label>
))}

{otraAlergiaAlimentaria && (
  <>
    <label>¿A qué alimento es alérgico?</label>
    <input
      type="text"
      placeholder="Ej: maní, mariscos, leche..."
      value={alergiaAlimentariaTexto}
      onChange={(e) => setAlergiaAlimentariaTexto(e.target.value)}
    />
  </>
)}

{otraAlergiaMedicamento && (
  <>
    <label>¿A qué medicamento es alérgico?</label>
    <input
      type="text"
      placeholder="Ej: penicilina, ibuprofeno..."
      value={alergiaMedicamentoTexto}
      onChange={(e) => setAlergiaMedicamentoTexto(e.target.value)}
    />
  </>
)}

{otraAlergia && (
  <>
    <label>Otra alergia</label>
    <input
      type="text"
      placeholder="Ingrese otra alergia"
      value={otraAlergiaTexto}
      onChange={(e) => setOtraAlergiaTexto(e.target.value)}
    />
  </>
)}

  <label>Medicamentos Actuales</label>

  {[
    "Insulina",
    "Corticoides",
    "Anticoagulantes",
    "Otros"
  ].map((item) => (
    <label className="check-option" key={item}>
      <input
        type="checkbox"
        onChange={(e) => {
          if (item === "Otros") {
            setOtroMedicamento(e.target.checked);
            if (!e.target.checked) setOtroMedicamentoTexto("");
          }
        }}
      />
      {item}
    </label>
  ))}

  {otroMedicamento && (
    <>
      <label>Otro medicamento</label>
      <input
        type="text"
        placeholder="Ingrese el medicamento"
        value={otroMedicamentoTexto}
        onChange={(e) => setOtroMedicamentoTexto(e.target.value)}
      />
    </>
  )}

<label>Estado Especial</label>

{["Embarazo", "Inmunosuprimido"].map((item) => (
  <label className="check-option" key={item}>
    <input type="checkbox" />
    {item}
  </label>
))}

      <label>Estado Especial</label>

      {["Embarazo", "Inmunosuprimido"].map((item) => (
        <label className="check-option" key={item}>
          <input type="checkbox" />
          {item}
        </label>
      ))}

      <button className="btn login" onClick={() => setPantalla("home")}>
        Registrarse
      </button>
    </div>

    <button className="back" onClick={() => setPantalla("datos2")}>
      ← Volver
    </button>
  </>
)}

        {pantalla === "antecedentes" && (
          <>
            <h2 className="title title-small">Antecedentes importantes</h2>

            <div className="selection-box">
              Selecciona una o varias opciones. Si no aplica ninguna, presiona continuar.
            </div>

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

            {antecedentesSeleccionados.length > 0 && (
              <div className="selection-box">
                <strong>Antecedentes seleccionados:</strong>
                <ul className="selected-list">
                  {antecedentesSeleccionados.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="buttons-secondary">
              <button className="secondary-btn" onClick={volverAInicio}>
                ← Volver
              </button>

              <button
                className="secondary-btn primary-next"
                onClick={() => setPantalla("emergencia")}
              >
                Continuar
              </button>
            </div>
          </>
        )}

        {pantalla === "emergencia" && (
          <>
            <h2 className="title">Selecciona tipo de paciente</h2>

            <div className="grid">
              <button
                className="card-btn"
                onClick={() => seleccionarPaciente("Niño")}
              >
                <img src="/nino.png" alt="Niño" />
                <span>Niño</span>
              </button>

              <button
                className="card-btn"
                onClick={() => seleccionarPaciente("Embarazada")}
              >
                <img src="/embarazada.png" alt="Embarazada" />
                <span>Embarazada</span>
              </button>

              <button
                className="card-btn"
                onClick={() => seleccionarPaciente("Trauma")}
              >
                <img src="/trauma.png" alt="Trauma" />
                <span>Trauma</span>
              </button>

              <button
                className="card-btn"
                onClick={() => seleccionarPaciente("Adulto")}
              >
                <img src="/adulto.png" alt="Adulto" />
                <span>Adulto</span>
              </button>

              <button
                className="card-btn"
                onClick={() => seleccionarPaciente("Adultomayor")}
              >
                <img src="/adulto.png" alt="Adulto Mayor" />
                <span>Adulto Mayor +65</span>
              </button>
              <button
                className="card-btn"
                onClick={() => seleccionarPaciente("Tramites y fórmulas")}>
                <img src="/tramites.png" alt="Trámites y fórmulas" />
                <span>Trámites y fórmulas</span>

                </button>

            </div>

            <button className="back" onClick={volverAAntecedentes}>
              ← Volver
            </button>
          </>
        )}

        {pantalla === "banderas" && (
          <>
            <h2 className="title title-small">
              Banderas rojas de {tipoPaciente}
            </h2>

            <div className="selection-box">
              <strong>Antecedentes:</strong>{" "}
              {antecedentesSeleccionados.length > 0
                ? antecedentesSeleccionados.join(", ")
                : "Ninguno seleccionado"}
            </div>

            <div className="selection-box">
              {usaSubmenu
                ? "Puedes seleccionar varias opciones y abrir el submenú de cada una."
                : "Puedes seleccionar una o varias opciones."}
            </div>

            <div className="redflags-grid">
              {banderasActuales.map((bandera) => (
                <button
                  key={bandera}
                  className={`redflag-btn ${
                    banderasSeleccionadas.includes(bandera) ? "selected" : ""
                  }`}
                  onClick={() =>
                    usaSubmenu ? abrirSubmenu(bandera) : toggleBandera(bandera)
                  }
                >
                  <span>{bandera}</span>

                  {subrespuestas[bandera] && subrespuestas[bandera].length > 0 && (
                    <span className="badge-count">
                      {subrespuestas[bandera].length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {banderasSeleccionadas.length > 0 && (
              <div className="selection-box">
                <strong>Banderas seleccionadas:</strong>
                <ul className="selected-list">
                  {banderasSeleccionadas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {usaSubmenu && Object.keys(subrespuestas).length > 0 && (
              <div className="selection-box">
                <strong>Submenús respondidos:</strong>
                <ul className="selected-list">
                  {Object.entries(subrespuestas).map(([bandera, respuestas]) => (
                    <li key={bandera}>
                      <strong>{bandera}:</strong> {respuestas.length} seleccionada(s)
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="buttons-secondary">
              <button className="secondary-btn" onClick={volverATipos}>
                ← Volver
              </button>

              <button
                className="secondary-btn primary-next"
                onClick={() =>
                  console.log(
                    "Antecedentes:",
                    antecedentesSeleccionados,
                    "Tipo:",
                    tipoPaciente,
                    "Banderas:",
                    banderasSeleccionadas,
                    "Subrespuestas:",
                    subrespuestas
                  )
                }
              >
                Continuar
              </button>
            </div>
          </>
        )}

        {pantalla === "submenu" && usaSubmenu && (
          <>
            <h2 className="title title-small">{banderaActual}</h2>

            <div className="selection-box">
              Selecciona una o varias opciones para <strong>{banderaActual}</strong>.
            </div>

            <div className="submenu-grid">
              {preguntasActuales.map((pregunta) => (
                <button
                  key={pregunta}
                  className={`submenu-btn ${
                    (subrespuestas[banderaActual] || []).includes(pregunta)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleSubrespuesta(pregunta)}
                >
                  {pregunta}
                </button>
              ))}
            </div>

            {(subrespuestas[banderaActual] || []).length > 0 && (
              <div className="selection-box">
                <strong>Seleccionadas en {banderaActual}:</strong>
                <ul className="selected-list">
                  {(subrespuestas[banderaActual] || []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="buttons-secondary">
              <button
                className="secondary-btn"
                onClick={() => setPantalla("banderas")}
              >
                ← Volver a banderas
              </button>

              <button
                className="secondary-btn primary-next"
                onClick={() => setPantalla("banderas")}
              >
                Guardar y volver
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;