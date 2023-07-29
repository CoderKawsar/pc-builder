import FeaturedCategories from "@/components/UI/FeaturedCategories";
import Products from "@/components/UI/Products";
import Head from "next/head";

export default function Home({ featuredProducts }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>PC Builder - Home</title>
      </Head>
      <div>
        {/* ======================
        Featured products 
        =======================*/}
        <div>
          <h2 className="text-center text-4xl uppercase mb-12 pt-32">
            Featured Products
          </h2>
          <Products products={featuredProducts} />
        </div>
        {/* ======================
        Featured products 
        =======================*/}
        <div>
          <h2 className="text-center text-4xl uppercase pt-32 mb-12">
            Featured Categories
          </h2>
          <FeaturedCategories />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products/featured");
  const featuredProducts = await res.json();

  return {
    props: {
      featuredProducts: featuredProducts,
    },
    revalidate: 60,
  };
};
