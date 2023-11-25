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
  { path: "/MyWeb/", element: <HomePage /> },
  { path: "/MyWeb/cs", element: <ComputerPage /> },
  { path: "/MyWeb/logindev", element: <LoginPage /> },
  { path: "/MyWeb/ee", element: <ElectronicsPage /> },
]);
