import React from "react";
import LoginBg from "./loginbackground.jpg";
const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-gradient-to-b from-purple-200 to-purple-400 relative overflow-hidden">
      {/* Background image of mountains (SVG style gradient effect) */}
      <div className="absolute inset-0">
        <img
          src={LoginBg}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/30 shadow-xl rounded-xl w-[350px] p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email ID"
            className="w-full px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center text-sm text-white mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-500" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-white text-purple-700 font-semibold py-2 rounded-full hover:bg-purple-100 transition">
          Login
        </button>

        {/* Register */}
        <p className="text-center text-sm text-white mt-6">
          Don’t have an account?{" "}
          <a href="#" className="font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;