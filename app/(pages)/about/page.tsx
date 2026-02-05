import React from "react";
import AboutHero from "@/components/about/hero/Hero";
import Leadership from "@/components/about/leadership/Leadership";
import HistorySection from "@/components/about/history/HistorySection";
import StatsSection from "@/components/global/stats/StatsSection";
import { AboutStats } from "@/constant/Stats";
import Vision from "@/components/about/vision/Vision";
import NuwatCode from "@/components/about/nuwat-code/NuwatCode";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Leadership />
      <HistorySection />
      <StatsSection heading={"THE SCALE OF COMMAND"} stats={AboutStats} />
      <Vision />
      <NuwatCode />
    </>
  );
};
export default AboutPage;
