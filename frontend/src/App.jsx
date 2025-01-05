import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Home from './Pages/Home'
import Header from './components/Header'
import Menu from './components/Menu'
import HamburgerMenu from './components/HamburgerMenu'
import Cart from './Pages/Cart'
import { Routes,Route } from 'react-router-dom'
import DeliveryInfo from './Pages/DeliveryInfo'
import Orders from './Pages/Orders'

import { ToastContainer, toast } from 'react-toastify';
import Logout from './Auth/Logout'

function App() {
  const [isMenuOpen,setMenuOpen] = useState(false);
  const [isAuth,setisAuth] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=' w-[100%] md:w-full'>
      <Navbar toggleMenu={toggleMenu} isAuth={isAuth} setisAuth={setisAuth}/>
      {isMenuOpen && <HamburgerMenu closeMenu={toggleMenu} />}
      
  
      
      <Routes>
        <Route  path="/foodie/" element={<Home />} />
        <Route  path="/foodie/login" element={<Login setisAuth={setisAuth}/>} />
        <Route  path="/foodie/register" element={<Register setisAuth={setisAuth}/>} />
        <Route  path="/foodie/logout" element={<Logout />} />
        <Route  path="/foodie/Cart" element={<Cart />} />
        <Route  path='/foodie/DeliveryInfo' element={<DeliveryInfo />} />
        <Route  path='/foodie/Orders' element={<Orders />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
