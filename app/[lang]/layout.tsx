import type { Metadata } from "next";
import "../globals.css";
import { satoshi } from "../fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Nuwat | Sovereign Operating Partner",
  description: "We Architect Dominance.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang}>
      <body className={`${satoshi.variable} antialiased`}>
      <NextTopLoader />
        <Navbar nav={dict.nav} common={dict.common} lang={lang} />
        {children}
        <Footer content={dict.footer} />
      </body>
    </html>
  );
}
