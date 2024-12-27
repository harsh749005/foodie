import React from 'react'
import { assets} from '../assets/frontend_assets/assets'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='flex flex-col gap-10 bg-white w-96 p-8 m-[auto] rounded-lg md:border-2 md:border-slate-400 md:mt-10'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-medium'>Login</h2>
        <img src={assets.cross_icon} alt="" className='w-4 h-4 cursor-pointer md:hidden'/>
      </div>
      <div className='flex flex-col gap-4'>
        <input type="email" className='text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 placeholder:pl-5' placeholder='Your Name'/>
        <input type="password" className='text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 placeholder:pl-5' placeholder='Your Password'/>
        <button className='bg-red-500 h-12 rounded text-white text-[20px] font-medium cursor-pointer' >Login</button>
      </div>
      <div className='flex items-baseline gap-2 '>
      <input type="checkbox" name="terms" value="terms"/>
        <p>By clicking you are accepting our Tearms and Conditions</p>
      </div>
      <p>Create New account ? <Link to="/foodie/register" className='text-red-600 font-medium'>Click here</Link></p>
    </div>
  )
}

export default Login
