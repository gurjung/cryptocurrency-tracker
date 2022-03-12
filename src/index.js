import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CryptoContext from "./context/CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.css";

ReactDOM.render(
  <CryptoContext>
    <App />
  </CryptoContext>,
  document.getElementById("root")
);
