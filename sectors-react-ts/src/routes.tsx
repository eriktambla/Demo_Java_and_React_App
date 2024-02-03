import {RouteObject} from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute.tsx";
import Home from "./pages/home/Home.tsx";
import SignUp from "./pages/signup/SignUp.tsx";
import ErrorPage from "./components/ErrorPage.tsx";

/* TODO: PublicRoute */
export const ROUTES: RouteObject[] = [
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/user/:userId',
        element: <PrivateRoute/>,
        children: [
            {
                path: '/user/:userId/sectors',
                element: <div>Hello to sectors</div>,
            }
        ]
    }
]