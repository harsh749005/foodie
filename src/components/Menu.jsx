import React, { useState,useEffect } from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
import '../styles/scrollbar.css'
const Menu = ({setMenuItem}) => {

  

  return (
    <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-5 mt-5">
      <div >
        <h2 className='w-max text-2xl font-medium'>Explore Menu</h2>
        <p className='w-[90%] lg:w-[70%] mt-5 text-md text-slate-500'>
            Choose form a diverse featuring a delectable array of dishes. Our mission is to satisfy your 
            cravingd and elevate dining experience, one delicious meat at a time.
        </p>
      </div>
      <div id='scrollbar' className='flex justify-start items-start gap-5 overflow-auto'>
        {
            menu_list.map((item,index)=>(
                <div key={index} className='w-max h-max flex flex-col items-center '>
                    <div className='rounded-full w-28 h-28 cursor-pointer hover:border-4 border-red-500 '>
                <img src={item.menu_image} alt={item.menu_name} onClick={setMenuItem} />
                </div>
                <p className='mt-2 text-2sm w-max h-max text-slate-500 cursor-default' >{item.menu_name}</p>
                </div>
            ))
        }
        
      </div>
    </div>
  )
}

export default Menu
