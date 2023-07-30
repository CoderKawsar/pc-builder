import FeaturedCategories from "@/components/UI/FeaturedCategories";
import HeroSection from "@/components/UI/HeroSection";
import Products from "@/components/UI/Products";
import SectionTitle from "@/components/UI/SectionTitle";
import HomePageLayout from "@/components/layouts/HomePageLayout";
import Head from "next/head";

export default function Home({ featuredProducts }) {
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
        <div className="pt-32">
          <SectionTitle title="Featured Categories" />
          <FeaturedCategories />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

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
