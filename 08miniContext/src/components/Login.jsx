import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2 className="m-2 flex justify-center text-amber-50 text-2xl">Login</h2>
      <input
        className="bg-gray-500 border-2 mr-3"
        type="text "
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="bg-gray-500 border-2 mr-3"
        type="text "
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black text-amber-50 p-2 rounded-2xl" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
