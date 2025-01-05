import axios from 'axios'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Logout = () => {
   
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8081/logout')
       .then((response) => {
         console.log(response.message);
         toast.success('Logged out successfully');
         window.location.href = 'http://localhost:5173/foodie/login';  // Redirect to login page after logout
       }).catch((error) => {
         console.log(error);
       });
    
  return (
    <div>
      
    </div>
  )
}

export default Logout
