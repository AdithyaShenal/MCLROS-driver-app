import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MyRoutesUI from "../pages/MyRoutesUI";
import LoginUI from "../pages/loginUI";
import RegisterFarmerUI from "../pages/RegisterFarmerUI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LoginUI /> },
      { path: "/myroutes", element: <MyRoutesUI /> },
      { path: "/register_farmer", element: <RegisterFarmerUI /> },
    ],
  },
]);

export default router;
