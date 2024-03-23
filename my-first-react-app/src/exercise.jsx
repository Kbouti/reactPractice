import { useState } from "react";

// *******************************************************************************************
// Assignment:
// Update the Person component we’ve been using above.

// Add two separate input fields for the first name and the last name. The updated full name should be displayed on every keystroke in either of the two input fields.
// There are many ways you can do this. Keep in mind what you’ve learned in this lesson while coding it out.

// *******************************************************************************************

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
    age: 100,
  });

  const fullName = person.firstName + " " + person.lastName;
  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleFirstNameChange}
      ></input>
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleLastNameChange}
      ></input>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export { Person };
