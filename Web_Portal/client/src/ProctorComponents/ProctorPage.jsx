import React from "react";
import { useNavigate } from "react-router-dom";
import ChatComponent from "../ChatComponents/ChatComponent.jsx";
import Webcam from "react-webcam";
import "./ProctorPage.css";

function ProctorPage() {
  const navigate = useNavigate();
  const handleTestExit = () => {
    navigate("/proctorhome");
  };

  return (
    <div className="d-flex flex-column justify-content-between pt-5 px-5 vh-100">
      <div className="d-flex flex-row justify-content-center">
        <div className="text-center bg-white rounded p-3">
          You are now watching <strong>{"ragul123"}</strong>'s screen
          <span className="bg-warning p-2 m-2 rounded">Warnings - {0}</span>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="webcam-container p-1 bg-white rounded">
              <Webcam />
            </div>
          </div>
          <div className="col-4">
            <div className="webcam-container p-1 bg-white rounded">
              <Webcam />
            </div>
          </div>
          <div className="col-4">
            <div className="webcam-container p-1 bg-white rounded">
              <Webcam />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center mx-5">
        <ChatComponent room={12} />
      </div>

      <footer className="bg-dark p-2 mx-8 rounded">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto text-center">
              <button onClick={handleTestExit} className="btn btn-danger me-3">
                Exit Proctoring
              </button>
              <button className="btn btn-secondary">Mute</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProctorPage;
