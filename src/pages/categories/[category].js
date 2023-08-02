import Products from "@/components/UI/Products";
import SectionTitle from "@/components/UI/SectionTitle";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Category({ products }) {
  const router = useRouter();
  const category = router.query.category;

  return (
    <div className="mt-32">
      <Head>
        <title>Build PC - Category/{category}</title>
      </Head>
      <SectionTitle title={category} />
      <Products products={products} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://back-end-blue-gamma.vercel.app/api/v1/products/categories/${params.category}`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://back-end-blue-gamma.vercel.app/api/v1/categories"
  );
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
