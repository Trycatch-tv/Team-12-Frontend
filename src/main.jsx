import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthProvider";
import "./styles/generalStyles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider />
  </React.StrictMode>
);
