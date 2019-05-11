import React from "react";

import { CountProvider, useCount } from "./CountProvider";

export function Example6() {
  return (
    <CountProvider>
      <SomeComponent>
        <SomeComponent>
          <SomeComponent>
            <SomeComponent>
              <DeeplyNestedComponent1 />
            </SomeComponent>
          </SomeComponent>
        </SomeComponent>
      </SomeComponent>
      <SomeComponent>
        <SomeComponent>
          <SomeComponent>
            <SomeComponent>
              <DeeplyNestedComponent2 />
            </SomeComponent>
          </SomeComponent>
        </SomeComponent>
      </SomeComponent>
    </CountProvider>
  );
}

function SomeComponent(props) {
  return (
    <div style={{ border: "1px solid black", margin: "3px" }}>
      {props.children}
    </div>
  );
}

function DeeplyNestedComponent1() {
  const { count } = useCount();

  return <>Current count is {count}</>;
}

function DeeplyNestedComponent2() {
  const { increment } = useCount();

  return <button onClick={increment}>++</button>;
}
