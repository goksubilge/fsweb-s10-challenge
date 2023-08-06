import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/React-Toastify.css";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducer, { baslangicDegerleri } from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const migros = createStore(reducer, baslangicDegerleri);

root.render(
  <Provider store={migros}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
