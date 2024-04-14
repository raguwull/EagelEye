import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ErrorElement from "./ErrorElement.jsx";
import Welcome from "./Welcome.jsx";
import StudentHome from "./StudentHome.jsx";
import ProctorHome from "./ProctorHome.jsx";
import CameraComponent from "./CameraComponent.jsx";
import TestPage from "./TestPage.jsx";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
