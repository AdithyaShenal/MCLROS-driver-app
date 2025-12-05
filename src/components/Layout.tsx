import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// Layout.jsx

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <NavBar />
      </div>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
