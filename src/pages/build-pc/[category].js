import ProductsOnBuild from "@/components/UI/ProductsOnBuild";
import SectionTitle from "@/components/UI/SectionTitle";
import PrivateRoute from "@/components/layouts/PrivateRoute";
import Head from "next/head";
import { useRouter } from "next/router";

function Category({ products }) {
  const router = useRouter();
  const category = router.query.category;

  return (
    <PrivateRoute>
      <div className="mt-32">
        <Head>
          <title>Build PC - Category/{category}</title>
        </Head>
        <SectionTitle title={category} />
        <ProductsOnBuild products={products} />
      </div>
    </PrivateRoute>
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
