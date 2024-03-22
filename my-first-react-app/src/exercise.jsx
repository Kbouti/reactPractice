import { useState } from "react";

function SyncedInputs() {
  const [inputValue, setInputValue] = useState("");

  function updateInputValues(e) {
    console.log("poop");
    console.log(`e.target.value: ${e.target.value}`);
    let newValue = e.target.value;
    console.log(`newValue: ${newValue}`);
    setInputValue(newValue);
    console.log(`done setting inputValue`);
}

  return (
    <>
      <Input
        label="First input"
        value={inputValue}
        handleChange={updateInputValues}
      />
      <Input
        label="Second input"
        value={inputValue}
        handleChange={updateInputValues}
      />
    </>
  );
}

function Input({ label, inputValue, handleChange }) {
  // const [text, setText] = useState('');

  // function handleChange(e) {
  //   setText(e.target.value);
  // }

  return (
    <label>
      {label}{" "}
      <input
        value={inputValue}
        onChange={handleChange}
      />
    </label>
  );
}

export { SyncedInputs };
