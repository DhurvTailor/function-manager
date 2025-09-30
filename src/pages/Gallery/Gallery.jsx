import React, { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Apni images yaha dal dena
const photos = [
  
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // code on screen
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // laptop coding
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // dark theme editor
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // programmer setup
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // team coding
  "https://images.unsplash.com/photo-1537432376769-00a7c7f2b9e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // code on multiple screens
  "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // terminal
  "https://images.unsplash.com/photo-1585079542210-25c3e5f8aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // colorful code
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // programmer working
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // futuristic coding
  "https://images.unsplash.com/photo-1526378722470-4c1e6c72f99e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // data flow
  "https://images.unsplash.com/photo-1618477247222-acbdb0f7b3d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // abstract code
  "https://images.unsplash.com/photo-1581092919534-7a6d98d3a2f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // programmer laptop
  "https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // code on desk
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // mobile coding
  "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // data structures
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // backend code
  "https://images.unsplash.com/photo-1585079542210-25c3e5f8aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // debugging
  "https://images.unsplash.com/photo-1526378722470-4c1e6c72f99e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // logic flow
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // function code
  "https://images.unsplash.com/photo-1581091870622-2d5fdc2017f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // javascript code
  "https://images.unsplash.com/photo-1581092335027-30aa98f9c0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // python code
  "https://images.unsplash.com/photo-1580894908361-967195fdf98f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // c++ code
  "https://images.unsplash.com/photo-1618498082406-d6c3a4e02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // react project
  "https://images.unsplash.com/photo-1593720213428-28e2f8f1e9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // git terminal
  "https://images.unsplash.com/photo-1621926015495-f1c3f3f94a69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // coding at night
  "https://images.unsplash.com/photo-1581090700227-4c4f0f5d9b12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // software dev
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // cloud code
  "https://images.unsplash.com/photo-1580894742644-7e5b45fc3e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // binary data
  "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // database query

  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515169067865-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524854859347-bd2f09b86938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515169067865-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519744346363-58f718b0b0af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524854859347-bd2f09b86938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524854859347-bd2f09b86938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515169067865-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519744346363-58f718b0b0af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const sliderimg = [


 {id:1 ,img: "https://images.unsplash.com/photo-1519744346363-58f718b0b0af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
 {id:2 ,img : "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
  {id:3 , img:  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
  {id:4 , img :"https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
 {id:5 ,img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
 { id:6 , img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
{  id : 7 , img : "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
]

  return (
    <div className="w-full min-h-screen to-gray-800 py-16 px-6 text-white">
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 mb-16 drop-shadow-lg"
        data-aos="fade-down"
      >
         Premium Gallery
      </h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-lg break-inside-avoid group cursor-pointer"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedImg(photo)}
          >
            <img
              src={photo}
              alt={`gallery-${index}`}
              className="w-full rounded-2xl object-cover transform group-hover:scale-110 group-hover:rotate-2 transition duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 p-6">
              <p className="text-lg font-semibold text-pink-300 drop-shadow-md">
                Memory {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16" data-aos="fade-up">
        <button className="px-10 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:scale-110 transition duration-300 animate-pulse">
          🚀 Explore More
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="selected"
            className="max-w-[90%] max-h-[80%] rounded-xl shadow-2xl border-4 border-pink-500 animate-fadeIn"
          />
        </div>
      )}


<div className="bg-purple-500 w-full h-auto ">
  {sliderimg.map((item )=>{
    <div key={sliderimg.id}>
      <img className="w-[100px] h-[50px]" src={item.img} alt="" />
    </div>
  })}
</div>


    </div>
  );
};

export default Gallery;
