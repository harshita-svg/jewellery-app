import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 min-h-[80vh]">
      {/* Left side - Text Content */}
      <div className="flex items-center justify-center w-full md:w-1/2 mb-10 md:mb-0">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-semibold text-gray-800 mb-6">
            Adorned by the Stars
          </h1>
          <p className="text-lg italic text-gray-600 mb-6 leading-relaxed">
            Whispered by moons, adorned in gleam, <br />
            A tale of love, like a silken dream. <br />
            Crafted to charm with a timeless glow, <br />
            Jewelry that lets your starlight show.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-2 border-2 border-gray-600 rounded-full hover:bg-black hover:text-white transition">
              Step Into Elegance
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Gradient Shadowed Video Placeholder */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-[90%] h-[300px] md:h-[400px] rounded-xl flex items-center justify-center text-gray-500 text-lg bg-gray-100 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/0 to-white/10 pointer-events-none rounded-xl" />
          Video Placeholder
        </div>
      </div>
    </section>
  );
};

export default Hero;
