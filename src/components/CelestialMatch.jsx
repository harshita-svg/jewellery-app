// src/components/CelestialMatch.jsx
import React from "react";
import { GiCrystalBall } from "react-icons/gi";
import { useAlign } from "../context/AlignContext"; // ✅ Context to control chatbot

const CelestialMatch = () => {
  const { setIsOpen } = useAlign(); // ✅ Get method to open chat

  const handleAlignClick = () => {
    setIsOpen(true); // ✅ Open Align chatbot when button clicked
  };

  return (
    <section className="bg-gradient-to-br from-[#f9f0ff] via-[#f6efff] to-[#e6f7ff] py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Crystal Ball Icon */}
        <div className="flex justify-center mb-5">
          <GiCrystalBall className="text-5xl text-[#7e5abf]" />
        </div>

        {/* Section Title and Description */}
        <h2 className="text-4xl font-semibold text-[#4c3a74] mb-3 tracking-wide">
          Celestial Match
        </h2>
        <p className="text-gray-600 italic text-lg mb-10 max-w-2xl mx-auto">
          Your story written in stars — Align listens to the sky and recommends
          pieces that radiate with your soul.
        </p>

        {/* 3-Step Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-10">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#6b4b9a] mb-2">
              🌌 1. Share Your Cosmic Signature
            </h3>
            <p className="text-sm text-gray-700">
              Just your name, date of birth, and occasion — or go deeper with
              your time and place of birth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#6b4b9a] mb-2">
              🎁 2. Set the Intention
            </h3>
            <p className="text-sm text-gray-700">
              Seeking harmony? Self-love? A gift for someone dear? Let Align
              tune into your purpose.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#6b4b9a] mb-2">
              💫 3. Get Your Jewelry Reading
            </h3>
            <p className="text-sm text-gray-700">
              Receive a personalized list of gems and styles that align with
              your energy, vibe, and the stars.
            </p>
          </div>
        </div>

        {/* Align Me Button */}
        <button
          onClick={handleAlignClick}
          className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition"
        >
          ✨ Align Me ✨
        </button>
      </div>
    </section>
  );
};

export default CelestialMatch;
