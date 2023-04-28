import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./router/AppRouter";
import { HashRouter } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/fotter";
import "./styles/generalStyles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
