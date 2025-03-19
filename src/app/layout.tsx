import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LoLpedia",
  description: "All You Want to Know About LoL Champions and Items",
  icons: {
    icon: "./public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen grid grid-rows-[1, 1fr] bg-black`}
      >
        <nav className="bg-black border-b border-gray-700 text-white">
          <ul className="flex flex-row justify-around items-center">
            <Link href={"/"}>
              <li className="py-2 px-32 hover:bg-gray-700">Home</li>
            </Link>
            <Link href={"/champions"}>
              <li className="py-2 px-32 hover:bg-gray-700">Champions</li>
            </Link>
            <Link href={"/items"}>
              <li className="py-2 px-32 hover:bg-gray-700">Items</li>
            </Link>
            <Link href={"/rotation"}>
              <li className="py-2 px-32 hover:bg-gray-700">Rotation</li>
            </Link>
          </ul>
        </nav>
        <div className="min-h-screen w-full flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
