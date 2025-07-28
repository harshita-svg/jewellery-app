import React from "react";

const categories = [
  { name: "Necklaces", image: "/placeholder1.jpg" },
  { name: "Earrings", image: "/placeholder2.jpg" },
  { name: "Rings", image: "/placeholder3.jpg" },
  { name: "Bracelets", image: "/placeholder4.jpg" },
];

const DiscoverCollection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#4B4453] mb-2">
        Discover the Collection
      </h2>
      <p className="text-[#6e6a7b] italic mb-10">
        Crafted for every mood, blessed by the stars.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="py-4">
              <h3 className="text-lg font-medium text-[#5c4c79]">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverCollection;
