import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import User from "./pages/Users";
import GlobalStyle from "./styles/globalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <User />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
    <GlobalStyle />
  </>
);
