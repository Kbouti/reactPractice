import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({name: "John", age: 100 });

    const handleIncreaseAge = () => {

        const newPerson = {...person, age: person.age + 1 };
            // This^^ is super helpful syntax for: Copy this object, but change this one thing
            setPerson(newPerson);
    }



return (
    <>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
    <button onclick={handleIncreaseAge}>Increase age</button>
    </>
)


}

export { Person };
