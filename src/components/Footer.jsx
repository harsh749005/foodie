import React from 'react'
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className='flex-col gap-5 md:gap-0 mt-10 flex md:flex-row items-start justify-between bg-zinc-900 h-max p-14'>
      <div className='flex flex-col gap-5'>
        <div className='w-24 md:w-36 lg:w-44'>
        <img className='w-full' src={assets.logo} alt="" />
        </div>
        <p className='text-white w-full md:w-[650px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit tenetur maxime sapiente ad libero, dolorem vel necessitatibus doloremque at amet. Soluta provident beatae aperiam deserunt vero quibusdam aspernatur magni ea.
</p>
        <div className='flex items-center gap-5'>
            <a className='cursor-pointer w-9 md:w-11' href=''><img src={assets.facebook_icon} alt="" /></a>
            <a className='cursor-pointer w-9 md:w-11' href=''><img src={assets.twitter_icon} alt="" /></a>
            <a className='cursor-pointer w-9 md:w-11' href=''><img src={assets.linkedin_icon} alt="" /></a>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className=' text-white font-bold text-2xl '>COMPANY</h1>
        <ul className='flex flex-col gap-2'>
          <li className=' list-none'><a className=' cursor-pointer text-white'>Home</a></li>
          <li className=' list-none'><a className=' cursor-pointer text-white'>About us</a></li>
          <li className=' list-none'><a className=' cursor-pointer text-white'>Delivery</a></li>
          <li className=' list-none'><a className=' cursor-pointer text-white'>Privacy policy</a></li>
        </ul>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-white font-bold text-2xl'>GET IN TOUCH</h1>
        <div className='flex flex-col gap-2'>
            <p className='text-white cursor-pointer'>+123 456 7890</p>
            <p className='text-white cursor-pointer'>Email: info@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
