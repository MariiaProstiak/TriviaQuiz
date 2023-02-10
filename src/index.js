import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ResultsContextProvider } from "./store/results-context";

ReactDOM.render(
  <ResultsContextProvider>
    <App />
  </ResultsContextProvider>,

  document.getElementById("root")
);
