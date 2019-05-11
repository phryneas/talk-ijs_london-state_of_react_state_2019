import React from "react";

export function Example1() {
  const [state, setState] = React.useState("initial state");

  return (
    <>
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <p>
        Current State you entered above: <b>{state}</b>
      </p>
    </>
  );
}
