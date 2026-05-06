import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [antecedentesSeleccionados, setAntecedentesSeleccionados] = useState([]);

  const [tipoPaciente, setTipoPaciente] = useState("");

  const [banderasSeleccionadas, setBanderasSeleccionadas] = useState([]);

  const [banderaActual, setBanderaActual] = useState("");

  const [subrespuestas, setSubrespuestas] = useState({});

  return (
    <AppContext.Provider
      value={{
        antecedentesSeleccionados,
        setAntecedentesSeleccionados,

        tipoPaciente,
        setTipoPaciente,

        banderasSeleccionadas,
        setBanderasSeleccionadas,

        banderaActual,
        setBanderaActual,

        subrespuestas,
        setSubrespuestas
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}