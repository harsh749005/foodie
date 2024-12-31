import React from "react";
import { assets} from '../assets/frontend_assets/assets'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col gap-10 bg-white w-[90%] xl:w-[70%] p-8 m-[auto] rounded-lg md:border-2 md:border-slate-400 md:mt-10">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-medium">Create account</h2>
        
        {/* <img
          src={assets.cross_icon}
          alt=""
          className="w-4 h-4 cursor-pointer md:hidden"
        /> */}
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-3 "
          placeholder="Your Name"
        />
         <input
          type="email"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-3"
          placeholder="Your Email"
        />
        <input
          type="password"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-3 "
          placeholder="Your Password"
        />
        <button className="bg-red-500 h-12 rounded text-white text-[20px] font-medium cursor-pointer">
          Create account
        </button>
      </div>
      <div className="flex items-baseline gap-2 ">
        <input type="checkbox" name="terms" value="terms" className="cursor-pointer" />
        <p>By clicking you are accepting our Tearms and Conditions</p>
      </div>
      <p>
        Already have an account ?
        <Link to="/foodie/login" className="ml-2 text-red-600 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
