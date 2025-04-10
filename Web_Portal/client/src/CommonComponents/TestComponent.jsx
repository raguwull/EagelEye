import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usertype = localStorage.getItem("usertype");

function TestComponent(props) {
  const navigate = useNavigate();
  const [renderText, setRenderText] = useState("");
  const [renderExam, setRenderExam] = useState("");

  useEffect(() => {
    if (usertype === "proctor") {
      setRenderText("Student : ");
      setRenderExam("Proctor Exam");
    } else {
      setRenderText("Proctor : ");
      setRenderExam("Start Exam");
    }
  }, []);

  const handleButtonClick = () => {
    if (usertype === "proctor") {
      navigate("/proctorpage");
    } else {
      navigate("/confirm");
    }
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
          {renderText}
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
          {renderExam}
        </button>
      </div>
    </div>
  );
}

export default TestComponent;
