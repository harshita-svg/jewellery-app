import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { FaStar } from "react-icons/fa";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const occasions = [
  "Wedding Glow",
  "Daily Charm",
  "Gift Love",
  "Festive Joy",
  "Office Shine",
];

const sortOptions = ["Price: Low to High", "Price: High to Low", "Best Seller"];

const Charms = () => {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const charmProducts = products.filter((p) => p.type === "charm");

  let filteredProducts = charmProducts;

  if (selectedOccasion) {
    filteredProducts = filteredProducts.filter(
      (p) => p.occasion === selectedOccasion
    );
  }

  if (sortBy === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Title */}
      <h2 className="text-4xl font-bold text-purple-700 mb-10 text-center flex items-center justify-center gap-3">
        <FaStar className="text-5xl text-yellow-400" />
        Charms Collection
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        {/* Sort */}
        <div className="w-35">
          <Listbox value={sortBy} onChange={setSortBy}>
            <div className="relative">
              <ListboxButton className="w-full rounded-full border border-purple-300 bg-white py-1 px-3 text-purple-700 text-sm font-medium shadow-sm flex justify-between items-center">
                {sortBy || "Sort by"}
                <ChevronUpDownIcon className="h-4 w-4 text-purple-500 ml-1" />
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/10">
                {sortOptions.map((option, idx) => (
                  <ListboxOption
                    key={idx}
                    value={option}
                    as="li"
                    className="cursor-pointer select-none py-1.5 px-4 text-sm ui-active:bg-purple-100"
                  >
                    {option}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        {/* Occasion Filter */}
        <div className="w-44">
          <Listbox value={selectedOccasion} onChange={setSelectedOccasion}>
            <div className="relative">
              <ListboxButton className="w-full rounded-full border border-purple-300 bg-white py-1 px-3 text-purple-700 text-sm font-medium shadow-sm flex justify-between items-center">
                {selectedOccasion || "Filter by Occasion"}
                <ChevronUpDownIcon className="h-4 w-4 text-purple-500 ml-1" />
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/10">
                {occasions.map((occasion, idx) => (
                  <ListboxOption
                    key={idx}
                    value={occasion}
                    as="li"
                    className="cursor-pointer select-none py-1.5 px-4 text-sm ui-active:bg-purple-100"
                  >
                    {occasion}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No charms found.</p>
      )}
    </div>
  );
};

export default Charms;
