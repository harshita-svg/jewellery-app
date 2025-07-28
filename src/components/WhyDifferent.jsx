// components/WhyDifferent.jsx
import React from "react";

const WhyDifferent = () => {
  return (
    <div className="py-20 px-6 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#5c4c79] mb-4 tracking-wide">
        Where Soul Meets Craft
      </h2>
      <p className="text-center text-[#7c6d94] mb-12 max-w-2xl mx-auto leading-relaxed">
        Dive into the depth of artistry and intuition that shapes every jewel we
        offer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Card */}
        <div className="bg-[#f7f4fb] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#5c4c79] mb-3">
            Why We’re Different
          </h3>
          <p className="text-[#7c6d94] leading-relaxed">
            Our jewels don’t just shine—they whisper your story. From celestial
            alignment to personalized intention, every piece is more than
            adornment— it's energy, meaning, and legacy.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-[#f7f4fb] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#5c4c79] mb-3">
            The Artisans Behind the Magic
          </h3>
          <p className="text-[#7c6d94] leading-relaxed">
            Our handcrafted creations are born in sacred spaces, guided by
            skilled hands and generations of wisdom. Every curve, cut, and
            setting is a ritual of devotion— connecting earth, metal, and mystic
            soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyDifferent;
