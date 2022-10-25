import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import Signup from "../../components/Authentication/Signup/Signup";
import CourseHome from "../../components/CoursePage/CourseHome/CourseHome";
import CourseOutlet from "../../Layout/CourseOutlet";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
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
      
    ],
  },
]);