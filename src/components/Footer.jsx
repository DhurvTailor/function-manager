import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Function Manager</h2>
          <p className="text-sm">
            Make your events more enjoyable and unforgettable with FM.
            We manage weddings, birthdays, corporate events & more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
            <li><Link to="/services" className="hover:text-purple-400">Services</Link></li>
            <li><Link to="/categorie" className="hover:text-purple-400">Categories</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center gap-2"><FaPhone /> +91 9521634141</p>
          <p className="flex items-center gap-2"><FaEnvelope /> tailor@gmail.com</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Kotputli, Rajasthan</p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-purple-400"><FaFacebook size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-400"><FaInstagram size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-400"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Function Manager. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
