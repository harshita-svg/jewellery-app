import React from "react";

const Testimonials = () => {
  const quotes = [
    {
      name: "Aanya R.",
      message:
        "Every piece feels like it was made for me. My birthstone ring brought a quiet kind of confidence I never knew I needed.",
    },
    {
      name: "Meera D.",
      message:
        "I gifted my mother a pendant through Align. She cried. It wasn’t just jewelry, it was a memory strung in silver.",
    },
    {
      name: "Riya K.",
      message:
        "Wearing my Align charm feels like carrying a piece of the cosmos close to my heart. It’s more than style—it’s soul.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 italic">
        Stories Etched in Gold
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="shadow-lg p-6 bg-gradient-to-br from-[#fef8fc] to-[#f2ecf5] rounded-xl"
          >
            <p className="text-lg text-gray-700 mb-4 font-light italic">
              “{quote.message}”
            </p>
            <p className="text-sm font-semibold text-[#a387c4]">
              — {quote.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
