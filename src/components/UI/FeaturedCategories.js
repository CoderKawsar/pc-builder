import cpuImage from "../../assets/img/categories/cpu or processor.jpg";
import motherboardImage from "@/assets/img/categories/motherboard.png";
import ramImage from "@/assets/img/categories/RAM.webp";
import powerSupplyImage from "@/assets/img/categories/Power supply.png";
import storageDeviceImage from "@/assets/img/categories/storage device.jpg";
import monitorImage from "@/assets/img/categories/monitor.png";
import othersTypeImage from "@/assets/img/categories/others(mouse, keyboard, gpu).webp";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = () => {
  const categories = [
    { title: "CPU / Processor", image: cpuImage, link: "/categories/cpu" },
    {
      title: "Motherboard",
      image: motherboardImage,
      link: "/categories/motherboard",
    },
    { title: "RAM", image: ramImage, link: "/categories/ram" },
    {
      title: "Power Supply Unit",
      image: powerSupplyImage,
      link: "/categories/power-supply",
    },
    {
      title: "Storage Device",
      image: storageDeviceImage,
      link: "/categories/storage-device",
    },
    { title: "Monitor", image: monitorImage, link: "/categories/monitor" },
    {
      title: "Others(Keyboard, Mouse, GPU, ...)",
      image: othersTypeImage,
      link: "/categories/others",
    },
  ];

  return (
    <div>
      {/* First 6 elements of categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-20">
        {categories.slice(0, 6).map((category) => (
          <Link href={category.link} key={category.title}>
            <div className="flex justify-center">
              <div className="w-[420px]">
                <div className="bg-white rounded-lg h-72 shadow-md transform transition-transform hover:scale-110 p-4 text-center">
                  <div className="flex items-center justify-center text">
                    <div className="relative w-72 h-48">
                      <Image
                        src={category.image}
                        alt={category.title}
                        className="h-full w-full rounded-md object-cover"
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
        <Link href={categories[6].link} key={categories[6].title}>
          <div className="w-[420px]">
            <div className="bg-white rounded-lg h-72 shadow-md transform transition-transform hover:scale-110 p-4 text-center">
              <div className="flex items-center justify-center text">
                <div className="relative w-72 h-48">
                  <Image
                    src={categories[6].image}
                    alt={categories[6].title}
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-md"
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
