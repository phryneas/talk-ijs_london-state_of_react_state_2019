import React from "react";
import { LoginForm } from "./LoginForm";
import { withLogin } from "./LoginContext";

class UnwrappedApp extends React.Component {
  render() {
    const { loading, loggedIn, user, error, login, logout } = this.props;

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
  }
}

export const App = withLogin(UnwrappedApp);
