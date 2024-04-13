import React from "react";

function TestComponent(props) {
  return (
    <div className="w-100 bg-white p-2 rounded">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between rounded">
          <div className="text-left p-2">
            <span className="text-dark">
              <strong>{props.exam_name}</strong>
            </span>
          </div>
          <div className="text-right p-2">
            Proctor:{" "}
            <span className="text-secondary">{props.proctor_name}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-start p-2">
            Start time:{" "}
            <span className="text-secondary">{props.start_time}</span>
          </div>
          <div className="text-end p-2">
            Duration:{" "}
            <span className="text-secondary">{props.exam_duration}</span>hrs
          </div>
        </div>
        <div className="p-2 text-start">
          Exam link: <a href={props.exam_url}>click here to attempt test</a>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
