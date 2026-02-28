import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
