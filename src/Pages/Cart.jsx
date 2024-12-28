import React from 'react'
import { food_list } from '../assets/frontend_assets/assets'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <div className=' flex flex-col gap-2 md:gap-5 lg:gap-12 w-[90%] lg:w-[70%] m-auto border-slate-400 border-2 p-5 rounded-lg'>
      <div className='hidden md:block'>
      <table className=' w-full '>
        <thead className=''>
          <tr className=' text-sm lg:text-lg font-semibold text-center text-slate-500'>
            <td >Item</td>
            <td>Title</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Remove</td>
            
          </tr>
        </thead>
        
        <tbody >

          <tr className='text-center text-sm lg:text-lg'>
          <td className=' h-20 lg:h-36'>
            <div className='w-12 h-12 md:w-24 md:h-24 rounded m-auto'>
            <img src={food_list[0].image} alt="" className='w-full h-full object-cover rounded' />
            </div></td>
            <td >Burger</td>
            <td className='w-full h-36 flex items-center justify-center gap-2 lg:gap-10'>
                <div className='w-5 h-5 lg:w-8 lg:h-8 border-2 border-emerald-400 rounded-full'>
                <img src={assets.add_icon_green} alt="+"  className='cursor-pointer w-full h-full object-cover'/>
                </div>
                <input className='w-[12px] text-center  lg:w-4 outline-none cursor-pointer' type="text" value="1" name="" id="" />
                <div className='w-5 h-5 lg:w-8 lg:h-8 border-2 border-orange-400 rounded-full'>
                <img src={assets.remove_icon_red} alt="-"  className='cursor-pointer w-full h-full object-cover'/>
                </div>
            </td>
            <td >$5</td>
            <td><div className='m-auto w-5 h-5 lg:w-8 lg:h-8 p-[5px] lg:p-2  lg:border-2 border-slate-400 bg-slate-200 cursor-pointer rounded-full'>
                <img src={assets.cross_icon} alt="-"  className='w-full h-full object-cover'/>
                </div></td>
          </tr>
          
        </tbody>
       
      </table>

      </div>
        <div className='mobFoodItem rep md:hidden'>
        <div className='flex gap-5 justify-between   mb-2'>
        <div className='flex gap-5 justify-start'>
        <div className='w-20 h-20 md:hidden rounded '>
            <img src={food_list[0].image} alt="" className='w-full h-full object-cover rounded' />
            </div>
            <div className='order-content flex flex-col gap-2'>
        <h2 className='text-sm  font-semibold'>Burger</h2>
        <div className='icon-container flex gap-2'>
            
        
        <div className='w-5 h-5  border-2 border-emerald-400 rounded-full'>
                <img src={assets.add_icon_green} alt="+"  className='cursor-pointer w-full h-full object-cover'/>
                </div>
                <input className='w-[12px] h-5 text-center  outline-none cursor-pointer' type="text" value="1" name="" id="" />
                <div className='w-5 h-5 lg:w-8 lg:h-8 border-2 border-orange-400 rounded-full'>
                <img src={assets.remove_icon_red} alt="-"  className='cursor-pointer w-full h-full object-cover'/>
                </div>
            </div>
                <p className='text-sm font-semibold'>$5</p>
            </div>
            </div>
            <div className='w-12 flex justify-center items-center '>
            <div className='m-auto w-5 h-5  p-[5px]  border-slate-400 bg-slate-200 cursor-pointer rounded-full'>
                <img src={assets.cross_icon} alt="-"  className='w-full h-full object-cover'/>
                </div>
            </div>
      </div>
      <hr className='md:hidden'/>
        </div>
      
      
      <hr className='hidden md:block'/>
      <div className='lg:w-1/2 flex flex-col gap-4 lg:gap-8 '>
        <h2 className='text-lg lg:text-2xl font-semibold '>Cart Totals</h2>
        <div className='flex flex-col gap-4 lg:gap-6'>
            <div className='flex justify-between items-center text-sm lg:text-lg'>
                <p className='text-gray-600 '>Subtotal:</p>
                <p className='text-gray-600 '>$5</p>
            </div>
            <hr />
            <div className='flex justify-between items-center  text-sm lg:text-lg'>
                <p className='text-gray-600 '>Delivery : </p>
                <p className='text-gray-600 '>$4</p>
            </div>
            <hr />
            <div className='flex justify-between items-center  text-md lg:text-lg'>
                <p className='text-black font-bold  '>Total : </p>
                <p className='text-black font-bold  '>$9</p>
            </div>
        </div>
        <Link to='/foodie/deliveryInfo'>
        <button className='w-full text-sm p-2 lg:p-0 lg:h-12 rounded text-white lg:text-xl font-medium cursor-pointer bg-red-500'>Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
