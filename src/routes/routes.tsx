import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MyRoutesUI from "../pages/MyRoutesUI";
import LoginUI from "../pages/loginUI";

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
