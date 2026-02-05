import type { Metadata } from "next";
import { satoshi } from "./fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nuwat Ventures - Strategic Growth & Brand Architecture",
  description:
    "Nuwat Ventures delivers sovereign brand architecture, unassailable scale engines, and fortified digital solutions. We build disciplined systems that drive clarity, execution, and dominance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${satoshi.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
