import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaMoon, FaSun } from "react-icons/fa";
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
      } text-white py-3 px-5 flex justify-between md:flex-row md:justify-between md:items-center gap-4`}
    >
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row md:gap-10 gap-4 items-start md:items-center">
        <a
          data-aos="fade-right"
          data-aos-delay="200"
          className="flex gap-2 items-center text-sm sm:text-base"
          href="tel:9521634141"
        >
          <FaPhone /> 9521634141
        </a>
        <a
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex gap-2 items-center text-sm sm:text-base"
          href="mailto:tailor@gmail.com"
        >
          <FaEnvelope /> tailor@gmail.com
        </a>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="flex gap-2 items-center text-sm sm:text-base"
        >
          <FaMapMarkedAlt /> Kotputli
        </div>
      </div>

      {/* Dark Mode Button */}
   <div
  data-aos="zoom-in"
  data-aos-delay="800"
  className="flex justify-center md:justify-end"
>
  <button
    onClick={() => setDarkMode(!darkMode)}
    className={`p-2 rounded-full border-2 ${
      darkMode ? "border-white text-white" : "border-black text-black"
    } hover:scale-110 transition duration-300`}
  >
    {darkMode ? <FaSun size={20} /> : <FaMoon size={18} />}
  </button>
</div>

    </div>
  );
}

export default Info;
