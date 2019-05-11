import React from "react";

export function Example2() {
  const [state, setState] = React.useState("initial state");
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <br />
      <button onClick={() => setCounter(oldValue => oldValue + 1)}>
        Increment Counter!
      </button>
      <p>
        Current State you entered above: <b>{state}</b>
      </p>
      <p>
        Current Counter State: <b>{counter}</b>
      </p>
    </>
  );
}
