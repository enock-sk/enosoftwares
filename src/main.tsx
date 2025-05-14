import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga";

ReactGA.initialize("354471912"); // Replace with your Google Analytics ID
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
