import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const csrds = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      Name: "Dhruv Tailor",
      review: "Great service! My event went so smooth and memorable.",
      rating: 5,
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      Name: "Priya Sharma",
      review: "Amazing decoration and management, highly recommend!",
      rating: 4,
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      Name: "Ravi Kumar",
      review: "Professional staff and great arrangements.",
      rating: 5,
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      Name: "Neha Singh",
      review: "Loved the photography setup. Superb work!",
      rating: 4,
    },
    {
      id: 5,
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      Name: "Amit Verma",
      review: "Everything was on time and well organized.",
      rating: 5,
    },
    {
      id: 6,
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      Name: "Kavita Joshi",
      review: "Great value for money, loved the decorations!",
      rating: 4,
    },
    {
      id: 7,
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      Name: "Suresh Mehta",
      review: "Fantastic experience! Highly satisfied.",
      rating: 5,
    },
    {
      id: 8,
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      Name: "Anjali Gupta",
      review: "Staff was very cooperative and polite.",
      rating: 4,
    },
    {
      id: 9,
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      Name: "Rajesh Khanna",
      review: "They made my wedding unforgettable. Thank you!",
      rating: 5,
    },
    {
      id: 10,
      img: "https://randomuser.me/api/portraits/women/10.jpg",
      Name: "Simran Kaur",
      review: "Loved the overall vibe and arrangements.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full h-auto justify-center text-center py-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-[90%] md:w-[70%]"
      >
        {csrds.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="shadow-lg rounded-xl p-6 bg-white md:w-[400px] w-[250px]  max-w-md mx-auto">
              <img
                src={card.img}
                alt={card.Name}
                className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-purple-500"
              />
              <p className="italic text-gray-600 mb-2">"{card.review}"</p>
              <h3 className="font-semibold">{card.Name}</h3>
              <p className="text-yellow-500">⭐ {card.rating}/5</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
