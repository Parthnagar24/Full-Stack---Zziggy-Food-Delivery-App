import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom"; // <-- changed
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter> {/* <-- changed */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);
