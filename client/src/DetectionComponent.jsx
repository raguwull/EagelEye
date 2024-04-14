import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import Swal from "sweetalert2";

function DetectionComponent() {
  const width1 = 285;
  const height1 = 197.5;
  const videoRef = useRef();
  const canvasRef = useRef();
  const [warningCount, setWarningCount] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        Swal.fire("Tab switched or minimized");
        setWarningCount((prevCount) => prevCount + 1);
      } else {
        console.log("Tab active");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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

      if (numberOfPersons === 0 || numberOfPersons > 1) {
        setWarningCount((prevCount) => prevCount + 1);
      } else {
        setWarningCount(0);
      }

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: width1,
        height: height1,
      });

      const resized = faceapi.resizeResults(detections, {
        width: width1,
        height: height1,
      });

      faceapi.draw.drawDetections(canvasRef.current, resized);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    }, 1000);
  };

  // Watch for changes in warningCount and trigger alert
  useEffect(() => {
    if (warningCount >= 2) {
      Swal.fire("Please stay in the Camera View");
    }
  }, [warningCount]);

  return (
    <div style={{ position: "relative" }}>
      <video
        crossOrigin="anonymous"
        ref={videoRef}
        autoPlay
        style={{ width: "100%", height: "auto" }}
      ></video>
      <canvas
        ref={canvasRef}
        style={{
          display: "none",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div className="bg-warning px-2 text-center rounded">
        Warnings - <span>{warningCount} </span>
      </div>
    </div>
  );
}

export default DetectionComponent;
