// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Dashboard() {
  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
    { id: 6, title: "Card 6" },
    { id: 7, title: "Card 7" },
    { id: 8, title: "Card 8" },
  ];

  return (
    <div className="w-full ">
      <div className="flex items-center justify-between border-b-[1px] pb-4 border-[#cfb7b7]">
        <div className="text-button">
          <h2 className="text-left font-bold text-[20px] text-[darkslateblue]">
            Report
          </h2>
          <p className="text-left font-medium text-[grey]">
            Lorem, ipsum dolor.
          </p>
        </div>
        <button className="flex rounded-[5px] items-center justify-center p-2 bg-[darkslateblue]">
          <FaPlus className="text-white" />
        </button>
      </div>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 w-full py-10">
        {cards &&
          cards?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-4 relative !z-[10]   "
            >
              <div className="flex justify-between items-center mb-4">
                <div className="bg-blue-500 p-6 rounded-full text-white absolute top-[-20px]  "></div>
              </div>
              <h2 className="text-left  font-bold text-base sm:text-lg">App Development</h2>
              <h3 className="text-lg text-left font-semibold mb-2">Title</h3>
              <div className="text-gray-400 text-sm text-left">3 Weeks Left</div>
                <hr className="mt-2"/>
            
            </div>
          ))}
      </div>
    </div>
  );
}
