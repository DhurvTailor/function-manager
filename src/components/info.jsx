import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Info() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.remove("bg-gray-900", "text-white");
      document.body.classList.add("bg-white", "text-black");
    }
  }, [darkMode]);

  return (
    <div
      data-aos="fade-down"
      className={`w-full h-auto ${
        darkMode ? "bg-gray-800" : "bg-purple-600"
      } text-white py-3 px-5 flex overflow-x-hidden justify-between items-center`}
    >
      {/* Contact Info */}
      <div className="flex-col md:flex gap-6 pl-5 items-center">
        <a
          data-aos="fade-right"
          data-aos-delay="200"
          className="flex gap-2 items-center"
          href="tel:9521634141"
        >
          <FaPhone /> 9521634141
        </a>
        <a
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex gap-2 items-center"
          href="mailto:tailor@gmail.com"
        >
          <FaEnvelope /> tailor@gmail.com
        </a>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="flex gap-2 items-center"
        >
          <FaMapMarkedAlt /> Kotputli
        </div>
      </div>

      {/* Dark Mode Button */}
      <div data-aos="zoom-in" data-aos-delay="800">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full border ${
            darkMode ? "border-white" : "border-black"
          } hover:scale-110 transition`}
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
    </div>
  );
}

export default Info;

