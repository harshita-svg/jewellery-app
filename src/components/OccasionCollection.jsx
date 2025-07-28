// src/components/OccasionCollection.jsx
import React from "react";

const occasions = [
  { title: "Weddings", image: "/images/occasions/wedding.jpg" },
  { title: "Birthdays", image: "/images/occasions/birthday.jpg" },
  { title: "Festivals", image: "/images/occasions/festival.jpg" },
  { title: "Gifting Love", image: "/images/occasions/gift.jpg" },
];

const OccasionCollection = () => {
  return (
    <section className="py-16 px-6 bg-[#fcf7ff] text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#4a3b6b] mb-4">
        Occasions Woven in Gold
      </h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        Find the perfect jewel to honor every cherished moment — handcrafted for
        celebrations big and small.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {occasions.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover"
            />
            <div className="bg-white py-4">
              <h3 className="text-lg font-medium text-[#6b529f]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OccasionCollection;
