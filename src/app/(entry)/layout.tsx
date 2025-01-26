import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { AOSInit } from "../components/AOSProvider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";



// Import your Nav and Footer components


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelechi Ugwu | Fullstack Software Engineer",
  description:
    "Fullstack Software Engineer, Proficient with Next.js, React.js, React Native, Express.js, and TypeScript. Great with communication and leadership qualities.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AOSInit />
        {/* Navigation */}
        {/* <Nav /> */}

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
        <MobileMenu/>
      </body>
    </html>
  );
}
