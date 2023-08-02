import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = ({ categories }) => {
  return (
    <div>
      {/* First 6 elements of categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-20">
        {categories.slice(0, 6).map((category) => (
          <Link href={`/categories/${category.slug}`} key={category.title}>
            <div className="flex justify-center">
              <div className="w-[420px]">
                <div className="bg-white rounded-lg h-72 shadow-md transform transition-transform hover:scale-110 p-4 text-center">
                  <div className="flex items-center justify-center text">
                    <div className="relative w-72 h-48">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={288}
                        height={192}
                        className="w-72 h-48 rounded-md object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-gray-800 font-semibold mt-8">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* The 7th element of categories */}
      <div className="flex justify-center mt-20">
        <Link
          href={`/categories/${categories[6].slug}`}
          key={categories[6].title}
        >
          <div className="w-[420px]">
            <div className="bg-white rounded-lg h-72 shadow-md transform transition-transform hover:scale-110 p-4 text-center">
              <div className="flex items-center justify-center text">
                <div className="relative w-72 h-48">
                  <Image
                    src={categories[6].image}
                    alt={categories[6].title}
                    width={288}
                    height={192}
                    className="w-72 h-48 rounded-md"
                  />
                </div>
              </div>
              <h3 className="text-gray-800 font-semibold mt-8">
                {categories[6].title}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCategories;
