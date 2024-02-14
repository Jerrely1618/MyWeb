import HomePage from "./src/routes/home/home";
import ComputerPage from "./src/routes/comsci";
import LoginPage from "./src/routes/login/login";
import ElectronicsPage from "./src/routes/electronics.jsx";

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
  { path: "/cs", element: <ComputerPage /> },
  { path: "/logindev", element: <LoginPage /> },
  { path: "/ee", element: <ElectronicsPage /> },
]);
