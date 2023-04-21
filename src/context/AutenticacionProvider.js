import React, { useEffect, useState } from "react";

export const AutenticacionContext = React.createContext();

export const AutenticacionProvider = (props) => {
  const [usuario, setUsuario] = useState(localStorage.getItem("user"));
  const iniciarSesion = (usuario) => {
    setUsuario(usuario);
  };
  const cerrarSesion = () => {
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
