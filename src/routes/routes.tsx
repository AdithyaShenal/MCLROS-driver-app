import { createBrowserRouter } from "react-router-dom";

// Components & Pages
import Layout from "../components/Layout";
import LoginUI from "../pages/LoginUI";

// Protected Pages
import MyRoutesUI from "../pages/MyRoutesUI";
import RegisterFarmerUI from "../pages/RegisterFarmerUI";
import ActiveRouteUI from "../pages/ActiveRouteUI";
import PickupConfirmUI from "../pages/PickupConfirmUI";
import PickupList from "../pages/PickupList";
import FullMapUI from "../pages/FullMapUI";
import CompletedRoutesUI from "../pages/CompletedRoutesUI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginUI />,
      },
      { path: "/myroutes", element: <MyRoutesUI /> },
      { path: "/register_farmer", element: <RegisterFarmerUI /> },
      { path: "/active_route/:route_id", element: <ActiveRouteUI /> },
      { path: "/confirm_pickup", element: <PickupConfirmUI /> },
      { path: "/completed_routes", element: <CompletedRoutesUI /> },
      { path: "/pickup_list", element: <PickupList /> },
      { path: "/map_view", element: <FullMapUI /> },
    ],
  },
]);

export default router;
