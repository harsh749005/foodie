import React from 'react'
import { Link } from 'react-router-dom'

const DeliveryInfo = () => {
    
  return (
    <div className="w-[90%] lg:w-[70%] m-auto flex flex-col mt-10 md:flex-row gap-12 md:mt-28" >
      <div className='w-full  bg-pink-00 flex flex-col gap-5'>
        <h1 className='font-medium text-2xl'>Delivery Information</h1>
        <div className='flex gap-2 flex-col md:flex md:flex-row'>
            <input type="text" name="name" className=' text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='Your Name' />
            <input type="text" name='surname' className='text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='Your surname'/>
        </div>
        <div className='flex flex-col md:gap-5 gap-2'>
        <input type="text" className='text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='Your email'/>
        <input type="text" className='text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='Your address'/>
        </div>
        <div className='flex gap-2 flex-col md:flex md:flex-row'>
            <input type="text" name='city' className='text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='city'/>
            <input type="text" name='state' className='text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='state'/>
        </div>
        <div className='flex flex-col gap-2'>
            <input type="text" name='pincode'className='w-max text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='pincode'/>
            <input type="text" name='number'className='w-full text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-5 ' placeholder='number'/>
        </div>

      </div>
    
        <div className='w-full md:w-1/2 flex flex-col gap-4 lg:gap-8 '>
        <h2 className='text-lg lg:text-2xl font-semibold '>Cart Totals</h2>
        <div className='flex flex-col gap-4 lg:gap-6'>
            <div className='flex justify-between items-center text-sm lg:text-lg'>
                <p className='text-gray-600 '>Subtotal : </p>
                <p className='text-gray-600 '>$5</p>
            </div>
            <hr />
            <div className='flex justify-between items-center  text-sm lg:text-lg'>
                <p className='text-gray-600 '>Delivery Fee : </p>
                <p className='text-gray-600 '>$4</p>
            </div>
            <hr />
            <div className='flex justify-between items-center  text-md lg:text-lg'>
                <p className='text-black font-bold  '>Total : </p>
                <p className='text-black font-bold  '>$9</p>
            </div>
        </div>
        <Link to='/foodie/payment' className='md:mt-0 mb-5'>
        <button className=' w-full md:w-80 text-sm p-2 lg:p-0 lg:h-12 rounded text-white lg:text-xl font-medium cursor-pointer bg-orange-500'>Procceded To Payment</button>
        </Link>
      </div>
      </div>
    
  )
}

export default DeliveryInfo
