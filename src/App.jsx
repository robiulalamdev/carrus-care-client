import React from "react";
import Registration from "./pages/registration/Registration";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
