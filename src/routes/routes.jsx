import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/registration/Registration";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Test from "../pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
