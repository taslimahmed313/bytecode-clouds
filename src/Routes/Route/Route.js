import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import Signup from "../../components/Authentication/Signup/Signup";
import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CoursePage/CheckOut/CheckOut";
import CourseDetails from "../../components/CoursePage/CourseDetails/CourseDetails";
import CourseHome from "../../components/CoursePage/CourseHome/CourseHome";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import CourseOutlet from "../../Layout/CourseOutlet";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      }
    ],
  },
  {
    path: "/course",
    element: <CourseOutlet></CourseOutlet>,
    children: [
      {
        path: "/course",
        element: <CourseHome></CourseHome>,
        loader: () =>
          fetch("https://learning-bytecode-clouds-server.vercel.app/course"),
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://learning-bytecode-clouds-server.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/course/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learning-bytecode-clouds-server.vercel.app/course/checkout/${params.id}`
          ),
      },
    ],
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);