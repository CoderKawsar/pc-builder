import React from "react";
import ProductCardOnBuild from "./ProductCardOnBuild";

function ProductsOnBuild({ products }) {
  return (
    <div className="flex flex-col gap-8">
      {products?.map((product) => (
        <ProductCardOnBuild key={product?._id} product={product} />
      ))}
    </div>
  );
}

export default ProductsOnBuild;
