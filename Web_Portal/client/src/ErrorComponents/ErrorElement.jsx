import React from "react";
import { Link } from "react-router-dom";

function ErrorElement() {
  return (
    <div className="d-flex flex-col justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white w-25 rounded p-3">
        <div className="h3 text-center mb-3">Error 404</div>
        <Link to="/"><button className="btn btn-primary w-100">Go back to Home</button></Link>
      </div>
    </div>
  );
}

export default ErrorElement;
