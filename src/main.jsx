import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartCountProvider } from "./context/CartContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartCountProvider>
      <BrowserRouter onChange={() => window.scrollTo(0, 0)}>
        <App />
        <ScrollToTop />
      </BrowserRouter>
    </CartCountProvider>
  </React.StrictMode>
);
