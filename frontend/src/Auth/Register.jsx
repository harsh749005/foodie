import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = ({setisAuth}) => {

  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleForm = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:8081/register',{name,email,password})
    .then((response)=>{
      if(response.data.message === "User already exists"){
        toast.error("User already exists");
        console.log(response.data.message);
      }
      else if(response.data.message === "Registration successful"){
        toast.success('Registration Successful');
        setName('');
        setEmail('');
        setPassword('');
        setisAuth(true);
        console.log(response.data);
        navigate('/foodie/');
      }
      else{
        toast.error('Registration Failed');
        console.log(response.data.error);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="flex flex-col gap-10 bg-white w-[90%] xl:w-[70%] p-8 m-[auto] rounded-lg md:border-2 md:border-slate-400 md:mt-10">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-medium">Create account</h2>
        
      </div>
      <form onSubmit={handleForm}>
      <div className="flex flex-col gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-3 "
          placeholder="Your Name"
        />
         <input
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
          type="email"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-3"
          placeholder="Your Email"
        />
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          type="password"
          className="text-[18px] p-2 border-2 rounded border-slate-200 bg-transparent outline-red-500 pl-3 "
          placeholder="Your Password"
        />
        <button className="bg-red-500 h-12 rounded text-white text-[20px] font-medium cursor-pointer">
          Create account
        </button>
      </div>
      <div className="flex items-baseline gap-2 ">
        <input type="checkbox" name="terms" value="terms" className="cursor-pointer" />
        <p>By clicking you are accepting our Tearms and Conditions</p>
      </div>
      <p>
        Already have an account ?
        <Link to="/foodie/login" className="ml-2 text-red-600 font-medium">
          Login
        </Link>
      </p>
      </form>
    </div>
  );
};

export default Register;
