import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import "./styles.css";

/*
//최신버전에 있는 구문
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
