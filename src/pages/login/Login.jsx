import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Parol ko'rsatish ikonkalari

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      {/* Chap tarafdagi rasm */}
      <div 
        className="w-1/2  h-screen hidden min-900:flex items-center justify-center bg-cover bg-[midnightblue] bg-center" 
      
      >
        <img className=' object-cover ' src="/src/assets/Images/loginimage.png" alt="err"/>
      </div>

      
      <div className="w-full min-900:w-1/2 flex flex-col items-center justify-center  bg-gray-50">
     
        
        <div className="max-w-md w-full bg-transparent sm:bg-white sm:shadow-lg  rounded-lg sm:p-8 px-4  space-y-6">
          <h2 className="text-[17px] text-[#646464] font-medium mb-4 text-center uppercase">Surprise Manager</h2>
          <form>
            <div className="mb-4 w-full">
              <label className="block mb-4 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-[5px] shadow-sm outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block mb-4 text-sm font-medium text-gray-700">Password</label>
              <div className='flex relative items-center justify-center'>

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className=" block w-full border border-gray-300 rounded-[5px] shadow-sm outline-none  focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
                required
              />
                 <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute  w-12 h-[100%] shadow-sm border border-gray-300 bg-white right-0 rounded-r-[5px]   flex items-center px-3 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash className="text-gray-500 text-[20px]" /> : <FaEye className="text-gray-500 text-[16px]" />}
              </button>
              </div>
           
            </div>
            <button
              type="submit"
              className="w-full bg-[midnightblue] text-white py-2  mt-6 px-4 rounded-[5px] shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-700">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
