import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Let Me Love | Beauty Products for Women in Bangladesh – Skincare, Perfume & More",
  description:
    "Shop 100% authentic skincare, perfumes, and cosmetics for women at Let Me Love. Delivery all over Bangladesh. Feel confident, feel loved.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
