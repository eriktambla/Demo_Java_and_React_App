import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import SignUp from "./pages/signup/SignUp.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Login from "./pages/login/Login.tsx";
import Sectors from "./pages/sectors/Sectors.tsx";
import { PublicRoute } from "./components/PublicRoute.tsx";
import Home from "./pages/home/Home.tsx";

export const ROUTES: RouteObject[] = [
	{
		element: <PublicRoute />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/login", element: <Login /> },
		],
	},
	{
		element: <PrivateRoute />,
		children: [
			{
				path: "/user/:userId/sectors",
				element: <Sectors />,
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
];
