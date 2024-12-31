import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Fixed from "../src/components/FixedButtons.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Fixed />
  </StrictMode>
);
