import React from "react";

export function Example5() {
  const [inputState, setInputState] = React.useState("initial");
  const [dropdownState, setDropdownState] = React.useState("0");

  return (
    <>
      <h4>When lifting state up,</h4>
      <p>
        prevent prop drilling by composing intermediate components using the{" "}
        <b>children</b> prop.
      </p>
      <p>
        <SomeDecoration>
          <MyInput value={inputState} setNewValue={setInputState} />
        </SomeDecoration>
      </p>
      <p>
        <OtherDecoration>
          <MyDropdown value={dropdownState} setNewValue={setDropdownState} />
        </OtherDecoration>
      </p>
      <p>
        values: {inputState} - {dropdownState}
      </p>
    </>
  );
}

function SomeDecoration(props) {
  return (
    <span style={{ border: "1px solid black", display: "block" }}>
      {props.children}
    </span>
  );
}

function MyInput(props) {
  return (
    <label>
      My Input{" "}
      <input
        type="text"
        value={props.value}
        onChange={e => props.setNewValue(e.target.value)}
      />
    </label>
  );
}

function OtherDecoration(props) {
  return (
    <span style={{ border: "3px solid red", display: "block" }}>
      {props.children}
    </span>
  );
}

function MyDropdown(props) {
  return (
    <label>
      My Dropdown{" "}
      <select
        value={props.value}
        onChange={e => props.setNewValue(e.target.value)}
      >
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </label>
  );
}
