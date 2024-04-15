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

  useEffect(() => {
    startVideo();
    loadModels();

    return () => {
      stopVideo();
    };
  }, []);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopVideo = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);
      faceMyDetect();
    } catch (error) {
      console.error("Error loading models:", error);
    }
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      try {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions();

        const numberOfPersons = detections.length;

        if (numberOfPersons === 0 || numberOfPersons > 1) {
          setWarningCount((prevCount) => prevCount + 1);
          Swal.fire("More than one person");
        } else {
          setWarningCount(0);
        }

        const displaySize = { width: width1, height: height1 };
        faceapi.matchDimensions(canvasRef.current, displaySize);

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        canvasRef.current.getContext("2d").clearRect(0, 0, width1, height1);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
      } catch (error) {
        console.error("Error detecting faces:", error);
      }
    }, 1000);
  };

  useEffect(() => {
    if (warningCount >= 2) {
      Swal.fire("Please stay in the camera view");
    }
  }, [warningCount]);

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        style={{ width: "100%", height: "auto" }}
      ></video>
      <canvas
        ref={canvasRef}
        style={{
          display: "",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></canvas>
      <div
        className="bg-warning px-2 text-center rounded"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Warnings - <span>{warningCount} </span>
      </div>
    </div>
  );
}

export default DetectionComponent;
