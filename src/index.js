import React from "react";
import ReactDOM from "react-dom";

import "./style/style.scss";
import App from "./App";
import Layout from "./Layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
