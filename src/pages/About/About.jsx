import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../Home/Testimonials";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-100 via-pink-50 to-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg">
          About Us 
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We bring your celebrations to life with unforgettable moments, stunning decorations,
          and endless joy. Every event is crafted with love and creativity.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=60"
            alt="About Event"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg" data-aos="fade-left">
            <h3 className="text-xl font-bold">10+ Years</h3>
            <p className="text-sm">Experience in Event Management</p>
          </div>
        </div>

        {/* Right Text */}
        <div data-aos="fade-left">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are ✨</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are passionate about creating magical experiences. Whether it's a wedding,
            concert, family function, or corporate event — our team designs it with perfection.
            From grand setups to intimate gatherings, we make sure every detail feels special.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow-md rounded-xl text-center" data-aos="flip-left">
              <h4 className="text-xl font-bold text-pink-500">500+</h4>
              <p className="text-sm text-gray-600">Events Organized</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl text-center" data-aos="flip-right">
              <h4 className="text-xl font-bold text-purple-500">100%</h4>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>

          <button
            className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
          >
            Learn More ❤️
          </button>
        </div>
      </div>
      <Testimonials/>
    </div>
  );
};

export default About;
