import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({ id: 1, permisos: ["admin"] });
  const [user, setUser] = useState(null);

  // inicia session
  const loggin = () =>
    setUser({
      id: 1,
      name: "Gustavo Ordaz Paredes",
      email: "gustavoordazp@gmail.com",
      telefono: "9721123082",
      permisos: ["admin"],
    });

  const logout = () => setUser(null);

  // Verifica si esxite un usuario
  const isLogget = () => !!user;

  // Verifica si se cuentan con permisos de administrador
  const hasPermiso = () => !!user?.permisos.includes("admin1");

  const contextValue = {
    user,
    isLogget,
    hasPermiso,
    loggin,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
