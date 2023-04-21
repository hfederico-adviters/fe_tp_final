import React, { useEffect, useState } from "react";

export const AutenticacionContext = React.createContext();

export const AutenticacionProvider = (props) => {
  const [usuario, setUsuario] = useState({
    id: localStorage.getItem("userId"),
    usuario: localStorage.getItem("user"),
    userRol: localStorage.getItem("rol"),
  });
  const iniciarSesion = (usuario) => {
    setUsuario(usuario);
  };
  const cerrarSesion = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("Tokens");
    localStorage.removeItem("rol");
    setUsuario(null);
  };

  return (
    <AutenticacionContext.Provider
      value={{ usuario, setUsuario, iniciarSesion, cerrarSesion }}
    >
      {props.children}
    </AutenticacionContext.Provider>
  );
};
