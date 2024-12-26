import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Header = () => {
  return (
    <div className="w-[90%] xl:w-[70%] m-auto">
      <div className="w-full relative flex flex-col gap-5">
        <div className="w-full relative ">
          <img
            src={assets.header_img}
            alt=""
            className="relative w-full h-full object-cover"
          />
          <h2
            // style={{ lineHeight: "72px" }}
            className="text-xl bottom-5 left-10  absolute  w-max text-white font-medium md:text-6xl md:bottom-24 lg:bottom-48 md:left-20"
          >
            Order Your <br /> Favourite Food
          </h2>
        </div>
        <div className=" hidden xl:block  xl:w-[70%]  relative md:bottom-48">
          <p className="absolute text-white left-20">
            Experience the joy of delicious, handcrafted meals made with fresh
            ingredients and bold flavors. At our table, every dish is a
            celebration of taste and creativity, crafted with love to bring
            people together. Whether you're craving comfort food or something
            new, we serve up plates that nourish both body and soul, turning
            every bite into a memorable moment.
          </p>
        </div>
        <div className=" hidden md:block absolute md:bottom-5 lg:bottom-10 md:left-20">
          <button className=" bg-white text-black font-medium md:py-3 md:px-12 rounded-full">
            Explore Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
