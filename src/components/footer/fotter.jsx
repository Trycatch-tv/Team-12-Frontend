import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()}
        Todos los derechos reservados
      </p>
    </footer>
  );
};
