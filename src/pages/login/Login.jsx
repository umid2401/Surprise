
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaEye, FaEyeDropper, FaEyeSlash, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const login_state = {email:"",password:""};
  const [state, setState] = useState(login_state);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   setState(login_state);
   navigate("/dashboard/admin")
   
  };
  const handelChange = (e) =>{
  const  {name, value}=e.target;
    setState({...state, [name]:value})
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Email'
              name='email'
              value={state.email}
              onChange={handelChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword?"text":"password"}
              id="password"
              placeholder='********'
              name='password'
              value={state.password}
              onChange={handelChange}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className='absolute right-2 top-1/2 translate-y-1/2'>
                {showPassword?(<FaRegEyeSlash onClick={()=>setShowPassword(!showPassword)}/>):<FaRegEye onClick={()=>setShowPassword(!showPassword)}/>}
          
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
