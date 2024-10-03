import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Themecontextprovider from "./components/shared/Context/Themecontextprovider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Themecontextprovider>
      <App />
    </Themecontextprovider>
  </StrictMode>
);
