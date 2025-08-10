import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-amber-50 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xs"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xs"
              style={{ backgroundColor: "blue" }}
            >
              BLUE
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xs"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xs"
              style={{ backgroundColor: "orange" }}
            >
              ORANGE
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xs"
              style={{ backgroundColor: "purple" }}
            >
              PURPLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
