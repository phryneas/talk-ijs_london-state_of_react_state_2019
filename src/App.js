import React from "react";
import { LoginForm } from "./LoginForm";

import { useQuery, useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";

function useLogin() {
  const { data, refetch } = useQuery(gql`
    query getLoginState {
      loginState @client {
        user {
          username
          role
        }
        error
        initialized
      }
    }
  `);

  const login = useMutation(
    gql`
      mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) @client
      }
    `,
    { refetchQueries: ["getLoginState"] }
  );

  const logout = useMutation(gql`
    mutation logout {
      logout @client
    }
  `);

  if (!data || !data.loginState) {
    return {
      loading: true,
      loggedIn: false,
      user: null,
      error: null
    };
  }
  return {
    loading: !data.loginState.initialized,
    loggedIn: !!data.loginState.user,
    user: data.loginState.user,
    error: data.loginState.error,
    login: (username, password) =>
      login({ variables: { username, password } }).then(() => refetch()),
    logout
  };
}

export function App() {
  const { loading, loggedIn, user, error, login, logout } = useLogin();

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