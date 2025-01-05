import React, { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({toggleMenu}) => {

  const [isAuth,setisAuth] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then((response)=>{
      if (response.data.email === '') {
          setisAuth(false);
        } else {
          setisAuth(true); 
          console.log({page:"navbar",serverResponse:response.data});
        }
    }).catch((error)=>{
      console.log(error);
    });
  },[])

  return (
    
      <div className=" pt-5 pb-5 flex justify-between items-center w-[90%] xl:w-[70%] m-auto">
        <div className="w-24 md:w-36 lg:w-44">
          <img className="w-full" src={assets.logo} alt="" />
        </div>
        <div className="hidden lg:block">
          <ul className="  flex gap-5 justify-between items-center lg:text-xl font-medium ">
            <li>
              <Link
                to="/foodie/"
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/foodie/about"
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/foodie/contact"
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/foodie/Orders"
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                Orders
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="flex justify-between items-center gap-2 md:gap-5">
          <img src={assets.search_icon} alt="" className="hidden lg:block w-5 h-5 cursor-pointer"/>
          <Link to="/foodie/Cart" className="hidden md:block"><img src={assets.basket_icon} alt="" className=" md:w-5 md:h-5 "/></Link>
          <Link to="/foodie/Cart" className="md:hidden"><img src={assets.md_basket_icon} alt="" className="w-5 h-5 "/></Link>
          {
            isAuth ?(
              <Link to="/foodie/logout">
          <button className="hidden md:block md:w-24 lg:w-28 border-2 border-slate-400 text-slate-500 rounded-full p-2 lg:text-lg hover:text-slate-700 hover:border-slate-700">
            Logout
          </button>
          
          </Link>
            ):(
              <>
              <Link to="/foodie/register">
          <button className="hidden md:block md:w-24 lg:w-28 border-2 border-slate-400 text-slate-500 rounded-full p-2 lg:text-lg hover:text-slate-700 hover:border-slate-700">
            Sign In
          </button>
          
          </Link>
          <Link to="/foodie/login">
          <button className="hidden md:block md:w-24 lg:w-28 border-2 border-slate-400 text-slate-500 rounded-full p-2 lg:text-lg hover:text-slate-700 hover:border-slate-700">
            Login
          </button>
          
          </Link>
              </>
            )
          }
          
         
          
          
          <img onClick={toggleMenu} src={assets.hamburger_icon} alt="menu" className="w-8 md:w-9 lg:hidden " />
          
        </div>
        
      </div>
   
  );
};

export default Navbar;
