import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
export const useApp = () => {
  return useContext(AppContext);
};

export function AppProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    loading: false,
    currentRoute: "",
  });

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
}
