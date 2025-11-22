import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Auth/Auth";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { BarLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    
    e.preventDefault();

    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        toast.success("Successfull");
        navigate("/login")
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center my-20">
      <ToastContainer></ToastContainer>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col justify-center bg-gray-300 rounded-2xl w-100 h-100 px-10 space-y-6 shadow-md"
      >
        <h1 className="text-center font-medium text-xl">Sign Up Form</h1>

        {/* Email Input */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-4 px-6 border border-gray-500 rounded-xl"
          type="email"
          required
          placeholder="Enter your email"
        />

        {/* Password Input */}
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-4 px-6 border border-gray-500 rounded-xl w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}"
            title="Minimum 8 characters with uppercase, lowercase and number"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className="absolute right-4 top-4.5 cursor-pointer"
          >
            {/* Eye icon placeholder */}
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-md font-semibold"
        >
          {loading ? <BarLoader width={250} color="white" /> : "Sign Up"}
        </button>
        <h1 className="font-semibold text-gray-500 text-center text-base">You have already account please ? <Link className="text-blue-600 " to="/login">Log In</Link></h1>
      </form>
    </div>
  );
};

export default SignUp;
