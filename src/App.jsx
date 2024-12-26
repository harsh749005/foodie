import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Home from './Pages/Home'
import Header from './components/Header'
import Menu from './components/Menu'
import HamburgerMenu from './components/HamburgerMenu'

function App() {
  const [isMenuOpen,setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  
  return (
    <div className=' w-[100%] md:w-full'>
      <Navbar toggleMenu={toggleMenu}/>
      {isMenuOpen && <HamburgerMenu closeMenu={toggleMenu} />}
      
      <Home/>
      
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  )
}

export default App
