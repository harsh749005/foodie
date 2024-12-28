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

function App() {
  const [isMenuOpen,setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=' w-[100%] md:w-full'>
      <Navbar toggleMenu={toggleMenu}/>
      {isMenuOpen && <HamburgerMenu closeMenu={toggleMenu} />}
      
  
      
      <Routes>
        <Route  path="/foodie/" element={<Home />} />
        <Route  path="/foodie/login" element={<Login />} />
        <Route  path="/foodie/register" element={<Register />} />
        <Route  path="/foodie/Cart" element={<Cart />} />
        <Route  path='/foodie/DeliveryInfo' element={<DeliveryInfo />} />
      </Routes>
    </div>
  )
}

export default App
