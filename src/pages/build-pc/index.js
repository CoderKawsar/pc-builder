import CategoriesOnBuild from "@/components/UI/CategoriesOnBuild";
import SectionTitle from "@/components/UI/SectionTitle";
import PrivateRoute from "@/components/layouts/PrivateRoute";
import Head from "next/head";
import React from "react";

function BuildPcPage({ categories }) {
  const handleCompleteBuild = () => {};
  return (
    <div>
      <Head>
        <title>Build PC - Dream PC builder</title>
      </Head>
      <PrivateRoute>
        <div className="mt-32">
          <SectionTitle title="Build PC" />
          <CategoriesOnBuild categories={categories} />
          <div className="flex justify-end">
            <button
              onClick={handleCompleteBuild}
              className="btn btn-primary mt-8"
            >
              Complete
            </button>
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/api/v1/categories");
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
}

export default BuildPcPage;
