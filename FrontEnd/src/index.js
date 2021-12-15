import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./bootstarp/main.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
