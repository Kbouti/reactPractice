function Greeting() {
  return <h1>&quot;Just out for a rip are ya, bud?&quot;</h1>;
}

function Greeting2() {
  return <h2>Just out for a rip</h2>;
}

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}



function App2() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }


export { Greeting, Greeting2, App2 };
