import React from "react";
import AboutHero from "@/components/about/hero/Hero";
import Leadership from "@/components/about/leadership/Leadership";
import HistorySection from "@/components/about/History/HistorySection";
import StatsSection from "@/components/global/stats/StatsSection";
import {AboutStats} from "@/constant/Stats";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Leadership />
      <HistorySection />
        <StatsSection heading={"THE SCALE OF COMMAND"} stats={AboutStats}/>
    </>
  );
};
export default AboutPage;
