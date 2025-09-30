





import React, { useState } from "react";

// Dummy category details
const categories = [
  { id: 1, name: "Wedding & Related Function", description: "Engagement, Mehndi, Sangeet etc..." },
  { id: 2, name: "Birthday Function", description: "Birthday party, cake cutting, games..." },
  { id: 3, name: "Corporate Events", description: "Seminars, workshops, conferences..." },
  { id: 4, name: "Cultural Program", description: "Dance, music, art events..." },
  { id: 5, name: "Entertainment & Showbiz", description: "Concerts, shows, media events..." },
  { id: 6, name: "Social Programs", description: "Community gatherings, charity events..." },
  { id: 7, name: "Miscellaneous Function", description: "Other small events, private functions..." },
  { id: 8, name: "Political Rally", description: "Campaigns, speeches, public meetings..." },
  { id: 9, name: "Educational Function", description: "Seminars, workshops, training events..." },
  { id: 10, name: "Fitness Club", description: "Gym events, competitions, fitness programs..." },
  { id: 11, name: "Luxury & Destination Function", description: "Destination weddings, luxury events..." },
];

const Categorie = () => {
  const [selected, setSelected] = useState(null); // clicked category

  return (
    <section className="w-full h-auto  py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>

      <div className="flex flex-wrap  justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="px-3 py-2 md:px-5 md:py-3  bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 duration-300"
            onClick={() => setSelected(cat.id === selected ? null : cat.id)} // toggle
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Selected category details */}
      {selected && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg w-[80%] mx-auto text-left">
          <h3 className="text-xl font-bold mb-2">
            {categories.find((cat) => cat.id === selected).name}
          </h3>
        
          <p className="text-gray-700">
            {categories.find((cat) => cat.id === selected).description}
          </p>
        </div>
      )}
    </section>
  );
};

export default Categorie;
