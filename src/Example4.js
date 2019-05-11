import React, { useEffect } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

export function Example4() {
  const [numberOfTheSecond, setNOTS] = React.useState(getRandomNumber);
  useEffect(() => {
    let interval = setInterval(() => setNOTS(getRandomNumber()), 1000);
    return () => clearInterval(interval);
  });

  return <Example4Child numberOfTheSecond={numberOfTheSecond} />;
}

function Example4Child(props) {
  const [state, dispatchAction] = React.useReducer(
    (oldState, action) => {
      if (action.type === "capture") {
        return { ...oldState, capturedNumber: props.numberOfTheSecond };
      }
    },
    { capturedNumber: props.numberOfTheSecond }
  );

  return (
    <>
      <p>Number of the second: {props.numberOfTheSecond}</p>
      <p> Currently captured number: {state.capturedNumber}</p>
      <button
        onClick={() =>
          setTimeout(() => dispatchAction({ type: "capture" }), 3000)
        }
      >
        In three seconds, capture the new number!
      </button>
      <p>
        <em>
          Note: this works, because the reducer is executed during the next call
          to useReducer in the next execution of your component function. As we
          are defining the reducer function within that scope, we have full
          access to the current props
        </em>
      </p>
    </>
  );
}
