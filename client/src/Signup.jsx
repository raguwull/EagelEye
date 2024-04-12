import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validationFunction from "./handleSignup";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorResult = validationFunction(values);
    setError(errorResult);

    if (
      errorResult.username === "" &&
      errorResult.email === "" &&
      errorResult.password === ""
    ) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          if (res.data === "success") {
            navigate("/login");
          } else {
            alert(res.data);
          }
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  };

  return (
    <div className="d-flex flex-col justify-content-center align-items-center vh-100 bg-dark">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3 h4 text-center">Sign Up</div>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control rounded-0"
              name="username"
              onChange={handleInput}
              placeholder="Enter username"
            />
            {error.username && (
              <span className="text-danger mb-3">{error.username}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="rounded-0 form-control"
              name="email"
              onChange={handleInput}
              placeholder="Enter email address"
            />
            {error.email && (
              <span className="text-danger mb-3">{error.email}</span>
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
              <span className="text-danger mb-3">{error.password}</span>
            )}
          </div>
          <div>
            <button className="btn btn-primary w-100 mb-2" type="submit">
              Submit
            </button>
          </div>
          <div>
            <Link className="btn btn-default w-100 border-dark" to="/login">
              Have an Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
