import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MyRoutesUI from "../pages/MyRoutesUI";
import LoginUI from "../pages/loginUI";
import RegisterFarmerUI from "../pages/RegisterFarmerUI";
import ActiveRouteUI from "../pages/ActiveRouteUI";
import PickupConfirmUI from "../pages/PickupConfirmUI";
import PickupList from "../pages/PickupList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LoginUI /> },
      { path: "/myroutes", element: <MyRoutesUI /> },
      { path: "/register_farmer", element: <RegisterFarmerUI /> },
      { path: "/active_route", element: <ActiveRouteUI /> },
      { path: "/confirm_pickup", element: <PickupConfirmUI /> },
      { path: "/pickup_list", element: <PickupList /> },
    ],
  },
]);

export default router;
