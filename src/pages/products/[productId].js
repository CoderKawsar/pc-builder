import RatingStars from "@/components/UI/RatingStars";
import Head from "next/head";

const ProductDetailPage = ({ product }) => {
  const {
    image,
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    averageRating,
    reviews,
  } = product;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Build PC - {productName}</title>
      </Head>
      <div className="mb-4">
        <img
          src={image}
          alt={productName}
          className="object-cover rounded-md"
          style={{ height: "500px", width: "700px" }}
        />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold">{productName}</h1>
        <p className="text-gray-600 my-2">Category: {category}</p>
        <p className="mb-2">
          Status: <span className="text-green-600">{status}</span>
        </p>
        <p className="mb-2">
          Price: <span className="font-medium">${price}</span>
        </p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="border-gray-200 mb-6 pt-4">
          <h2 className="text-xl font-bold mb-2 pb-2 border-b-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside">
            {Object.entries(keyFeatures).map(([feature, value]) => (
              <li key={feature} className="mb-2">
                <span className="font-bold">{feature}: </span>
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 pb-2 border-b-2">Rating</h2>
          <RatingStars rating={averageRating} />
          <p className="text-yellow-500 mb-1">
            Rating: {averageRating} out of 5 stars
          </p>
        </div>
        <div className="border-gray-200 mt-10">
          <h2 className="text-xl font-bold mt-4 mb-4 pb-2 border-b-2">
            Reviews
          </h2>
          <ul>
            {reviews.map((review, index) => (
              <li key={index} className="mb-4">
                <p className="text-md font-bold">{review.username}</p>
                <RatingStars rating={review.rating} />
                <p className="text-yellow-500 mb-1">
                  Rating: {review.rating} out of 5 stars
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Comment: </span>
                  {review.comment}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://back-end-blue-gamma.vercel.app/api/v1/products/${params.productId}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  // Assuming your API can provide a list of product IDs
  const res = await fetch(
    "https://back-end-blue-gamma.vercel.app/api/v1/products"
  ); // Fetch the list of products from your API
  const products = await res.json();

  // Generate the paths for all products
  const paths = products.map((product) => ({
    params: { productId: product._id }, // Assuming your product object has a unique "productId" field
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetailPage;
