import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="d-flex flex-col justify-content-center bg-dark align-items-center vh-100 ">
      <div className="bg-white p-3 rounded w-25">
        <p className="w-100 text-center">
          <h3>Eagle Eye</h3>
        </p>
        <img
          className="rounded img-thumbnail mb-3"
          src="https://examonline.in/wp-content/uploads/2020/11/What-Is-Online-Exam.png"
          alt="Image of an online examination"
        />
        <div className="w-100 text-center">
          <Link to="/login">
            <button className="btn btn-primary mb-3 w-100">Login</button>
          </Link>
        </div>
        <div className="w-100 text-center">
          <Link to="/signup">
            <button className="btn btn-secondary mb-0 w-100">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
