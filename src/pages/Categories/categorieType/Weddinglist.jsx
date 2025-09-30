import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Deep wedding functions data with unique images
const weddingFunctions = [
  {
    name: "Pre-Wedding",
    option: "Option 1",
    description:
      "Engagement Ceremony | Roka/Sagai | Mehndi Night | Sangeet Function | Cocktail Party",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Wedding Ceremony",
    option: "Option 2",
    description:
      "Traditional Wedding | Reception | Varmala | Pheras | Lunch/Dinner",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Post-Wedding",
    option: "Option 3",
    description:
      "Reception Party | Griha Pravesh | Vidai Ceremony | Thank You Dinner",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Haldi Ceremony",
    option: "Option 4",
    description: "Haldi Ritual | Family Gatherings | Pre-Wedding Rituals",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mehndi Night",
    option: "Option 5",
    description:
      "Mehndi Decoration | Music & Dance | Close Friends & Family",
    img: "https://images.unsplash.com/photo-1574680096145-0f90f946f308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sangeet",
    option: "Option 6",
    description: "Dance Performance | Music | Stage Decor | Entertainment",
    img: "https://images.unsplash.com/photo-1558959350-298d07e7d8ff?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cocktail Party",
    option: "Option 7",
    description: "Cocktail Drinks | DJ Night | Dance Floor | Celebration",
    img: "https://images.unsplash.com/photo-1533777324565-a040eb52f33c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Reception",
    option: "Option 8",
    description: "Dinner & Party | Guest Welcome | Music & Dance",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bachelor Party",
    option: "Option 9",
    description: "Friends Gathering | Music & Dance | Fun Night",
    img: "https://images.unsplash.com/photo-1561414927-6e1e14d2f0b3?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bridal Shower",
    option: "Option 10",
    description: "Games | Gifts | Close Friends | Celebration",
    img: "https://images.unsplash.com/photo-1531066433491-0e61c77111b1?auto=format&fit=crop&w=400&q=80",
  },
];

const Weddinglist = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full h-auto py-12 bg-gray-100">
      <div className="w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Wedding Functions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingFunctions.map((func, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center"
            >
              <img
                src={func.img}
                alt={func.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{func.name}</h2>
                <h3 className="text-purple-600 font-semibold mb-2">{func.option}</h3>
                <p className="text-gray-700">{func.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weddinglist;
