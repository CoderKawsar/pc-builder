import Image from "next/image";
import RatingStars from "./RatingStars";
import { useDispatch } from "react-redux";
import { selectComponent } from "@/store/reducers/buildPcSlice";
import { useRouter } from "next/router";

const ProductCardOnBuild = ({ product }) => {
  const { _id, image, productName, category, status, price, averageRating } =
    product;

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSelectProduct = () => {
    dispatch(selectComponent({ _id, image, productName, category, price }));
    router.push("/build-pc");
  };

  return (
    <div className="bg-neutral-50 shadow-md rounded-lg p-4 flex">
      <div className="w-40 h-32 mr-4">
        <Image
          src={image}
          alt={productName}
          width={160}
          height={128}
          className="rounded-md w-40 h-32"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-2">{productName}</h2>
        <p className="text-gray-600 mb-2">{category}</p>
        <p className="mb-3">
          Status: <span className="text-green-600">{status}</span>
        </p>
        <RatingStars rating={averageRating} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mb-2 font-medium text-xl">${price}</p>
        <button
          onClick={handleSelectProduct}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ProductCardOnBuild;
