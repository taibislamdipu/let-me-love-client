import {
  LuCircleUserRound,
  LuShoppingBag,
  LuShoppingCart,
} from "react-icons/lu";

import Logo from "/public/logo.jpg";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-24 mr-2">
            <Image
              src={Logo}
              alt="Fresh Health Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[#FF00FF]">Let Me Love</span>
            <span className="text-xs text-gray-500">We care for all</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            {/* <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" /> */}
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/shop" className="flex flex-col items-center text-sm">
            <LuShoppingBag size={23} className=" text-gray-700" />
            <span>Shop</span>
          </Link>

          <Link
            href="/cart"
            className="flex flex-col items-center text-sm relative"
          >
            <div className="relative">
              <LuShoppingCart size={23} className=" text-gray-700" />

              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                10
              </span>
            </div>
            <span>Cart</span>
          </Link>

          <Link href="/account" className="flex flex-col items-center text-sm">
            <LuCircleUserRound size={23} className=" text-gray-700" />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
