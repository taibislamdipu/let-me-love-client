import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  return (
    <div className="lg:flex-1 lg:max-w-xl mx-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <LuSearch className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}
