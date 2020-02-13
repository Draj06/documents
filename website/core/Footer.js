import React from "react";
import { render } from "react-dom";
import "./index.css";

const Footer = () => (
  <footer className="footer">
    <p>Some footer nonsense!</p>
  </footer>
);

const App = () => (
  <div className="content">
    <h1>Hi guys!</h1>
  </div>
);

render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));
