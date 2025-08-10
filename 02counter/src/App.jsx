import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>footer</p>
    </>
  );
}

export default App;
