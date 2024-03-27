import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddJob from "../Pages/AddJob";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../Pages/AllJobs";
import MyJobs from "../Pages/MyJobs";
import SingleJob from "../Pages/SingleJob";

const router = createBrowserRouter([
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
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/allJobs",
        element: (
          <PrivateRoute>
            <AllJobs></AllJobs>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://job-portal-api-rose.vercel.app/allJobs"),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/singleJob",
        element: <SingleJob></SingleJob>,
      },
    ],
  },
]);

export default router;
