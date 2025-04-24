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
          <div className="container mx-auto flex items-center justify-between px-4 py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative mr-2 h-12 w-12 md:w-24">
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

            <SearchBar />

            <NavigationMenu />
          </div>
        </header>
      )}

      {!isDesktopOrLaptop && (
        <>
          <header className="w-full border-b border-gray-200">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
              <Link href="/" className="flex items-center">
                <div className="relative mr-2 h-12 w-12 md:w-24">
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
              <div className="rounded-md border border-gray-300 p-1">
                <AiOutlineMenu size={36} />
              </div>
            </div>
          </header>

          <div className="w-full py-2">
            <SearchBar />
          </div>
        </>
      )}
    </>
  );
}
