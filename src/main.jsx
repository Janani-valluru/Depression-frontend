import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ScoreContextProvider } from "./context/ScoreContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ScoreContextProvider>
      <App />
    </ScoreContextProvider>
  </AuthContextProvider>
);
