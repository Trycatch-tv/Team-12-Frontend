import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./components/nav/navBar";
import { Slider } from "./components/slider/slider";
import { CineList } from "./components/cartelera/CineList";
import { Footer } from "./components/footer/fotter";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import { AppRotuer } from "./router/AppRotuer";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      <Slider />
      <AppRotuer />
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
