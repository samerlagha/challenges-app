import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./mvp.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ChallengesProvider } from "./ChallengesContext";

ReactDOM.render(
  <React.StrictMode>
    <ChallengesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChallengesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


