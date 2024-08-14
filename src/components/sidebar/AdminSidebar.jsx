
import Sidebar from "./Sidebar";
import { FaCog, FaTag, FaUser } from "react-icons/fa";

export default function AdminSidebar() {
  const adminRoutes = [
   
    {
      name: "Products",
      path: "/dashboard/admin/products",
      icon: <FaUser className="text-[20px]" />,
    },
    {
      name: "Settings",
      path: "/dashboard/admin/settings",
      icon: <FaCog className="text-[20px]" />,
    },
    {
      name: "User",
      path: "/dashboard/admin/usermanagement",
      icon: <FaTag className="text-[20px]" />,
    },
  ];
  return <Sidebar routes={adminRoutes} title="Admin" />;
}