import React from 'react'
import { FaBox, FaCog, FaHome, FaTag, FaUser } from 'react-icons/fa';
import Sidebar from './Sidebar';

export default function DriverSidebar() {
    const driverRoutes = [
        { name: "Driver", path: "/dashboard/driver", icon: <FaHome className="text-[23px]" /> },
        {
          name: "History",
          path: "/dashboard/driver/history",
          icon: <FaUser className="text-[23px]" />,
        },
        {
          name: "Location",
          path: "/dashboard/driver/location",
          icon: <FaCog className="text-[23px]" />,
        },
        {
          name: "Schedule",
          path: "/dashboard/driver/schedule",
          icon: <FaTag className="text-[23px]" />,
        },
        {
          name: "Support",
          path: "/dashboard/driver/support",
          icon: <FaBox className="text-[23px]" />,
        },
      ];
  return (
    <Sidebar routes={driverRoutes} title="Driver"/>
  )
}
