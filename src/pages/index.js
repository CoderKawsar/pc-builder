import FeaturedCategories from "@/components/UI/FeaturedCategories";
import Products from "@/components/UI/Products";
import SectionTitle from "@/components/UI/SectionTitle";
import HomePageLayout from "@/components/layouts/HomePageLayout";
import Head from "next/head";

export default function Home({ featuredProducts, categories }) {
  return (
    <div>
      <Head>
        <title>PC Builder - Home</title>
      </Head>
      <div>
        {/* ======================
        Featured products 
        =======================*/}
        <div>
          <SectionTitle title="Featured Products" />
          <Products products={featuredProducts} />
        </div>

        {/* ======================
        Featured products 
        =======================*/}
        <div className="pt-20 md:pt-32">
          <SectionTitle title="Featured Categories" />
          <FeaturedCategories categories={categories} />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export const getStaticProps = async () => {
  // http://localhost:5000
  const res = await fetch(
    "https://back-end-blue-gamma.vercel.app/api/v1/products/featured"
  );
  const featuredProducts = await res.json();

  const catRes = await fetch(
    "https://back-end-blue-gamma.vercel.app/api/v1/categories"
  );
  const categories = await catRes.json();

  return {
    props: {
      featuredProducts: featuredProducts,
      categories: categories,
    },
    revalidate: 60,
  };
};
