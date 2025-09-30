import React, { useEffect } from "react";
import enqary from "./hero/enquiry/enqary.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Enquiry = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full mt-20 mb-20 h-auto flex flex-col items-center justify-center text-center py-12 bg-gray-50">
         <img
        className="w-full h-[350px] mb-6 absolute brightness-50"
        src={enqary}
        alt="Enquiry"
        data-aos="fade-up"
      />

      <div className="w-[90%] mx-auto" data-aos="fade-left" data-aos-delay="300">
     
        <h2 className="text-3xl font-semibold italic text-white" >
          Make your event More Enjoyable and Unforgettable with <span className="text-purple-600">FM</span>
        </h2>
        <button className="bg-white text-xl  mt-10 p-2 shadow-2xl">Enquiry Now</button>
      </div>
    </div>
  );
};

export default Enquiry;
