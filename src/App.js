import React from "react";

import { LoginForm } from "./LoginForm";

import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  loginThunk,
  loginSlice,
  selectLoginInfo
} from "./slices/loginSlice";

function useLogin() {
  const { loading, loggedIn, error } = useSelector(selectLoginInfo);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const login = (username, password) =>
    dispatch(loginThunk(username, password));
  const logout = () => dispatch(loginSlice.actions.logout());

  return { loading, loggedIn, error, user, login, logout };
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
