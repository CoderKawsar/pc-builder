import { removeComponent } from "@/store/reducers/buildPcSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import SelectedProduct from "./SelectedProduct";

function CategoryOnBuild({ category, categories }) {
  const { pc } = useSelector((state) => state.buildPC);

  const categoryTitles = categories.map((category) => category.title);

  let thisCategoryProduct = pc.filter(
    (product) => product.category === category.title
  );

  if (category.slug === "others") {
    thisCategoryProduct = pc.filter(
      (product) => !categoryTitles.includes(product.category)
    );
  }

  thisCategoryProduct = thisCategoryProduct[0];

  return (
    <div>
      {!thisCategoryProduct && (
        <div className="p-4 bg-neutral-50 shadow-md rounded-lg flex justify-between">
          <div className=" flex items-center">
            <div className="h-16 w-24">
              <Image
                src={category.image}
                height={96}
                width={144}
                alt={category.title}
                className="h-16 w-24"
              />
            </div>
            <div className="ml-8 h-full flex items-center">
              <h3 className="text-xl font-medium">{category.title}</h3>
            </div>
          </div>
          <div>
            <Link
              href={`build-pc/${category.slug}`}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Add
            </Link>
          </div>
        </div>
      )}
      {thisCategoryProduct && (
        <SelectedProduct
          product={thisCategoryProduct}
          thisCategory={category}
        />
      )}
    </div>
  );
}

export default CategoryOnBuild;
