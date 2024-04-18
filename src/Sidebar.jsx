import { NavLink } from "react-router-dom";
import Logo from "../src/assets/Logo.svg";
import Dash from "../src/assets/Dash.svg";
import Settings from "../src/assets/Settings.svg";
import Customer from "../src/assets/Customer.svg";
import support from "../src/assets/Support.svg";
import Logout from "../src/assets/Logout.svg";
import "primeicons/primeicons.css";

import Gift from "../src/assets/Gift.svg";
import Order from "../src/assets/Order.svg";
import Inventory from "../src/assets/Inventory.svg";
import Conversation from "../src/assets/Conversation.svg";

function Sidebar() {
  const links = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: Dash,
    },
    {
      title: "Orders",
      to: null,
      icon: Order,
    },
    {
      title: "Customers",
      to: "/Customer",
      icon: Customer,
    },
    {
      title: "Inventory",
      to: null,
      icon: Inventory,
    },
    {
      title: "Conversations",
      to: "/Conversations",
      icon: Conversation,
    },
    {
      title: "Settings",
      to: null,
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed z-50  left-0 top-0 bottom-0 bg-white flex flex-col mt-2 ">
      <header className="py-6  flex">
        <img src={Logo} alt=""></img>{" "}
        <p className="font-bold ... mt-2">
          <a
            href="/"
            className=" hover:font-bold text-decoration-line text-black"
          >
            Metrix
          </a>
        </p>
      </header>

      <div className="flex flex-col gap-1  w-52 ">
        {/* eslint-disable-next-line no-unused-vars */}
        {links.map((el, index) => (
          <NavLink
            key={el.title}
            to={el.to}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-light hover:text-primary font-serif text-sm p-3 bg-primary-light border-l-4 border-primary"
                : " text-sm p-3 text-gray-800 font-serif hover:text-gray-800"
            }
          >
            <div className="flex items-center  gap-4">
              <img src={el.icon} alt="" className="" />

              <p>{el.title}</p>
            </div>
          </NavLink>
        ))}
        <NavLink
          to={null}
          className={({ isActive }) =>
            isActive
              ? "text-primary hover:text-primary text-sm p-3 bg-primary-light border-l-4 border-primary"
              : " text-sm p-3 text-gray-800 hover:text-gray-800"
          }
        >
          <div className="flex items-center gap-4 mt-16">
            <div className="bg-zinc-200 w-64 h-10 shadow-md rounded-lg  text-black  relative flex gap-x-2 pl-2">
              <img src={support} alt="" className="py-2" />
              <p className="mt-3"> Contact Support</p>
            </div>
          </div>
        </NavLink>

        <div className="bg-amber-50 w-42 h-16 shadow-md rounded-lg  text-black  ms-2   mx-1">
          <p className="mt-3 ms-2 flex  gap-x-1">
            {" "}
            <img src={Gift} alt="" className="" />
            Free Gift Awaits You!
          </p>
          <p className="text-sm mt-1 ms-8">
            Upgrade your account <i className="pi pi-angle-right"></i>
          </p>
        </div>
        <div className="ms-4 mt-2 flex">
          <img src={Logout} alt="" />
          <p className="text-red-500">Logout</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
