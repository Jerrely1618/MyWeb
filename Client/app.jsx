import HomePage from "./src/routes/home";
import ComputerPage from "./src/routes/comsci";
import LoginPage from "./src/routes/login";

import { createBrowserRouter } from "react-router-dom";

export const appRoutes = [
  {
    path: "/MyWeb/app",
    name: "Home",
    element: <HomePage />,
  },
];

export const router = createBrowserRouter([
  { path: "/MyWeb/", element: <HomePage /> },
  { path: "/MyWeb/com", element: <ComputerPage /> },
  { path: "/MyWeb/logindev", element: <LoginPage /> },
]);
