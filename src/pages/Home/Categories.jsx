import React from "react";

function Categories() {
  const categories = ["Electronics", "Fashion", "Beauty", "Food", "Sports"];

  return (
    <section className="w-full py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Browse Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 duration-300"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
