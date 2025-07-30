import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { GiEarrings } from "react-icons/gi";
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

const Earrings = () => {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const earringProducts = products.filter((p) => p.type === "earring");

  let filteredProducts = earringProducts;

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
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
      <h2 className="text-4xl font-bold text-pink-700 mb-10 text-center flex items-center justify-center gap-3">
        <GiEarrings className="text-5xl text-pink-500" />
        Earrings Collection
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <div className="w-35">
          <Listbox value={sortBy} onChange={setSortBy}>
            <div className="relative">
              <ListboxButton className="w-full rounded-full border border-pink-300 bg-white py-1 px-3 text-pink-700 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 flex justify-between items-center">
                {sortBy || "Sort by"}
                <ChevronUpDownIcon
                  className="h-4 w-4 text-pink-500 ml-1"
                  aria-hidden="true"
                />
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
                {sortOptions.map((option, idx) => (
                  <ListboxOption
                    key={idx}
                    value={option}
                    as="li"
                    className="cursor-pointer select-none py-1.5 px-4 text-sm ui-active:bg-pink-100 ui-active:text-pink-800 ui-not-active:text-pink-700"
                  >
                    {option}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        <div className="w-44">
          <Listbox value={selectedOccasion} onChange={setSelectedOccasion}>
            <div className="relative">
              <ListboxButton className="w-full rounded-full border border-pink-300 bg-white py-1 px-3 text-pink-700 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 flex justify-between items-center">
                {selectedOccasion || "Filter by Occasion"}
                <ChevronUpDownIcon
                  className="h-4 w-4 text-pink-500 ml-1"
                  aria-hidden="true"
                />
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
                {occasions.map((occasion, idx) => (
                  <ListboxOption
                    key={idx}
                    value={occasion}
                    as="li"
                    className="cursor-pointer select-none py-1.5 px-4 text-sm ui-active:bg-pink-100 ui-active:text-pink-800 ui-not-active:text-pink-700"
                  >
                    {occasion}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No earrings found.</p>
      )}
    </div>
  );
};

export default Earrings;
