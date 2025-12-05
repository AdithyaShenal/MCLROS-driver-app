import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import LoginUI from "../pages/loginUI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <LoginUI /> }],
  },
]);

export default router;
