import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppStateProvider } from "./utils/AppStateContext";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/details/:countryName",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  </React.StrictMode>
);
