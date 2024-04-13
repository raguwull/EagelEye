import React from "react";
import { useNavigate } from "react-router-dom";

function TestComponent(props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/confirm");
  };

  return (
    <div className="bg-white p-2 rounded">
      <div>
        <div className="text-center p-2">
          <span>
            <strong>{props.exam_name}</strong>
          </span>
        </div>
        <div className="p-2">
          Proctored by{" "}
          <span className="text-secondary">{props.proctor_name}</span>
        </div>
        <div className="p-2">
          {" "}
          <span className="text-secondary">{props.start_time}</span>
        </div>
        <div className="p-2">
          Duration:{" "}
          <span className="text-secondary">{props.exam_duration}</span> hrs
        </div>
        <button
          onClick={handleButtonClick}
          className="btn btn-primary p-2 text-center w-100"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
}

export default TestComponent;
