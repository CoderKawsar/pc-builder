import React from "react";
import ProductCard from "./ProductCard";

function Products({ products }) {
  return (
    <div className="mt-12 grid grid-cols-3 gap-12">
      {products?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
}

export default Products;
