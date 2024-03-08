import {Navigate, createBrowserRouter} from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Surveys from "./view/Surveys";
import Login from "./view/Login";
import Signup from "./view/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate to='/' />
      },
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/surveys',
        element: <Surveys />
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
]);

export default router;
