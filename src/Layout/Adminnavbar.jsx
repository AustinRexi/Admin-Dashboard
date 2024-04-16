import HomeIcon from "../assets/HomeIcon.svg";
import Navbellicon from "./Notifictions/Navbellicon";
import Navdropdown from "./Notifictions/Navdropdown";
import Navimage from "./Notifictions/Navimage";
import { useLocation } from "react-router-dom";

function Adminnavbar() {
  const location = useLocation();

  const currentPage = location.pathname
    .slice(1, location.pathname.length)
    .toUpperCase();

  return (
    <nav className="flex bg-white w-full ms-1 mt-3 sticky top-0 left-0 z-50 py-6 px-8">
      <h4 className="text-lg font-bold">
        {currentPage}
        <img src={HomeIcon} alt="home" className="mt-4" />
      </h4>

      <div className="ml-auto flex">
        <div className="gap-x-4 list-none items-center flex text-sm">
          <Navdropdown /> <Navbellicon /> <Navimage />
        </div>
      </div>
    </nav>
  );
}

export default Adminnavbar;
