import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";




export const metadata: Metadata = {
  title: "Umair Ullah Portfolio",
  description: "Umair's Portfolio a complete overview of my skill and mindset.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}