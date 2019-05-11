import React from "react";
import { LoginProvider } from "./LoginContext";
import { App } from "./App";

// this would usually be your main.js

export function LoginExample() {
  return (
    <LoginProvider>
      <App />
    </LoginProvider>
  );
}
