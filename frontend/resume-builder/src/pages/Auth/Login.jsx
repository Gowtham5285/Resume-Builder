import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/inputs/Input.jsx";
import { validateEmail } from "../../utils/helper.js";
import {UserContext} from "../../context/UserContext.jsx"
import axiosInstance from "../../utils/axiosinstance.js"
import { API_PATHS } from "../../utils/apiPaths";

export const Login = ({setCurrentPage}) => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);

  const {updateUser}=useContext(UserContext);
  const navigate =useNavigate();

  // Handle login form Submit
  const handleLogin=async(e)=>{
    e.preventDefault();
    if (!validateEmail(email)){
      setError("Please enter the valid email address")
      return;
    }
    if(!password){
      setError("please enter the password")
      return;
    }

    setError("")

    // Login API call
    try {
      const response= await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
        email,
        password
      });
      const {token}=response.data;

      if(token){
        localStorage.setItem("token",token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (error) {
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      }else{
        setError("Something went wrong. Please try again")
      }
    }
  }
  return (
    <>
      <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
        <h3 className=" text-lg font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please Enter your details to login</p>
        <form onSubmit={handleLogin}>
          <Input type="text" value={email} onChange={({target})=>setEmail(target.value)} label="Email Address" placeholder="john@example.com"/>

          <Input type="password" value={password} onChange={({target})=>setPassword(target.value)} label="Password" placeholder="Min 8 Characters"/>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">Don't have an account?{" "}
            <button className="font-medium text-primary underline cursor-pointer" onClick={()=>{
              setCurrentPage("signup");
            }}>SignUp</button>
          </p>
        </form>
      </div>
    </>
  );
};