import React, { useState, useEffect } from "react";
import handleLogout from "./handleLogout";
import { useNavigate } from "react-router-dom";
import TestComponent from "./TestComponent";
import axios from "axios";

function StudentHome() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [examDetails, setExamDetails] = useState([]);

  const handleLogoutFunction = () => {
    handleLogout();
    navigate("/");
  };

  useEffect(() => {
    getExamDetails();
  }, []);

  const getExamDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8081/studenthome/${username}/getexams`
      );
      if (res.data.message === "success") {
        setExamDetails(res.data.data);
        console.log("Exam Details: ", res.data.data);
      }
    } catch (error) {
      console.error("Error fetching exam details:", error);
    }
  };

  const renderTestComponents = () => {
    return examDetails.map((examDetail, index) => {
      const { exam_name, proctor_name, start_time, exam_duration, exam_url } =
        examDetail;
      const examDurationHours = exam_duration.hours;

      return (
        <div key={index} className="mb-3">
          <TestComponent
            exam_name={exam_name}
            proctor_name={proctor_name}
            start_time={start_time}
            exam_duration={examDurationHours}
            exam_url={exam_url}
          />
        </div>
      );
    });
  };

  return (
    <>
      <header className="position-fixed w-100 bg-dark text-white p-3">
        <div className="d-flex justify-content-end">
          <div>
            <button
              className="btn btn-danger px-2"
              onClick={handleLogoutFunction}
            >
              Log out
            </button>
          </div>
        </div>
      </header>
      <div className="bg-secondary vh-100 d-flex flex-col justify-content-center pt-5">
        <div className="w-75 rounded-3 mt-5">
          <div className="bg-white text-center p-2 rounded-3 mb-3">
            Welcome, <strong>{username}</strong> 👋
          </div>

          <div className="d-flex flex-col gap-2 justify-content-center align-items-center">
            <div className="text-center m-2">{renderTestComponents()}</div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default StudentHome;
