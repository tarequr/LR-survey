import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Dashboard from "./view/Dashboard";
import Surveys from "./view/Surveys";
import Login from "./view/Login";
import Signup from "./view/Signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/surveys',
    element: <Surveys />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

export default router;
