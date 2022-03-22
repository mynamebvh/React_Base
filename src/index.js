import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// components
import App from "./App";
// stores
import store from "stores";

// services
import initRequest from "services/initRequest";

// styles
import "./index.css";
import reportWebVitals from "./reportWebVitals";

initRequest(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
