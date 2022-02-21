import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import "./index.css";
import './indexShop.css'
// import App from "./App";
import AppShop from './AppShop'
import store from './store/index'

ReactDOM.render(
  <Provider
    store={store}
    >
    <AppShop />
  </Provider>,
  document.getElementById("root")
);
