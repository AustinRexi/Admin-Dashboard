import { Outlet } from "react-router-dom";
import Adminnavbar from "./Adminnavbar";
import Sidebar from "../Sidebar";

function Layout() {
  return (
    <nav className="flex flex-col gap-6 bg-dark-50 text-dark-700 h-screen w-screen ">
      <Sidebar />
      <div className="pl-52">
        <Adminnavbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </nav>
  );
}

export default Layout;
