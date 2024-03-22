import { useState } from 'react';

function SyncedInputs() {
  return (
    <>
      <Input label="First input" value="gt" />
      <Input label="Second input" value="as"/>
    </>
  );
}


// OKKKKKKAAAAAYYYYY
// Why isn't my value working above????^^
// I should be able to manually determine the value of the input when it's rendered. That isn't working for some reason



function Input({ label, userInput }) {
//   const [text, setText] = useState('');
  function handleChange(e) {
    console.log(`e.target.value: ${e.target.value}`)
    // setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        // value={userInput}
        onChange={handleChange}
      />
    </label>
  );
}


export { SyncedInputs };
