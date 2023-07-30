import Products from "@/components/UI/Products";
import SectionTitle from "@/components/UI/SectionTitle";
import React from "react";

function Category({ products }) {
  return (
    <div className="mt-32">
      <SectionTitle title="Products" />
      <Products products={products} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/products/categories/${params.category}`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:5000/api/v1/categories");
  const categories = await res.json();

  // Generate the paths for all products
  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Category;
