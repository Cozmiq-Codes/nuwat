import React from "react";
import Hero from "@/components/home/hero/Hero";
import WhatWeDo from "@/components/home/what-we-do/WhatWeDo";
import CTA from "@/components/home/cta/CTA";
import Image from "next/image";

import StatsSection from "@/components/home/stats/StatsSection";
import DominanceSection from "@/components/home/dominance/Dominance";
import VisionDominance from "@/components/home/vision-dominance/VisionDominance";
import ClientReviews from "@/components/home/reviews/ClientReviews";
const HeroImage = "/hero/hero-big.png";

const Home = () => {
  return (
    <>
      <Hero />
      <div className={"px-5 my-5"}>
        <Image
          src={HeroImage}
          alt={"Hero Image"}
          width={1000}
          height={1000}
          className={"w-full h-[380px] rounded-2xl"}
        />
      </div>
      <VisionDominance />
      <WhatWeDo />
      <DominanceSection />
      <StatsSection />
      <ClientReviews />
      <CTA />
    </>
  );
};
export default Home;
