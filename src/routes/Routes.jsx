import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home";
import MyProfile from "../components/MyProfile";
import ExtraSection from "../components/ExtraSection";
import Login from "../components/Login";
import Register from "../components/Register";
import ServiceDetails from "../components/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import PrivateProfile from "./PrivateProfile";
import ResetPassword from "../components/ResetPassword";
import AllServices from "../components/AllServices";
import PrivateBlog from "../components/PrivateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>,
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateProfile>
            <MyProfile></MyProfile>,
          </PrivateProfile>
        ),
      },
      {
        path: "/extrasection",
        element: (
          <PrivateBlog>
            <ExtraSection></ExtraSection>
          </PrivateBlog>
        ),
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/resetpassword",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
