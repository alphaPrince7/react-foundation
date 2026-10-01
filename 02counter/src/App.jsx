import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  const addValue = () => {
    console.log("add value clicked", counter);
    // let counter = counter + 1;
    setCounter(counter + 1);
  };
  if (counter > 20) {
    setCounter(20);
  } else if (counter < 0) {
    setCounter(0);
  }
  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={() => setCounter(counter - 1)}>Remove value</button>
    </>
  );
}

export default App;
