import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./AuthenticationPages/Login.jsx";
import Signup from "./AuthenticationPages/Signup.jsx";
import ErrorElement from "./ErrorComponents/ErrorElement.jsx";
import Welcome from "./AuthenticationPages/Welcome.jsx";
import StudentHome from "./StudentComponents/StudentHome.jsx";
import ProctorHome from "./ProctorComponents/ProctorHome.jsx";
import CameraComponent from "./FaceDetectionComponents/CameraComponent.jsx";
import TestPage from "./StudentComponents/TestPage.jsx";
import ProctorPage from "./ProctorComponents/ProctorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/studenthome",
    element: <StudentHome />,
  },
  {
    path: "/proctorhome",
    element: <ProctorHome />,
  },
  {
    path: "/confirm",
    element: <CameraComponent />,
  },
  {
    path: "/testpage",
    element: <TestPage />,
  },
  {
    path: "/proctorpage",
    element: <ProctorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
