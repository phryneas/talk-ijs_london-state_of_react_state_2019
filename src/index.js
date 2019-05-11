import React from "react";
import ReactDOM from "react-dom";

import { configureStore } from "redux-starter-kit";
import { Provider } from "react-redux";

import { loginSlice, initialisationThunk } from "./slices/loginSlice";
import { App } from "./App";

const store = configureStore({ reducer: { login: loginSlice.reducer } });
store.dispatch(initialisationThunk());

console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
