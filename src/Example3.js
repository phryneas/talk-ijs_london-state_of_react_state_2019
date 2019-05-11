import React, { useEffect } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

export function Example3() {
  const [numberOfTheSecond, setNOTS] = React.useState(getRandomNumber);
  useEffect(() => {
    let interval = setInterval(() => setNOTS(getRandomNumber()), 1000);
    return () => clearInterval(interval);
  });

  return <Example3Child numberOfTheSecond={numberOfTheSecond} />;
}

function Example3Child(props) {
  const [capturedNumber, setCapturedNumber] = React.useState(
    props.numberOfTheSecond
  );

  return (
    <>
      <p>Number of the second: {props.numberOfTheSecond}</p>
      <p> Currently captured number: {capturedNumber}</p>
      <button
        onClick={() =>
          setTimeout(() => setCapturedNumber(props.numberOfTheSecond), 3000)
        }
      >
        In three seconds, capture the new number!
      </button>
      <p>
        <em>
          Note: this does capture the current number, not the one in three
          seconds! With just useState, this is not possible.
        </em>
      </p>
    </>
  );
}
