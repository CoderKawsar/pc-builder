import CategoriesOnBuild from "@/components/UI/CategoriesOnBuild";
import SectionTitle from "@/components/UI/SectionTitle";
import PrivateRoute from "@/components/layouts/PrivateRoute";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

function BuildPcPage({ categories }) {
  const { components } = useSelector((state) => state.buildPC);

  const handleCompleteBuild = () => {
    alert("success");
  };
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
              className={`btn btn-primary mt-8 ${
                components.length < 6 ? "btn-disabled" : ""
              }`}
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
  const res = await fetch(
    "https://back-end-blue-gamma.vercel.app/api/v1/categories"
  );
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
}

export default BuildPcPage;
