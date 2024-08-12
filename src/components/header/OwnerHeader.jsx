import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { toogleSidebar } from '../../features/slice/toogleSidebar';

export default function OwnerHeader() {
    const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state)=>state.sidebar.count);
  return (
    <div className="w-full  ">
      <div className="flex justify-between items-center bg-white py-8 px-4 shadow-md">
        <div onClick={()=>dispatch(toogleSidebar())} className="menu flex gap-x-2  items-center font-medium text-[darkslateblue] ">
          <FaBars  className="cursor-pointer text-[26px]" />
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for something"
            className="border p-2 rounded-lg mr-4"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
