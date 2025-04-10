import React from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

function CameraComponent() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/studenthome");
  };
  const handleStartTest = () => {
    navigate("/testpage");
  }
  return (
    <div className="d-flex flex-col justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white rounded p-3">
        <p className="h4 text-center">Confirm Your Camera View</p>
        <div>
          <Webcam/>
        </div>
        <div className="d-flex flex-row gap-3">
          <button onClick={handleButtonClick} className="btn btn-default  border-dark text-center mt-2 p-2 rounded w-100">
            Go back
          </button>
          <button onClick={handleStartTest} className="btn btn-primary text-center mt-2 p-2 rounded w-100">
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default CameraComponent;
