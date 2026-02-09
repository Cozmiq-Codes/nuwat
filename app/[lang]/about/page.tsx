import React from "react";
import AboutHero from "@/components/pages/about/hero/Hero";
import Leadership from "@/components/pages/about/leadership/Leadership";
import HistorySection from "@/components/pages/about/history/HistorySection";
import StatsSection from "@/components/global/stats/StatsSection";
import Vision from "@/components/pages/about/vision/Vision";
import NuwatCode from "@/components/pages/about/nuwat-code/NuwatCode";
import CTA from "@/components/global/cta/CTA";

import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const AboutPage = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const aboutStats = [
    dict.about.stats.items.turnover,
    dict.about.stats.items.execution,
    dict.about.stats.items.authority,
  ];

  const historyItems = Object.keys(dict.about.history.items).map(
    (key, index) => ({
      ...dict.about.history.items[key as keyof typeof dict.about.history.items],
      marker: key,
      side: index % 2 === 0 ? ("left" as const) : ("right" as const),
    }),
  );

  const visionItems = Object.keys(dict.about.vision.items).map(
    (key, index) => ({
      ...dict.about.vision.items[key as keyof typeof dict.about.vision.items],
      id: index + 1,
      image: `/about/vision/icon-0${index + 1}.svg`,
    }),
  );

  const codePrinciples = Object.keys(dict.about.code.items).map(
    (key, index) => ({
      ...dict.about.code.items[key as keyof typeof dict.about.code.items],
      id: index + 1,
      image: `/about/nuwat-code/icon-0${index + 1}.svg`,
    }),
  );

  return (
    <>
      <AboutHero content={dict.about.hero} />
      <Leadership content={dict.about.leadership} />
      <HistorySection
        heading={dict.about.history.title}
        subtitle={dict.about.history.subtitle}
        items={historyItems}
      />
      <StatsSection heading={dict.about.stats.title} stats={aboutStats} />
      <Vision title={dict.about.vision.title} items={visionItems} />
      <NuwatCode title={dict.about.code.title} items={codePrinciples} />
      <CTA content={dict.home.cta} common={dict.common} />
    </>
  );
};
export default AboutPage;
