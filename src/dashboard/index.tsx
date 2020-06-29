import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import configStore from "./store/redux/store";
import "../styles/main.scss";

const store = configStore();
ReactDOM.render(
  <Provider store={store}>
    <App test="example maheshwran" />
  </Provider>,
  document.getElementById("root")
);
