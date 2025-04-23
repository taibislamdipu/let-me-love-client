import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";

export default function BestSeller() {
  const products = [
    {
      id: 1,
      name: "Renee midnight kohl kajal pencil",
      image: "https://i.ibb.co.com/N23c19b8/renee-midnight-khol-kajol.jpg",
      currentPrice: 860,
      originalPrice: 1000,
      discount: "25% off",
    },
    {
      id: 2,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 3,
      name: "Streax Hair Serum 115ml",
      image: "https://i.ibb.co.com/BHng3kKb/streax.jpg",
      currentPrice: 562.5,
      originalPrice: 750.0,
      discount: "25%",
    },
    {
      id: 4,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 5,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 6,
      name: "Renee midnight kohl kajal pencil",
      image: "https://i.ibb.co.com/N23c19b8/renee-midnight-khol-kajol.jpg",
      currentPrice: 860,
      originalPrice: 1000,
      discount: "25% off",
    },
    {
      id: 7,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 8,
      name: "Streax Hair Serum 115ml",
      image: "https://i.ibb.co.com/BHng3kKb/streax.jpg",
      currentPrice: 562.5,
      originalPrice: 750.0,
      discount: "25%",
    },
    {
      id: 9,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 10,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 11,
      name: "Renee midnight kohl kajal pencil",
      image: "https://i.ibb.co.com/N23c19b8/renee-midnight-khol-kajol.jpg",
      currentPrice: 860,
      originalPrice: 1000,
      discount: "25% off",
    },
    {
      id: 12,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 13,
      name: "Streax Hair Serum 115ml",
      image: "https://i.ibb.co.com/BHng3kKb/streax.jpg",
      currentPrice: 562.5,
      originalPrice: 750.0,
      discount: "25%",
    },
    {
      id: 14,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 15,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 16,
      name: "Renee midnight kohl kajal pencil",
      image: "https://i.ibb.co.com/N23c19b8/renee-midnight-khol-kajol.jpg",
      currentPrice: 860,
      originalPrice: 1000,
      discount: "25% off",
    },
    {
      id: 17,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 18,
      name: "Streax Hair Serum 115ml",
      image: "https://i.ibb.co.com/BHng3kKb/streax.jpg",
      currentPrice: 562.5,
      originalPrice: 750.0,
      discount: "25%",
    },
    {
      id: 19,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
    {
      id: 20,
      name: "Swiss Beauty holographic eyeliner milky way",
      image:
        "https://i.ibb.co.com/zV7ffxvT/swiss-beauty-holographic-eyeliner-milky-way.webp",
      currentPrice: 750.0,
      originalPrice: 1150.0,
      discount: "৳400.00",
      specialColor: "bg-red-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Best Selling Products
      </h2>

      <div className="relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <div className="relative h-64 w-full">
                {product.discount && (
                  <div
                    className={`absolute top-2 left-2 ${product.specialColor || "bg-red-500"} text-white px-2 py-1 rounded-md z-10`}
                  >
                    - {product.discount}
                  </div>
                )}
                {product.specialText && (
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-pink-600 z-10">
                    {product.specialText}
                  </div>
                )}

                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2 h-12 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-red-500 font-bold text-lg">
                    ৳{product.currentPrice.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through text-sm ml-2">
                    ৳{product.originalPrice.toFixed(2)}
                  </span>
                  {/* {product.discount && !product.isSpecial && (
                    <span className="ml-2 text-green-600">
                      - {product.discount}
                    </span>
                  )} */}
                  {/* {product.isSpecial && (
                    <span className="ml-2 text-green-600">
                      - {product.discount}
                    </span>
                  )} */}
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <button className="p-2 border group border-green-600 transition rounded-md hover:bg-green-600 flex gap-1 hover:text-white">
                    <LuShoppingCart className="h-5 w-5  text-green-600 group-hover:text-white transition" />
                    Add to Cart
                  </button>
                  <button className="flex-1 transition bg-white border hover:bg-green-600 border-green-600 text-green-600 py-2 px-4 rounded-md hover:text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
