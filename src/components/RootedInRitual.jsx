// src/components/RitualAndIntuition.jsx
import React from "react";

const RitualAndIntuition = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#4a3b6b] mb-6">
        Rooted in Ritual, Crafted with Intuition
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-10 italic">
        Before it touches your skin, it touches your soul. Every piece we craft
        honors ancestral rituals, intuitive design, and cosmic timing —
        transforming silver into sacred.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="/images/rituals/ritual-intuition.jpg"
          alt="Ritual Crafting"
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-xl"
        />

        <div className="max-w-md text-left">
          <h3 className="text-xl font-medium text-[#6b529f] mb-3">
            Jewelry That Carries Energy
          </h3>
          <p className="text-gray-700 mb-5">
            We infuse mindfulness into making — from moon-phase metal forging to
            mantras whispered while setting stones. This isn’t mass-made. This
            is meaning, molded.
          </p>

          <div className="mt-6 text-[#6b529f] font-semibold italic text-sm">
            “Wear with intention. Glow with grace.” ✨
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualAndIntuition;
