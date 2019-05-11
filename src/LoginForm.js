import React from "react";

// simple login form

export function LoginForm(props) {
  const { onSubmit, error } = props;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({
          username: e.target.elements["username"].value,
          password: e.target.elements["password"].value
        });
      }}
    >
      <h3>Please log in:</h3>
      {error && (
        <p>
          <b>An error occured: {error}</b>
        </p>
      )}
      <label>
        Username: <input name="username" type="text" />
      </label>{" "}
      <br />
      <label>
        Password: <input name="password" type="password" />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}
