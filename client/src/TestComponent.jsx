import React from "react";

function TestComponent(props) {
  return (
    <div className="w-100 bg-white p-2 d-flex flex-col rounded">
      <div>
        <div className="d-flex flex-row justify-content-between align-items-between gap-4">
          <div className="text-start">
            <span className="text-dark">
              <strong>{props.exam_name}</strong>
            </span>
          </div>
          <div className="text-end">
            Proctor:{" "}
            <span className="text-secondary">{props.proctor_name}</span>
          </div>
        </div>
        <div className="d-flex flex-row gap-4 w-100">
          <div className="text-start">
            Start time:{" "}
            <span className="text-secondary">{props.start_time}</span>
          </div>
          <div className="text-end">
            Duration:{" "}
            <span className="text-secondary">{props.exam_duration}</span>hrs
          </div>
        </div>
        <div className="text-start">
          Exam link: <a href={props.exam_url}>click here to attempt test</a>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
