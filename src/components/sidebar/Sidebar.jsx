import { FaBox, FaCog, FaGift, FaHome, FaReact, FaTag, FaTimes, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch} from "react-redux";
import {toogleSidebar} from "../../features/slice/toogleSidebar";
import { IoClose } from "react-icons/io5";

export default function Sidebar() {
  const dispatch = useDispatch();
  const routes = [
    { name: "Dashboard", path: "/", icon: <FaHome className="text-[23px]" /> },
    {
      name: "Accounts",
      path: "/accounts",
      icon: <FaUser className="text-[23px]" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog className="text-[23px]" />,
    },
    {
      name: "Categories",
      path: "/categories",
      icon: <FaTag className="text-[23px]" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <FaBox className="text-[23px]" />,
    },
  ];

  return (
    <div className="bg-white min-900:h-[100vh] min-300:h-[100%] min-300:w-[75%] min-900:w-full sticky top-0 left-0 py-8 px-4 border-r border-[lavender]">
      <div className="mini-header flex items-center justify-between">
      <h2 className="text-[28px] font-medium text-[darkslateblue] px-4  mb-6 flex items-center gap-x-2">
        <div>
          <FaGift className="sm:text-[30px]" />
        </div>
        <span>Surprise</span>
      </h2>
      <div onClick={()=>dispatch(toogleSidebar())} className="hidemenu mb-6 min-300:block min-900:hidden">
        <FaTimes className="text-[28px] text-[darkslateblue]" />
      </div>
      </div>
      
      <div className="links w-full flex flex-col gap-4 ">
        {routes &&
          routes?.map(({ name, path, icon }, index) => (
            <NavLink
              className={({ isActive }) =>
                `  font-medium hover:bg-[whitesmoke] px-11 rounded-[10px] items-center flex gap-x-4  text-[16px] leading-6 py-3 ${
                  isActive
                    ? "bg-[whitesmoke] text-blue-500 link"
                    : "border-transparent text-[darkgrey]"
                }`
              }
              key={index}
              to={path}
            >
              <div>{icon}</div>
              <span>{name}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
