import { FaBell, FaCog } from "react-icons/fa";

import ToogleButton from "./toogleButton/ToogleButton";

export default function Topbar() {
  return (
    <div className="w-full  ">
      <div className="flex justify-between items-center bg-white py-6 px-4 shadow-md">
        <ToogleButton />
        <div className="flex items-center space-x-4">
          <FaCog
            fontSize="24px"
            className="text-gray-500 cursor-pointer hover:text-gray-700"
          />
          <FaBell
            fontSize="24px"
            className="text-red-500 cursor-pointer hover:text-red-700"
          />

          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
