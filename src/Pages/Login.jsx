import { signInWithEmailAndPassword } from "firebase/auth";
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
        toast.success("Successfull");
        setEmail('');
        setPassword('');
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      })
      .finally(() =>{
        setLoading(false);
      })
      
  };
  return (
    <div className="flex justify-center my-20">
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center bg-gray-300 rounded-2xl w-100 h-100 px-10 space-y-6 shadow-md"
      >
        <h1 className="text-center font-medium text-xl">Login Now</h1>

        {/* Email Input */}
        <input
          className="py-4 px-6 border border-gray-500 rounded-xl"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
        />

        <div className="relative">
          {/* Password Input */}
          <input
            className="py-4 px-6 border border-gray-500 rounded-xl w-full "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <button
            className="absolute top-4 right-4"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

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
