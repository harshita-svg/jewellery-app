import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between w-full max-w-xs mx-auto hover:shadow-lg transition-all duration-300">
      {/* Image Section */}
      <div className="h-52 bg-white flex items-center justify-center p-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col items-center text-center gap-1">
        <h3 className="text-lg font-semibold text-purple-700">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.gem}</p>
        <p className="text-sm font-bold text-gray-800">{product.price}</p>

        {/* Button */}
        <button className="mt-3 px-5 py-2 bg-purple-600 text-white text-sm rounded-full hover:bg-purple-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};



export default ProductCard;
