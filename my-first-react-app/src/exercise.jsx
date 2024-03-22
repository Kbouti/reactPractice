import { useState } from "react";

function SyncedInputs() {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
  }

  return (
    <>
      <Input label="First input" value={userInput} onChange={handleChange} />
      <Input label="Second input" value={userInput} onChange={handleChange} />
    </>
  );
}

function Input({ label, value, onChange }) {

  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
}

export { SyncedInputs };
