import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
  const { _id, image, productName, category, price, status, averageRating } =
    product;

  return (
    <Link href={`/products/${_id}`}>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src={image}
          alt={productName}
          className="h-60 w-full object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-4">{productName}</h2>
        <p className="text-gray-500">{category}</p>
        <p className="text-green-600 font-semibold mt-1">${price.toFixed(2)}</p>
        <p
          className={status === "In Stock" ? "text-green-600" : "text-red-600"}
        >
          {status}
        </p>
        <RatingStars rating={averageRating} />
      </div>
    </Link>
  );
};

export default ProductCard;
