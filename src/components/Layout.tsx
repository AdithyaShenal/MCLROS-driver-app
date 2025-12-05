import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
