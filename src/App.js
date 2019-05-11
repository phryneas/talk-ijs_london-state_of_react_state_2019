import React from "react";
import { inject, observer } from "mobx-react";

import { LoginForm } from "./LoginForm";

export const App = inject("Login")(
  observer(function(props) {
    const { Login } = props;

    if (Login.loading) {
      return <>initializing, please wait</>;
    }

    if (!Login.loggedIn) {
      return (
        <LoginForm
          error={Login.error}
          onSubmit={data => Login.login(data.username, data.password)}
        />
      );
    }

    return (
      <>
        You are logged in as user <b>{Login.user.username}</b> with the role of{" "}
        <i>{Login.user.role}</i>
        <br />
        <button onClick={Login.logout}>Log out</button>
      </>
    );
  })
);
