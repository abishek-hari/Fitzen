import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About, ExerciseDetail, Home, WorkOut } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "exercise/:exeId",
    element: <ExerciseDetail />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "workout",
    element: <WorkOut />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
