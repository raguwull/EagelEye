import React, { useState } from "react";
import { Link } from "react-router-dom";
import validationFunction from "./handleLogin.js";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorResult = validationFunction(values);
    setError(errorResult);
  };

  return (
    <div className="d-flex flex-col justify-content-center align-items-center vh-100 bg-dark">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3 h4 text-center">Login</div>
          <div className="mb-3">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              className="form-control rounded-0"
              name="username"
              onChange={handleInput}
              placeholder="Enter username"
            />
            {error.username && (
              <span className="text-danger mb-3">
                {error.username}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control rounded-0"
              name="password"
              onChange={handleInput}
              placeholder="Enter password"
            />
            {error.password && (
              <span className="text-danger mb-3">
                {error.password}
              </span>
            )}
          </div>

          <div>
            <button
              className="btn btn-primary w-100 mb-2"
              type="submit"
              onChange={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div>
            <Link className="btn btn-default w-100 border-dark" to="/signup">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
