// src/components/FeaturedProducts.jsx
import React from "react";

const products = [
  {
    name: "Celestial Charm Necklace",
    price: "₹3,999",
    image: "https://via.placeholder.com/250x250.png?text=Necklace", // sample
  },
  {
    name: "Radiant Moon Ring",
    price: "₹2,299",
    image: "https://via.placeholder.com/250x250.png?text=Ring",
  },
  {
    name: "Starlight Earrings",
    price: "₹1,899",
    image: "https://via.placeholder.com/250x250.png?text=Earrings",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6 bg-[#fff] text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#4a3b6b] mb-6">
        Discover Our Featured Collection
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto italic">
        Handpicked pieces, loved by many. Designed to reflect your unique glow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-medium text-[#5a4478]">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
