import React from "react";
import ReactDOM from "react-dom/client";
import "/public/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app.jsx";
import { Analytics } from "@vercel/analytics/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </React.StrictMode>
);
