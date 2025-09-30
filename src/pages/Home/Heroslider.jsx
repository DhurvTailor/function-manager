import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import AOS from "aos";

// Images
import birthdayparty from "./hero/slider-img/birthdayparty.jpg";
import companymeeting from "./hero/slider-img/companymeeting.jpg";
import consert from "./hero/slider-img/consert.jpg";
import discoparty from "./hero/slider-img/discoparty.jpg";
import familylunch from "./hero/slider-img/familylunch.png";
import freshersparty from "./hero/slider-img/freshersparty.jpg";
import ganpatipooja from "./hero/slider-img/ganpatipooja.jpg";
import haldievent from "./hero/slider-img/haldievent.jpg";
import happyholi from "./hero/slider-img/happyholi.jpg";
import holievent from "./hero/slider-img/holievent.jpg";
import mandapdecoration from "./hero/slider-img/mandap decoration.jpg";
import preweding from "./hero/slider-img/preweding.jpg";
import weddingevents from "./hero/slider-img/weddingevents.jpg";

const slides = [
  { id: 1, img: birthdayparty, title: "Birthday Party", desc: "Celebrate birthdays with joy, music & memories.", btn: "Book Now" },
  { id: 2, img: companymeeting, title: "Company Meeting", desc: "Professional setups for business events.", btn: "See More" },
  { id: 3, img: consert, title: "Concert Night", desc: "Experience music with dazzling lights & sound.", btn: "Join Now" },
  { id: 4, img: discoparty, title: "Disco Party", desc: "Dance all night with amazing vibes.", btn: "Explore" },
  { id: 5, img: familylunch, title: "Family Lunch", desc: "Enjoy delicious meals with family memories.", btn: "Reserve" },
  { id: 6, img: freshersparty, title: "Freshers Party", desc: "Welcome new beginnings with fun & style.", btn: "Celebrate" },
  { id: 7, img: ganpatipooja, title: "Ganpati Pooja", desc: "Spiritual setups for cultural events.", btn: "View More" },
  { id: 8, img: haldievent, title: "Haldi Ceremony", desc: "Bright & colorful haldi decorations.", btn: "Book Event" },
  { id: 9, img: happyholi, title: "Holi Celebration", desc: "Colors, music & fun – Celebrate Holi.", btn: "Celebrate" },
  { id: 10, img: holievent, title: "Holi Event", desc: "Splash the colors of happiness with loved ones.", btn: "Join Festival" },
  { id: 11, img: mandapdecoration, title: "Mandap Decoration", desc: "Elegant mandap setups for weddings.", btn: "See Designs" },
  { id: 12, img: preweding, title: "Pre Wedding Shoot", desc: "Capture your love story creatively.", btn: "Book Shoot" },
  { id: 13, img: weddingevents, title: "Wedding Events", desc: "Grand weddings with royal themes.", btn: "Plan Now" },
];

const Heroslider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative  w-full h-[550px] flex justify-center items-center overflow-hidden">

      {/* Background */}
      <img
        src={slides[activeIndex].img}
        alt={slides[activeIndex].title}
        className="absolute inset-0 w-full h-full object-cover brightness-60 transition-all"
        data-aos="fade-in"
      />

      {/* Overlay */}
      <div
        className="absolute bottom-20 text-center text-white px-6 py-4 rounded-lg z-10"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold">{slides[activeIndex].title}</h3>
        <p className="mt-2 text-sm">{slides[activeIndex].desc}</p>
        <button className="mt-4 px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition" data-aos="zoom-in">
          {slides[activeIndex].btn}
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={3}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 2 }}
        navigation
        modules={[EffectCoverflow, Navigation]}
        className="w-[80%] max-w-lg h-[200px] absolute bottom-4"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((s, index) => (
          <SwiperSlide key={s.id} data-aos="flip-left" data-aos-delay={index * 100}>
       
            <img src={s.img} alt={s.title} className="rounded-xl w-[180px] h-[180px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Heroslider;
