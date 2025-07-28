// src/components/FeaturedPicks.jsx
import React from "react";

const featuredProducts = [
  {
    id: 1,
    name: "Celestial Pendant",
    price: "₹3,499",
    image: "https://via.placeholder.com/300x300.png?text=Pendant",
  },
  {
    id: 2,
    name: "Mystic Moon Ring",
    price: "₹2,899",
    image: "https://via.placeholder.com/300x300.png?text=Ring",
  },
  {
    id: 3,
    name: "Sunstone Bracelet",
    price: "₹1,999",
    image: "https://via.placeholder.com/300x300.png?text=Bracelet",
  },
  {
    id: 4,
    name: "Aurora Earrings",
    price: "₹2,299",
    image: "https://via.placeholder.com/300x300.png?text=Earrings",
  },
];

const FeaturedPicks = () => {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8 tracking-wide">
        ✨ Curated for Your Cosmic Charm ✨
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.price}</p>
            <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPicks;
