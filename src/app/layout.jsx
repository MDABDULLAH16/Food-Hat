import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";
// import logo from '/logo.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | YunTun KhaiJan",
    default: "YunTun KhaiJan"
  },
  description: "Best Fast Food in NoaKhali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="  mx-auto p-4">
          <header className="flex justify-between items-center">
            {/* <h1 className="font-bold text-3xl">Food Hat</h1> */}
            <Image src='/logo.png' width={150} height={30} alt="YunTun Khaijan" />
            <div>
              <nav className="flex justify-center items-center gap-4 flex-wrap">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/foods">Foods</NavLink>
                <NavLink href="/reviews">Reviews</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </nav>
            </div>
          </header>
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
