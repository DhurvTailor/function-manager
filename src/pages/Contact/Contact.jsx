import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Testimonials from "../Home/Testimonials";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white py-16 px-6">
      
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-12"
        data-aos="fade-down"
      >
        Get In Touch ✨
      </h2>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8" data-aos="fade-up">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border-2 border-pink-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border-2 border-pink-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-xl border-2 border-pink-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Send Message 💌
          </button>
        </form>
      </div>
<Testimonials/>
      {/* Optional Contact Info
      <div className="max-w-3xl mx-auto mt-12 text-center text-gray-700" data-aos="fade-up" data-aos-delay="300">
        <p>Email: <span className="font-semibold text-pink-500">info@example.com</span></p>
        <p className="mt-2">Phone: <span className="font-semibold text-purple-500">+91 12345 67890</span></p>
        <p className="mt-2">Address: <span className="font-semibold">Kotputli, Rajasthan</span></p>
      </div> */}
    </div>
  );
};

export default Contact;
