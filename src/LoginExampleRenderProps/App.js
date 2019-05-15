import React from "react";
import { LoginForm } from "./LoginForm";
import { WithLogin } from "./LoginContext";

export class App extends React.Component {
  render() {
    return (
      <WithLogin>
        {({ loading, loggedIn, user, error, login, logout }) => {
          if (loading) {
            return <>initializing, please wait</>;
          }

          if (!loggedIn) {
            return (
              <LoginForm
                error={error}
                onSubmit={data => login(data.username, data.password)}
              />
            );
          }

          return (
            <>
              You are logged in as user <b>{user.username}</b> with the role of{" "}
              <i>{user.role}</i>
              <br />
              <button onClick={logout}>Log out</button>
            </>
          );
        }}
      </WithLogin>
    );
  }
}
