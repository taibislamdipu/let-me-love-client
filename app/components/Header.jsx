"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import Logo from "/public/logo.jpg";

import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop && (
        <header className="w-full border-b border-gray-200">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 md:w-24 w-12 mr-2 ">
                <Image
                  src={Logo}
                  alt="Fresh Health Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-brand">Let Me Love</span>
                <span className="text-xs text-gray-500">
                  100% Original Product
                </span>
              </div>
            </Link>

            {/* Search Bar */}
            <SearchBar />

            {/* Navigation Menu */}
            <NavigationMenu />
          </div>
        </header>
      )}

      {!isDesktopOrLaptop && (
        <>
          <header className="w-full border-b border-gray-200 ">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div className="relative h-12 md:w-24 w-12 mr-2 ">
                  <Image
                    src={Logo}
                    alt="Fresh Health Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-brand">Let Me Love</span>
                  <span className="text-xs text-gray-500">
                    100% Original Product
                  </span>
                </div>
              </Link>
              <div className="border p-1 border-gray-300 rounded-md">
                <AiOutlineMenu size={36} />
              </div>
            </div>
          </header>

          <div className="py-2 w-full">
            <SearchBar />
          </div>
        </>
      )}
    </>
  );
}
