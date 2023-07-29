import React from "react";
import ProductCard from "./ProductCard";

function Products({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {products?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
}

export default Products;
