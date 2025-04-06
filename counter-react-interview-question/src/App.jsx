import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCount] = useState(15);
  const addVal = () => {
    if (counter <= 19) {
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      // setCount(counter + 1);
      // setCount(counter + 1);
      // setCount(counter + 1);
      // setCount(counter + 1);
    }
    9;
  };
  const remVal = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter value :{counter} </h1>
      <button onClick={addVal}>Add Value</button>
      <button onClick={remVal}>Remove Value</button>
    </>
  );
}

export default App;
