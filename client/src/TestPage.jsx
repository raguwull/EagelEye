import React from "react";
import DetectionComponent from "./DetectionComponent";
import { useNavigate } from "react-router-dom";
import ChatComponent from "./ChatComponent";

function TestPage() {
  const navigate = useNavigate();
  const handleTestExit = () => {
    navigate("/studenthome");
  };

  return (
    <div className="d-flex flex-column justify-content-between pt-5 px-5 vh-100">
      <div className="d-flex flex-row gap-3 flex-grow-1 mb-4">
        <div className="bg-white w-25 p-2 rounded d-flex flex-column">
          <div className="row mb-2">
            <div className="col">
              <DetectionComponent />
            </div>
          </div>
          <div className="row rounded flex-grow-1 overflow-auto">
            <div className="col">
              <ChatComponent room={12} />
            </div>
          </div>
        </div>

        <div className="bg-white w-75 p-2 rounded">
          <iframe
            title="Google Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfjitEMYdiLxZ_YAHnDCdYdfWoIojGpuNm4yj9qIu0BPzQOPQ/viewform?usp=sf_link"
            width="100%"
            height="100%"
          >
            Loading...
          </iframe>
        </div>
      </div>
      <footer className="bg-dark p-2 mx-5 rounded">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto text-center">
              <button onClick={handleTestExit} className="btn btn-danger me-3">
                End Test
              </button>
              <button className="btn btn-secondary">Mute</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TestPage;
