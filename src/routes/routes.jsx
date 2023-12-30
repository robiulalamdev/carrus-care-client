import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/registration/Registration";
import DashboardPage from "../pages/dashboard/DashboardPage";
import RegistrationDetails from "../pages/dashboard/registrationDetails/RegistrationDetails";

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
    path: "/dashboard/:id",
    element: <RegistrationDetails />,
  },
]);
