import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import DevTools from "mobx-react-devtools";
import { Provider } from "mobx-react";

import { Login } from "./model/Login";
import { App } from "./App";

const loginState = new Login();
loginState.initialize();

const rootElement = document.getElementById("app");
ReactDOM.render(
  <>
    <DevTools />
    <Provider Login={loginState}>
      <App />
    </Provider>
  </>,
  rootElement
);
