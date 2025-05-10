import React from "react";

import PropTypes from "prop-types";

const Product = ({ product, handleAddToCart }) => {
  const { title, price, description,images,rating } = product;

  return (
    <div className="flex flex-col border border-amber-400 rounded-2xl shadow-md p-4 m-2 w-full h-full">
      <div className="flex flex-col items-center flex-grow">
        <img src={images[0]} alt={title} className="h-40 w-auto object-contain" />
        <h2 className="text-center font-semibold text-lg mt-2">{title}</h2>
        <p className="text-blue-600 font-medium mt-1">${price}</p>
        <p className="text-gray-600 text-sm text-center my-2">
          {description.slice(0, 100)}...
        </p>
        <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white mt-4 py-2 rounded-md w-full"
      >
        Buy Now
      </button>
    </div>
  );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Product;
