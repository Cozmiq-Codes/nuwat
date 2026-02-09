import React from "react";
import AboutHero from "@/components/pages/about/hero/Hero";
import Leadership from "@/components/pages/about/leadership/Leadership";
import HistorySection from "@/components/pages/about/history/HistorySection";
import StatsSection from "@/components/global/stats/StatsSection";
import { AboutStats } from "@/constant/Stats";
import Vision from "@/components/pages/about/vision/Vision";
import NuwatCode from "@/components/pages/about/nuwat-code/NuwatCode";
import CTA from "@/components/global/cta/CTA";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Leadership />
      <HistorySection />
      <StatsSection heading={"THE SCALE OF COMMAND"} stats={AboutStats} />
      <Vision />
      <NuwatCode />
      {/*<CTA content={dict.home.cta} common={dict.common} />*/}
    </>
  );
};
export default AboutPage;
