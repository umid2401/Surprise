
import { FaBox, FaCog, FaHome, FaTag } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import Sidebar from './Sidebar';

export default function OwnerSidebar() {
    const ownerRoutes = [
        { name: "Booking", path: "/dashboard/owner/earnings", icon: <FaHome className="text-[23px]" /> },
        {
          name: "Earnings",
          path: "/dashboard/owner/earn",
          icon: <FaMapLocation className="text-[23px]" />,
        },
        {
          name: "Driver",
          path: "/dashboard/owner/driver",
          icon: <FaCog className="text-[23px]" />,
        },
        {
          name: "Reports",
          path: "/dashboard/owner/reports",
          icon: <FaTag className="text-[23px]" />,
        },
        {
          name: "Products",
          path: "/products",
          icon: <FaBox className="text-[23px]" />,
        },
      ];
  return (
    <Sidebar routes={ownerRoutes} title="Owner"/>
  )
}
