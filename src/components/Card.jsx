import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { food_list } from "../assets/frontend_assets/assets";
const Card = () => {
  return (
    <div className="w-[90%] md:w-[70%] m-auto flex flex-wrap  gap-5 cursor-pointer">
      {
        food_list.map((item,index)=>(
      <div className="w-full md:w-60 h-[450px] bg-white rounded-lg shadow-md">
        <div className="w h-56 ">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
          />
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="text-gray-600">{item.description}</p>
          <div className="flex justify-between items-center">
            <h2 className="text-red-600 font-medium text-2xl ">
              ${item.price}
            </h2>
            <div className="rounded-full w-11 h-11 shadow-sm">
              <img
                src={assets.plus}
                alt=""
                className="w-full h-full rounded-full cursor-pointer hover:shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Card;
