import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "bhavya",
    age: 18,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-blue-500 text-neutral-950  rounded-xl mb-4">
        tailwind test
      </h1>
      <Card username="chaiaurcode" priceName="50" />
      <Card username="bhavya" />
    </>
  );
}

export default App;
