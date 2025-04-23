import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Skincare",
      image: "https://i.ibb.co.com/TB9QcgS9/skincare.jpg",
      slug: "skincare",
    },
    {
      id: 2,
      name: "Perfume",
      image:
        "https://i.ibb.co.com/ZpCvHSkX/71h-K0-a-DML-AC-UF1000-1000-QL80.jpg",
      slug: "perfume",
    },
    {
      id: 3,
      name: "More",
      image: "https://i.ibb.co.com/TB9QcgS9/skincare.jpg",
      slug: "more",
    },
  ];

  return (
    <div className="container-main">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link
            href="#"
            key={category.id}
            className="border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-4 flex flex-col items-center">
              <div className="relative w-full h-32 mb-3">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-center font-medium text-gray-800">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
