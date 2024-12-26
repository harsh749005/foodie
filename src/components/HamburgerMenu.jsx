import React from 'react'
import '../styles/HamburgerMenu.css'
import { assets } from '../assets/frontend_assets/assets'
const HamburgerMenu = ({closeMenu}) => {
  return (
    <div className=' absolute sm:left-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-10 w-72  p-5 md:hidden h-max  items-center flex flex-col gap-5  rounded-lg border-2  '>
    <div className=' w-full flex justify-end pr-5 p-2 mt-2'>
        <img onClick={closeMenu} src={assets.cross_icon} alt="" className='cursor-pointer'/>
    </div>
      <ul className="w-full flex flex-col gap-5 justify-between items-center lg:text-xl font-medium ">
            <li   className='hamburgerMenuLi w-full p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <a
              
                href=""
                className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                Home
              </a>
            </li>
            <li  className='w-full hamburgerMenuLi  p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <a
                href=""
                 className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                About
              </a>
            </li>
            <li  className='hamburgerMenuLi w-full p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <a
                href=""
                 className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                Menu
              </a>
            </li>
            <li  className='hamburgerMenuLi w-full  p-2 text-center hover:bg-orange-500  cursor-pointer'>
              <a
                href=""
                 className="hamburgerMenua cursor-pointer text-slate-500 hover:text-white"
              >
                Conatct
              </a>
            </li>
          </ul>
          <button className=" md:hidden bg-orange-500 p-2 w-full  text-white font-medium text-lg mb-10">
            Sign In
          </button>
    </div>
  )
}

export default HamburgerMenu
