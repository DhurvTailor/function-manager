import React, {  useState } from "react";
import logo from "./logo_function.png";
import {
  FaHome,
  FaInfoCircle,
  FaImages,
  FaPhone,
  FaConciergeBell,
  FaListAlt,
  FaUserAlt,
  FaBars,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Navigate} from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll hone par header sticky + shadow
 const Navigate = useNavigate()




  return (
    <header className="overflow-x-hidden left-5 top-14 bg-white border border-purple-700 shadow-purple-600 shadow-2xl  w-full z-50">
      <div className="flex items-center justify-between px-6 ">
        {/* Logo */}
        <div className="flex float-left  gap-3">
          <img src={logo} alt="Logo" className="w-44 h-16" />
          <h1 className="text-xl font-bold"></h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-semibold text-gray-700">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-600">
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaInfoCircle /> About
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaImages /> Gallery
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaConciergeBell /> Services
          </Link>
          <Link
            to="/categorie"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaListAlt /> Categories
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaPhone /> Contact
          </Link>
          
  
         <button onClick={()=>{navigator('/login')}} className="flex items-center bg-purple-600 py-1 px-4 gap-2 hover:text-blue-600" > 
          login
         </button>
           
          
        
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-600 text-white  flex flex-col gap-4 p-6 font-semibold shadow-lg">
          <Link className="border-b p-2" to="/" onClick={() => setMenuOpen(false)}>
            <FaHome className="inline mr-2 " /> Home
          </Link>
          <Link className="border-b p-2" to="/about" onClick={() => setMenuOpen(false)}>
            <FaInfoCircle className="inline mr-2" /> About
          </Link>
          <Link className="border-b p-2" to="/gallery" onClick={() => setMenuOpen(false)}>
            <FaImages className="inline mr-2" /> Gallery
          </Link>
          <Link className="border-b p-2" to="/services" onClick={() => setMenuOpen(false)}>
            <FaConciergeBell className="inline mr-2" /> Services
          </Link>
          <Link className="border-b p-2" to="/categories" onClick={() => setMenuOpen(false)}>
            <FaListAlt className="inline mr-2" /> Categories
          </Link>
          <Link className="border-b p-2" to="/contact" onClick={() => setMenuOpen(false)}>
            <FaPhone className="inline mr-2" /> Contact
          </Link>
          <Link className="border-b p-2" to="/profile" onClick={() => setMenuOpen(false)}>
            <FaUserAlt className="inline mr-2" /> Profile
          </Link>

          
        </div>
      )}
    </header>
  );
};

export default Header;
