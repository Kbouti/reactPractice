import {useState} from "react";

function Greeting() {
  return <h1>&quot;Just out for a rip are ya, bud?&quot;</h1>;
}

function Greeting2() {
  return <h2>Just out for a rip</h2>;
}


function List(props) {
  if (!props.animals){
    return <div>Loading...</div>;
  }
  if (props.animals.length ===0){
    return <div>There are no animals in the list</div>;
  }
  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>
      })}
    </ul>
  );
}


//  ****************************************************************************
//  This input didn't show up? 

function customInput() {
  const [value, setValue] = useState("");

  return (
    <input
    type ="text"
    value={value}
    onChange={(event) => setValue(event.target.value)}
    />
  )
}


//  ****************************************************************************


function App2() {
    // const animals = ["Lion", "Cow", "Snake", "Lizard"];

    const animals = [];

    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }


export { Greeting, Greeting2, App2, customInput };
