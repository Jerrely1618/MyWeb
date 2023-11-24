import HomePage from "./src/routes/home/home";
import ComputerPage from "./src/routes/comsci";
import LoginPage from "./src/routes/login/login";

import { createHashRouter } from "react-router-dom";

export const appRoutes = [
  {
    path: "/MyWeb/app",
    name: "Home",
    element: <HomePage />,
  },
];

export const router = createHashRouter([
  { path: "/MyWeb/", element: <HomePage /> },
  { path: "/MyWeb/com", element: <ComputerPage /> },
  { path: "/MyWeb/logindev", element: <LoginPage /> },
]);
