import Link from "next/link";
import {
  LuCircleUserRound,
  LuShoppingBag,
  LuShoppingCart,
} from "react-icons/lu";

export default function NavigationMenu() {
  return (
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
  );
}
