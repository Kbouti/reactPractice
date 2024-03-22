import { useState } from "react";

// *******************************************************************************************
// Assignment:
// Update the Person component we’ve been using above.

// Add two separate input fields for the first name and the last name. The updated full name should be displayed on every keystroke in either of the two input fields.
// There are many ways you can do this. Keep in mind what you’ve learned in this lesson while coding it out.

// *******************************************************************************************

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const handleIncreaseAge = () => {
    // This^^ is super helpful syntax for: Copy this object, but change this one thing
    console.log(`in handleIncreaseAge (before setPerson call:`, person);
    setPerson((prevPerson) => ({ ...person, age: prevPerson.age + 1 }));
    setPerson((prevPerson) => ({ ...person, age: prevPerson.age + 1 }));
    //  Using prevPerson as a callback like this instead of just passing the new object to setPerson allows us to run this twice in a row and actually increment age twice.
    //  This allowed us to get and set the new age, then access the new state in the next line

    console.log(`in handleIncreaseAge (after setPerson call:`, person);
  };

  console.log(`during render:`, person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export { Person };
