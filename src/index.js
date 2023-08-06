import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/React-Toastify.css";

//redux
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducer, { baslangicDegerleri } from "./reducers";

//logger
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ini redux store
const migros = createStore(
  reducer,
  baslangicDegerleri,
  composeWithDevTools(applyMiddleware(logger))
);

root.render(
  <Provider store={migros}>
    <BrowserRouter>
      <>
        {/* <ToastContainer /> */}
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
