import HomePage from "../routes/home";
import ComputerPage from "../routes/comsci";
import { createBrowserRouter } from "react-router-dom";

export const appRoutes = [
  {
    path: "/app",
    name: "Home",
    element: <HomePage />,
  },
];

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/com", element: <ComputerPage /> },
]);
