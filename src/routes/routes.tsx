import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import LoginUI from "../pages/loginUI";
import MyRoutesUI from "../pages/MyRoutesUI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LoginUI /> },
      { path: "/myroutes", element: <MyRoutesUI /> },
    ],
  },
]);

export default router;
