import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import "./styles.css";

//최신버전에 있는 구문
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //console.log가 2번 찍힘
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

/*
//ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more
//위의 경고 v18부터는 사용하지 않는 구문
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/
