import React from "react";
import CategoryOnBuild from "./CategoryOnBuild";

function CategoriesOnBuild({ categories }) {
  return (
    <div className="flex flex-col gap-4 ">
      {categories.map((category) => (
        <CategoryOnBuild
          key={category._id}
          category={category}
          categories={categories}
        />
      ))}
    </div>
  );
}

export default CategoriesOnBuild;
