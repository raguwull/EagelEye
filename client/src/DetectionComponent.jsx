import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import Swal from "sweetalert2";

function DetectionComponent() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [warningCount, setWarningCount] = useState(0);

  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo();
    videoRef && loadModels();

    return () => {
      stopVideo();
    };
  }, []);

  // OPEN YOU FACE WEBCAM
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // STOP VIDEO STREAM
  const stopVideo = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  // LOAD MODELS FROM FACE API
  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const numberOfPersons = detections.length;

      if (numberOfPersons === 0) {
        Swal.fire("Please don't move away from the camera view");
        setWarningCount((prevCount) => prevCount + 1);
      } else if (numberOfPersons > 1) {
        Swal.fire("More than one person detected");
        setWarningCount((prevCount) => prevCount + 1);
      } else {
        // Reset warning count if no warnings
        setWarningCount(0);
      }

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: 470,
        height: 375,
      });

      const resized = faceapi.resizeResults(detections, {
        width: 470,
        height: 375,
      });

      faceapi.draw.drawDetections(canvasRef.current, resized);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    }, 1000);
  };

  return (
    <div className="justify-content-center align-items-center position-relative">
      <div>
        <video
          crossOrigin="anonymous"
          ref={videoRef}
          width={470}
          height={375}
          autoPlay
        ></video>
      </div>
      <div>
        <canvas
          ref={canvasRef}
          className="position-absolute"
          style={{ top: 0, left: 0 }}
        />
      </div>
    </div>
  );
}

export default DetectionComponent;
