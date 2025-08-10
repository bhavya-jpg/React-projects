import { useState } from "react";

import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-800">
        <h1 className="text-amber-50 text-5xl ">
          I am learning contexting in react
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
