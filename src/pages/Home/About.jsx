import React from "react";
import homeabout from "./hero/slider-img/homeabout.jpg";
const About = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col md:flex-row items-center gap-8 px-6 md:px-16">
      <img
        src= {homeabout}
        alt="About"
        className="rounded-2xl w-full md:w-1/2"
      />
      <div className=" shadow-lg p-5 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 leading-6">
       <span className="bg-purple-600 p-1 rounded text-white"> Function manager</span> will create everlasting memories by celebrating life and its possibilities.
      brings you a fresh perspective and innovative approach to Corporate Events, Wedding Program, Birthday Party, Anniversary, Musical Events, Musical Shows, Decoration service, Catering & Food Supply Chain, event planning & management, merged with traditional wedding planning and etiquette. The main focus of our company is our bespoke luxury wedding planning, design and management service. With our attention to detail, a flair for design and a passion for delivering truly unique wedding events, we can seamlessly produce an exceptional experience. We have an exceptional network of event suppliers who meet quantifiable standards of service and delivery. Concept will advise and recommend the best venues and suppliers while coordinating your wedding to ensure cost efficiency. Every client and wedding service that we provide is unique, therefore wedding design & management prices vary.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 duration-300">
          Learn More
        </button>
      </div>


    </section>
    

  );
};

export default About;
