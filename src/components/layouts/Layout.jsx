import React from "react";
import Navegacion from "../Navegacion";

const Layout = ({ children }) => {
  return (
    <>
      <Navegacion />
      {children}  
    </>
  );
};

export default Layout;
