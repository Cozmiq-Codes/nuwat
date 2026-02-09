import React from "react";
import Hero from "@/components/pages/faq/Hero";
import Faq from "@/components/pages/faq/Faq";
import CTA from "@/components/global/cta/CTA";

import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const faqItems = Object.keys(dict.faq.items).map((key) => ({
    id: key,
    ...dict.faq.items[key as keyof typeof dict.faq.items],
  }));

  return (
    <>
      <Hero content={dict.faq.hero} />
      <Faq items={faqItems} />
      <CTA content={dict.home.cta} common={dict.common} />
    </>
  );
};
export default Page;
