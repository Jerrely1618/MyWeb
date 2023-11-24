import React from "react";
import ReactDOM from "react-dom/client";
import "/public/index.css";
import { RouterProvider, HashRouter } from "react-router-dom"; // Import HashRouter
import { router } from "./app.jsx";
import HomePage from "./src/routes/home/home";
import ComputerPage from "./src/routes/comsci";
import LoginPage from "./src/routes/login/login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <HashRouter>
        <HomePage />
        <ComputerPage />
        <LoginPage />
      </HashRouter>
    </RouterProvider>
  </React.StrictMode>
);
