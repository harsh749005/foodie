import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({toggleMenu}) => {

  return (
    
      <div className=" pt-5 pb-5 flex justify-between items-center w-[90%] xl:w-[70%] m-auto">
        <div className="w-24 md:w-36 lg:w-44">
          <img className="w-full" src={assets.logo} alt="" />
        </div>
        <div className="hidden lg:block">
          <ul className="  flex gap-5 justify-between items-center lg:text-xl font-medium ">
            <li>
              <a
                href=""
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href=""
                className=" cursor-pointer text-slate-500 hover:text-slate-700"
              >
                Conatct
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-10">
          <a href="/cart"><img src={assets.search_icon} alt="" className="hidden lg:block"/></a>
          <img src={assets.basket_icon} alt="" className="w-5 md:w-6 lg:w-8 md:block"/>
          <button className="hidden md:block md:w-24 lg:w-28 border-2 border-slate-400 text-slate-500 rounded-full p-2 lg:text-lg hover:text-slate-700 hover:border-slate-700">
            Sign In
          </button>
          
          <img onClick={toggleMenu} src={assets.hamburger_icon} alt="menu" className="w-8 md:w-9 lg:hidden " />
          
        </div>
        
      </div>
   
  );
};

export default Navbar;
