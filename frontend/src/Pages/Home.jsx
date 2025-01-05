import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [getMenuItemName,SetMenuItemName] = useState([]);
  const handleMenuItem = (e) =>{
    SetMenuItemName(e.target.alt);
  }
 
  return (
    <>
    <Header/>
    <Menu setMenuItem={handleMenuItem} />
    <h1 className="w-[90%] md:w-[70%]  m-auto mt-4 mb-4 text-2xl font-medium">Top dishes near you</h1>
    <Card getMenuItem = {getMenuItemName}/>
    <Footer/>
    </>

  );
};

export default Home;
