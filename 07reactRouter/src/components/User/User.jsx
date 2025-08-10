import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User:{userid}</div> //yahan brackets mai wohi name likhna hai jo main.jsx mai likha hai ,user path mai
  );
}

export default User;
