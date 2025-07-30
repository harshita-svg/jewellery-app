import React from "react";
import { FaSearch, FaHeart, FaShoppingBag, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-purple-600 transition"
          >
            <FaHome className="text-base" />
          </Link>
          <Link to="/rings" className="hover:text-purple-600 transition">
            Rings
          </Link>
          <Link to="/earrings" className="hover:text-purple-600 transition">
            Earrings
          </Link>
          <Link to="/necklaces" className="hover:text-purple-600 transition">
            Necklaces
          </Link>
          <Link to="/bracelets" className="hover:text-purple-600 transition">
            Bracelets
          </Link>
          <Link to="/completelook" className="hover:text-purple-600 transition">
            Complete Look
          </Link>
          <Link to="/charmbox" className="hover:text-purple-600 transition">
            Charm Box
          </Link>
        </div>

        {/* Icon Set */}
        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FaSearch
            className="cursor-pointer hover:text-purple-600 transition"
            title="Search"
          />
          <FaHeart
            className="cursor-pointer hover:text-purple-600 transition"
            title="Wishlist"
          />
          <FaShoppingBag
            className="cursor-pointer hover:text-purple-600 transition"
            title="Cart"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
