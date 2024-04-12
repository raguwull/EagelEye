import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome-div flex flex-col">
      <h1>Welcome to Eagle Eye!</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Welcome;
