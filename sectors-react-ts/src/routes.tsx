import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import Home from "./pages/home/Home.tsx";
import SignUp from "./pages/signup/SignUp.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Login from "./pages/login/Login.tsx";
import Sectors from "./pages/sectors/Sectors.tsx";

/* TODO: PublicRoute */
export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user/:userId",
    element: <PrivateRoute />,
    children: [
      {
        path: "/user/:userId/sectors",
        element: <Sectors />,
      },
    ],
  },
];

