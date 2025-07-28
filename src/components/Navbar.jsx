// src/components/Navbar.jsx
import React from "react";
import { FaSearch, FaHeart, FaShoppingBag, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-white/90 to-[#fbe7f3]/60 backdrop-blur-md text-gray-800 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Brand Logo */}
        <div className="text-2xl font-serif font-semibold tracking-wider text-purple-700">
          LUNARIA
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-purple-600 transition">
            <FaHome className="text-base" /> 
          </a>
          <a href="#" className="hover:text-purple-600 transition">Rings</a>
          <a href="#" className="hover:text-purple-600 transition">Earrings</a>
          <a href="#" className="hover:text-purple-600 transition">Necklaces</a>
          <a href="#" className="hover:text-purple-600 transition">Bracelets</a>
          <a href="#" className="hover:text-purple-600 transition">Complete Look</a>
          <a href="#" className="hover:text-purple-600 transition">Charm Box</a>
        </div>

        {/* Icon Set */}
        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FaSearch className="cursor-pointer hover:text-purple-600 transition" title="Search" />
          <FaHeart className="cursor-pointer hover:text-purple-600 transition" title="Wishlist" />
          <FaShoppingBag className="cursor-pointer hover:text-purple-600 transition" title="Cart" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
