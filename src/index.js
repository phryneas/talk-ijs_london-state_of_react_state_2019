import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Example1 } from "./Example1";
import { Example2 } from "./Example2";
import { Example3 } from "./Example3";
import { Example4 } from "./Example4";
import { Example5 } from "./Example5";
import { Example6 } from "./Example6";
import { LoginExample } from "./LoginExample";

function App() {
  return (
    <>
      <h1>Choose your example:</h1>
      <details>
        <summary>
          <span>Example 1: single state with setState</span>
        </summary>
        <Example1 />
      </details>
      <details>
        <summary>
          <span>Example 2: multiple states with setState</span>
        </summary>
        <Example2 />
      </details>
      <details>
        <summary>
          <span>
            Example 3: setState limitations - accessing props after a timeout
          </span>
        </summary>
        <Example3 />
      </details>
      <details>
        <summary>
          <span>Example 4: overcoming setState limitations - useReducer</span>
        </summary>
        <Example4 />
      </details>
      <details>
        <summary>
          <span>
            Example 5: when lifting state up, prevent prop-drilling by using
            props.children
          </span>
        </summary>
        <Example5 />
      </details>
      <details>
        <summary>
          <span>
            Example 6: use context to prevent prop-drilling when state is shared
            in different subtrees
          </span>
        </summary>
        <Example6 />
      </details>

      <details open>
        <summary>
          <span>Final example: user login</span>
        </summary>
        <LoginExample />
      </details>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
