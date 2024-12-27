import React from 'react'
import '../styles/HamburgerMenu.css'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
const HamburgerMenu = ({closeMenu}) => {
  
  return (
    <div className=' absolute sm:left-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-10 w-72  p-5 md:hidden h-max  items-center flex flex-col gap-5  rounded-lg border-2  '>
    <div className=' w-full flex justify-end pr-5 p-2 mt-2'>
        <img onClick={closeMenu} src={assets.cross_icon} alt="" className='cursor-pointer'/>
    </div>
      <ul className="w-full flex flex-col gap-5 justify-between items-center lg:text-xl font-medium ">
            <li   className='hamburgerMenuLi rounded  w-full p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <Link
              
                to="/foodie/"
                className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li  className='w-full hamburgerMenuLi rounded   p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <Link
                to="/foodie/about"
                 className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                About
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <Link
                to="/foodie/menu"
                 className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                Menu
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <Link
                to="/foodie/contact"
                 className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                Conatct
              </Link>
            </li>
          </ul>
          <Link to="/foodie/register"  className='rounded md:hidden bg-orange-500 p-2 w-full  text-white font-medium text-lg mb-10'>
          <button className="rounded md:hidden bg-orange-500 w-full  text-white font-medium text-lg ">
            Sign In
          </button>
          </Link>
    </div>
  )
}

export default HamburgerMenu
