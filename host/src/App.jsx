import React from "react";
import ReactDOM from "react-dom";
import Header from "header/Header"

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
