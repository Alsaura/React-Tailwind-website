import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./pages/Hero.jsx";
import { Content } from "./pages/Content.jsx";
import { Service } from "./pages/Service.jsx";
import { Statistic } from "./pages/Statistic.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero />
    <Service />
    <Statistic />
  </React.StrictMode>
);
