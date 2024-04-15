import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  var isLoggedin = false;
  localStorage.setItem("isLoggedin", isLoggedin);
  localStorage.setItem("usertype", "");
  localStorage.setItem("username", "");

  const navigate = useNavigate();

  const [values, setValues] = useState({  
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.message === "success") {
          console.log(res.data);
          isLoggedin = true;
          localStorage.setItem("isLoggedin", isLoggedin);
          localStorage.setItem("usertype", res.data.usertype);
          localStorage.setItem("username", res.data.username);
          if (res.data.usertype === "student") {
            navigate("/studenthome");
          } else if (res.data.usertype === "proctor") {
            navigate("/proctorhome");
          }
        } else {
          setError(res.data);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="d-flex flex-col justify-content-center align-items-center vh-100 bg-dark">
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3 h4 text-center">Login</div>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control rounded-0"
              name="username"
              onChange={handleInput}
              placeholder="Enter username"
            />
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
          </div>
          <div className="text-danger mb-3">
            {error && <span>{error}</span>}
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
