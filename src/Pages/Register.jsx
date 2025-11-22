import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Auth/Auth";
import { Eye, EyeOff } from "lucide-react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit holo");
    console.log("Email:", email);
    console.log("Password:", password);

    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        toast.success("Registration Succesfull");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-auto my-20">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center bg-gray-300 rounded-2xl w-100 h-100 px-10 space-y-6 shadow-md"
        >
          <h1 className="text-center font-medium text-xl">Register Form</h1>
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="py-4 px-6 border border-gray-500 rounded-xl"
            type="email"
            placeholder="Enter your email"
          />
          <div className="relative">
            <div>
              <input
                value={password}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                title="Minimum 8 characters with uppercase, lowercase and number"
                minLength="8"
                onChange={(e) => setPassword(e.target.value)}
                className="py-4 px-6 border border-gray-500 rounded-xl w-full "
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4.5 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-md font-semibold relative"
          >
            {loading ? (
              <ClipLoader size={20} color="blue"></ClipLoader>
            ) : (
              "Register"
            )}
          </button>

          {/* toster */}
            <ToastContainer />

        </form>
      </div>
    </div>
  );
};

export default Register;
