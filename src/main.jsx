import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Themecontextprovider from "./components/shared/Context/Themecontextprovider.jsx";
import { CartProvider } from "./components/shared/Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Themecontextprovider>
        <App />
      </Themecontextprovider>
    </CartProvider>
  </StrictMode>
);
