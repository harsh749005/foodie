import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const Orders = () => {
  return (
    <div className='w-[90%] xl:w-[70%] m-auto flex flex-col gap-5'>
      <h1 className='text-2xl font-medium'>My Orders</h1>
      <div className='h-64 md:h-max flex flex-col justify-between  md:flex-row md:justify-between md:items-center border-2 border-orange-400 rounded p-2'>
        <div className='w-12 h-12'>
            <img className='w-full h-full object-cover'src={assets.parcel_icon} alt="parcel icon" />
        </div>
        <p className='w-44 h-6 line-clamp-1'> Garlic sanwich </p>
        <p>$65.00</p>
        <p>3</p>
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2'>
                <img src={assets.selector_icon} alt="" />
            </div>
            <p>Food Processing</p>
        </div>
        <div className='bg-orange-400 w-40 md:w-auto md:h-max text-center p-2 md:p-3 md:pl-4 md:pr-4 rounded text-white font-medium'>
            Tack Order
        </div>
      </div>
    </div>
  )
}

export default Orders
