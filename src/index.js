import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main";
import Results, { loader as resultLoader } from "./pages/Results";
import Watch, { loader as watchLoader } from "./pages/Watch";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Results />, loader: resultLoader },
      {
        path: "Results/:search",
        element: <Results />,
        loader: resultLoader,
      },
      {
        path: "Watch/:v",
        element: <Watch />,
        loader: watchLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
