import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import Signup from "../../components/Authentication/Signup/Signup";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])