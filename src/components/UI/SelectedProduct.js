import { removeComponent } from "@/store/reducers/buildPcSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

function SelectedProduct({ product, thisCategory }) {
  const { image, productName, category, price } = product;

  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeComponent({ category: product.category }));
  };
  return (
    <div className="flex p-4">
      <div>
        <Image
          src={image}
          height={96}
          width={144}
          alt={productName}
          className="h-16 w-24"
        />
      </div>
      <div className="ml-8 w-full flex justify-between items-center border-r-2">
        <div>
          <p className="text-blue-400 font-medium">{category}</p>
          <h3 className="font-medium text-md">{productName}</h3>
        </div>
        <p className="font-medium text-xl pr-4">${price}</p>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={handleRemoveProduct} className="mx-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
          </svg>
        </button>
        <Link href={`/build-pc/${thisCategory.slug}`} className="mx-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-refresh-cw"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default SelectedProduct;
