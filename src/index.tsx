import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataContextProvider } from "./context/DataContext";
import { LanguageContextProvider } from "./context/LanguageContext";
import { BrowserRouter as Router } from "react-router-dom";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div")
);
root.render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </DataContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
