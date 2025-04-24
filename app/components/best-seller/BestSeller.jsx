import products from "../../../data/products.json";
import ProductCard from "../ProductCard";

export default function BestSeller() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Best Selling Products
      </h2>

      <div className="relative">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products
            .filter((product) => product.bestseller)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
