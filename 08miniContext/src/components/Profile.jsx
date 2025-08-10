import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="text-amber-100">please login</div>;
  }

  return <div className="text-amber-50">Welcome {user.username}</div>;
}

export default Profile;
