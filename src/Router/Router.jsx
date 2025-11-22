import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SignUp from "../Pages/SignUp";

export const Router = createBrowserRouter([
   {
      path: "/",
      Component: Layout,
      children: [
         {index: true, Component: Home},
         {path: "/login", Component: Login},
         {path: "//sign-up", Component: SignUp},
      ]
   }
])