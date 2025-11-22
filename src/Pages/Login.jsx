import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { auth } from "../Auth/Auth";
import { toast, ToastContainer } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if(!result.user.emailVerified){
          toast.success("Please verify your email!");
        }
        else{
          toast.success("LogIn Successfull");
        }
        setEmail('');
        setPassword('');
        console.log(result.user);
        setTimeout(() => {
          if(result.user.emailVerified){
          navigate("/");
        }
        }, 1200);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      })
      .finally(() =>{
        setLoading(false);
      })
      
  };

  const handleForgotPassword = () => {
      sendPasswordResetEmail(auth,email)
      .then(() => {
        toast.success("A password reset email is send, Check your email!")
      })
      .catch((error) => {
        toast.error(error.message);
      })

  }


  return (
    <div className="flex justify-center my-20">
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center bg-gray-300 rounded-2xl w-100 h-100 px-10 space-y-5 shadow-md"
      >
        <h1 className="text-center font-semibold mt-4 text-xl">Login Now</h1>

        {/* Email Input */}
        <input
          className="py-4 px-6 border border-gray-500 rounded-xl"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
          required
        />

        <div className="relative">
          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-4 px-6 border border-gray-500 rounded-xl w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}"
            title="Minimum 6 characters with uppercase, lowercase and number"
          />
          <button
            className="absolute top-4 right-4 cursor-pointer"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* forgot button  */}
        <p 
        className="text-gray-500 cursor-pointer underline"
        onClick={handleForgotPassword}>Forgot password?</p>


        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-md font-semibold"
        >
          {loading? <SyncLoader color="white"/>: "Login"}
        </button>
        <h1 className="font-semibold text-gray-500 text-center text-base">
          You don't have an account please ?{" "}
          <Link className="text-blue-600 " to="/sign-up">
            Sign Up
          </Link>
        </h1>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default Login;
