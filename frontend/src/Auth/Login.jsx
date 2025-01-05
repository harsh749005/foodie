import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;
      axios.post('http://localhost:8081/login',{email:email,password:password})
      .then((response) => {
        if (response.data === 'Invalid credentials') {
          toast.error("Invalid credentials");
          console.log(response);
        }
        else {
          toast.success("Logged in successfully");
          setEmail('');
          setPassword('');
          navigate('/foodie/');
        }
      }).catch((err) => {
        console.error('Error fetching data: ', err);
      })
  }
 

  return (
    <div className="flex flex-col gap-10 bg-white w-[90%] xl:w-[70%] p-8 m-[auto] rounded-lg md:border-2 md:border-slate-400 md:mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium">Login</h2>
        {/* <img src={assets.cross_icon} alt="" className='w-4 h-4 cursor-pointer md:hidden'/> */}
      </div>
      <form onSubmit={handleForm}>
      <div className="flex flex-col gap-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 placeholder:pl-5"
          placeholder="Your Name"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 placeholder:pl-5"
          placeholder="Your Password"
          required
        />
        <button type="submit" className="bg-red-500 h-12 rounded text-white text-[20px] font-medium cursor-pointer">
          Login
        </button>
      </div>
      <div className="flex items-baseline gap-2 ">
        <input
          type="checkbox"
          name="terms"
          value="terms"
          className="cursor-pointer"
        />
        <p>By clicking you are accepting our Tearms and Conditions</p>
      </div>
      <p>
        Create New account ?
        <Link to="/foodie/register" className="text-red-600 font-medium">
          Click here
        </Link>
      </p>
      </form>
    </div>
  );
};

export default Login;
