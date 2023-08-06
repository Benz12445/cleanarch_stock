import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const SetAppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const useSetAppCtx = () => {
  return useContext(SetAppContext);
};

export function AppProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    loading: false,
    isDrawerOpen: false,
    currentRoute: "",
    auth: false,
  });

  useEffect(() => {
    if (
      !localStorage.getItem(`token`) &&
      window.location.pathname != "/login"
    ) {
      console.log(window.location);
      window.location.href = "/login";
    }
  }, []);

  const logout = () => {
    localStorage.removeItem(`token`);
    setGlobalState((prev) => ({ ...prev, auth: false }));
    window.location.href = "/login";
  };

  return (
    <SetAppContext.Provider value={{ setGlobalState, logout }}>
      <AppContext.Provider value={{ globalState }}>
        {children}
      </AppContext.Provider>
    </SetAppContext.Provider>
  );
}
