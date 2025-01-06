import React, { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { food_list } from "../assets/frontend_assets/assets";
import axios from 'axios';
const Card = ({getMenuItem,updateItemQuantity}) => {
  //console.log(getMenuItem); //item which contains the category
  const [fooditem,setFoodItem] = useState([]);
  // const filteredMenu = food_list.filter(item => getMenuItem.includes(item.category));
  // console.log(fooditem.filter(item => getMenuItem.includes(item.foodCategory)));
  const filteredMenu = fooditem.filter(item => getMenuItem.includes(item.foodCategory)); //get food items from state fooditem array based on the selected category
  //console.log(filteredMenu.length); //contains the selected category food items array
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:8081/getfooditems')
    .then((response)=>{
      setFoodItem(response.data); //set food items from server to state fooditem
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[])
  return (
    <div className="w-[90%] md:w-[70%] m-auto flex flex-wrap  gap-5 cursor-pointer">
      {/* conditional rendering has been performed */}
      {
        filteredMenu.length > 0 ? (
        filteredMenu.map((item,index)=>(
      <div key={index} className="w-full md:w-60 h-[450px] bg-white rounded-lg shadow-md">
        <div className="w h-56 ">
          <img
            src={item.foodImage}
            alt=""
            className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
          />
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center w-40 h-14 text-lg font-semibold leading-1">{item.foodName}</h2>
            {/* <img className="w-16" src={assets.rating_starts} alt="" /> */}
            <div className="bg-orange-600 rounded text-white font-medium pl-2 pr-1">4.5<small>⭐</small></div>
          </div>
          <p className="text-gray-600 h-[70px] ">{item.foodDescription}</p>
          <div className="mt-2 flex justify-between items-center">
            <h2 className="text-orange-600 font-bold text-2xl ">
              ${item.foodPrice}
            </h2>
            <div onClick={() => {
                                  updateItemQuantity(item.id, 1); 
                        }
            } className="rounded-full w-8 h-8 border-2 bg-orange-300 border-orange-500 p-2 ">
              <img
                
                src={assets.plus}
                alt=""
                className="w-full h-full rounded-full cursor-pointer hover:shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
        ))) : (
          fooditem.map((item,index)=>(
            <div key={index} className="w-full md:w-60 h-[450px] bg-white rounded-lg shadow-md">
              <div className="w h-56 ">
                <img
                  src={item.foodImage}
                  alt=""
                  className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center w-40 h-14 text-lg font-semibold leading-1">{item.foodName}</h2>
                  {/* <img className="w-16" src={assets.rating_starts} alt="" /> */}
                  <div className="bg-orange-600 rounded text-white font-medium pl-2 pr-1">4.5<small>⭐</small></div>
                </div>
                <p className="text-gray-600 h-[70px] ">{item.foodDescription}</p>
                <div className="mt-2 flex justify-between items-center">
                  <h2 className="text-orange-600 font-bold text-2xl ">
                    ${item.foodPrice}
                  </h2>
                  <div  onClick={() => {
                                  updateItemQuantity(item.id, 1); 
                        }
            } className="rounded-full w-8 h-8 border-2 bg-orange-300 border-orange-500 p-2 ">
                    <img
                    
                   
                      src={assets.plus}
                      alt=""
                      className="w-full h-full rounded-full cursor-pointer hover:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
      
        )))
      }
    </div>
  );
};

export default Card;
