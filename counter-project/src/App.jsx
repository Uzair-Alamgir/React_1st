import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    // console.log("Value Added", Math.random());
    if (counter <= 19) {
      counter = counter + 1;
      setCounter(counter);
    }
  };
  const remVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter Value :{counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={remVal}>Remove Value</button>
    </>
  );
}

export default App;
