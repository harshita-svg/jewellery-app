import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { GiNecklaceDisplay } from "react-icons/gi";
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

const Necklaces = () => {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const necklaceProducts = products.filter((p) => p.type === "necklace");

  let filteredProducts = [...necklaceProducts];

  if (selectedOccasion) {
    filteredProducts = filteredProducts.filter(
      (p) => p.occasion === selectedOccasion
    );
  }

  if (sortBy === "Price: Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-indigo-700 mb-10 text-center flex items-center justify-center gap-3">
        <GiNecklaceDisplay className="text-5xl text-indigo-500" />
        Necklaces Collection
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        {/* Sort Dropdown */}
        <div className="w-40">
          <Listbox value={sortBy} onChange={setSortBy}>
            <div className="relative">
              <ListboxButton className="w-full rounded-full border border-indigo-300 bg-white py-1 px-3 text-indigo-700 text-sm font-medium shadow-sm flex justify-between items-center">
                {sortBy || "Sort by"}
                <ChevronUpDownIcon className="h-4 w-4 ml-1 text-indigo-500" />
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/10">
                {sortOptions.map((option, index) => (
                  <ListboxOption
                    key={index}
                    value={option}
                    className="cursor-pointer select-none py-1.5 px-4 text-sm hover:bg-indigo-100 text-indigo-700"
                  >
                    {option}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        {/* Occasion Dropdown */}
        <div className="w-52">
          <Listbox value={selectedOccasion} onChange={setSelectedOccasion}>
            <div className="relative">
              <ListboxButton className="w-full rounded-full border border-indigo-300 bg-white py-1 px-3 text-indigo-700 text-sm font-medium shadow-sm flex justify-between items-center">
                {selectedOccasion || "Filter by Occasion"}
                <ChevronUpDownIcon className="h-4 w-4 ml-1 text-indigo-500" />
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/10">
                {occasions.map((option, index) => (
                  <ListboxOption
                    key={index}
                    value={option}
                    className="cursor-pointer select-none py-1.5 px-4 text-sm hover:bg-indigo-100 text-indigo-700"
                  >
                    {option}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No necklaces found.
        </p>
      )}
    </div>
  );
};

export default Necklaces;
