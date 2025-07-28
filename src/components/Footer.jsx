import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pastelPeach via-pastelLavender to-pastelBlue bg-[length:400%_400%] animate-gradient-x px-8 py-12 text-gray-800">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700">Jewels & Align</h2>
          <p className="italic text-sm mt-2 text-gray-700">
            Rooted in Ritual, Made for Radiance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold text-purple-700 mb-2">
            Navigation
          </h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>Align</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-md font-semibold text-purple-700 mb-2">
            Explore
          </h3>
          <ul className="space-y-1 text-sm">
            <li>Necklaces</li>
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Gifting</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-md font-semibold text-purple-700 mb-2">
            Stay Connected
          </h3>
          <div className="flex space-x-4 text-2xl text-purple-700 mb-3">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
          <p className="text-sm text-gray-700">contact@jewelsalign.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs mt-10 text-gray-600 border-t border-gray-300 pt-4">
        © 2025 Jewels & Align. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
