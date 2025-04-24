import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href="#"
      key={product.id}
      draggable={false}
      className="md:border-gay-200 overflow-hidden rounded-lg bg-white transition duration-300 md:border md:hover:shadow-md"
    >
      <div className="relative h-48 w-full rounded-lg bg-gray-50 md:h-64 md:bg-white">
        {/* {product.discount && (
          <div
            className={`absolute left-2 top-2 ${product.specialColor || "bg-red-500"} z-10 rounded-md px-2 py-1 text-white`}
          >
            - {product.discount}
          </div>
        )} */}
        {product.specialText && (
          <div className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-bold text-pink-600">
            {product.specialText}
          </div>
        )}

        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          draggable={false}
          className="object-contain"
        />
      </div>

      <div className="p-0 md:p-4">
        <h3 className="mb-2 line-clamp-2 h-12 font-medium text-gray-800">
          {product.name}
        </h3>
        <div className="mb-4 flex items-center">
          <span className="text-lg font-bold text-red-500">
            ৳{product.currentPrice.toFixed(2)}
          </span>
          <span className="ml-2 text-sm text-gray-500 line-through">
            ৳{product.originalPrice.toFixed(2)}
          </span>
        </div>
        {/* <div className="flex flex-col gap-2 md:flex-row">
          <button className="group flex gap-1 rounded-md border border-green-600 p-2 transition hover:bg-green-600 hover:text-white">
            <LuShoppingCart className="h-5 w-5 text-green-600 transition group-hover:text-white" />
            Add to Cart
          </button>
          <button className="flex-1 rounded-md border border-green-600 bg-white px-4 py-2 text-green-600 transition hover:bg-green-600 hover:text-white">
            Buy Now
          </button>
        </div> */}
      </div>
    </Link>
  );
}
