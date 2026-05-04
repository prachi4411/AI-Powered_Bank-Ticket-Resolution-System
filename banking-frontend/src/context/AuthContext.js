import { createContext, useState, useEffect } from "react";
import { getToken } from "../utils/token";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setTokenState] = useState(null);

  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setTokenState }}>
      {children}
    </AuthContext.Provider>
  );
};