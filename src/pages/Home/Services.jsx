import React from "react";
import Birthday from "./hero/homeserviceimg/Birthday & Anniversary Events.jpg";
import Corporate from "./hero/homeserviceimg/Corporate Events.jpg";
import Decoration from "./hero/homeserviceimg/Decoration.jpg";
import Food from "./hero/homeserviceimg/Food & Beverage.jpg";
import Musical from "./hero/homeserviceimg/Musical Event & Shows.jpg";
import Wedding from "./hero/homeserviceimg/Wedding Program.jpg";



const Services = () => {
  const data = [
    { id: 1, img : Corporate , title: "Corporate Events", desc: "We offer a full range of event management service and delivering all this to the highest standard. We create events that exceed expectations, adding value towards the functions to Business meet, Product launch, Dealer’s meet day out & Award ceremony" },
    { id: 2, img :Wedding , title: "Wedding Program", desc: "Get in touch with us, if you’re looking for the best event planners in Kolkata to create a sublime and unforgettable celebration. We specialize in planning and designing high end, unique events that are entirely tailored to all clients imagination." },
    { id: 3, img : Birthday , title: "Birthday & Anniversary Events", desc: "The world’s most festivity functions are Birthday & Anniversary. Want to keep it memorable? No problem, we have tons of suggestions to provide maximum excitement in your budget, whatever the size." },
    { id: 4, img : Musical , title: "Musical Event & Shows", desc: "function manager events management providing high- end Celebrity management, live singers, Dj, performers & fashion shows." },
    { id: 5, img : Decoration , title: "Decoration", desc: "To create an innovative ambience, we are always updated with the latest trends of floral, Textile, lighting, furniture, art & design."},
   { id: 6,  img : Food ,title: "Food & Beverage", desc: "It’s managed by highly qualified & maximum experience professional. The provision of packet foods supply desk is open for corporate sector." },


  ];

  return (
    <section className="w-full py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 w-[90%] mx-auto">
        {data.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-xl shadow hover:shadow-lg duration-300">
            <img className="w-100 h-50" src={item.img} alt="" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
