import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import bkashLogo from "/public/bkash.svg";
import Logo from "/public/logo.jpg";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-green-600 p-6 text-white">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo and Contact Info */}
            <div className="space-y-4">
              <div className="mb-4 space-y-2">
                <Image
                  src={Logo}
                  alt="Easy Health Logo"
                  width={120}
                  height={80}
                  className="rounded-full bg-white/20 p-1"
                />

                <h2 className="text-xl font-bold">Let Me Love</h2>
                <p>
                  Shop 100% authentic skincare, perfumes, and cosmetics for
                  women at Let Me Love. Delivery all over Bangladesh. Feel
                  confident, feel loved.
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <CiLocationOn className="mt-1 h-5 w-5 flex-shrink-0" />
                <p>G3, Motijheel Colony, Dhaka.</p>
              </div>

              <div className="flex items-center space-x-2">
                <FiPhone className="h-5 w-5 flex-shrink-0" />
                <p>01675884882</p>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="mb-4 text-xl font-bold">USEFUL LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/why-shop" className="hover:underline">
                    Why Shop With Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="mb-4 text-xl font-bold">HELP</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/payment" className="hover:underline">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:underline">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/return" className="hover:underline">
                    Return And Replacement
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="hover:underline">
                    Chat With Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 text-xl font-bold">SOCIAL</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.facebook.com/letmelovebd"
                    className="flex items-center gap-1 hover:underline"
                    target="_blank"
                  >
                    <FaFacebookF size={23} />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/letmelovebd"
                    className="flex items-center gap-1 hover:underline"
                    target="_blank"
                  >
                    <FaInstagram size={23} />
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-10 flex flex-col items-center justify-between border-t border-green-500 pt-6 md:flex-row">
            <div>
              <p className="font-medium">Payment Methods</p>
            </div>
            <div className="mt-4 flex space-x-2 md:mt-0">
              <div className="rounded bg-white p-1">
                <Image src={bkashLogo} alt="bKash" width={120} height={80} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-4 text-center text-gray-600">
        <p>
          © 2025 All Rights Reserved - Let Me Love - Beauty Products for Women
          in Bangladesh – Skincare, Perfume & More
        </p>
      </div>
    </footer>
  );
}
