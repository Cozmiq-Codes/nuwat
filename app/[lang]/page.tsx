import React from "react";
import Hero from "@/components/pages/home/hero/Hero";
import WhatWeDo from "@/components/pages/home/what-we-do/WhatWeDo";
import CTA from "@/components/global/cta/CTA";
import Image from "next/image";

import StatsSection from "@/components/global/stats/StatsSection";
import DominanceSection from "@/components/pages/home/dominance/Dominance";
import VisionDominance from "@/components/pages/home/vision-dominance/VisionDominance";
import ClientReviews from "@/components/pages/home/reviews/ClientReviews";
import { HomeStats } from "@/constant/Stats";
import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
const HeroImage = "/hero/hero-big.webp";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

const Home = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  console.log(dict);

  return (
    <>
      <Hero />
      <div className={"px-5 my-5"}>
        <Image
          src={HeroImage}
          alt={"Hero Image"}
          width={1000}
          height={1000}
          className={"w-full h-95 rounded-2xl"}
        />
      </div>
      <VisionDominance />
      <WhatWeDo />
      <DominanceSection />
      <StatsSection
        heading={"Built for"}
        gradientHeading={"Companies That Expect More"}
        description={
          "We build businesses that perform better, last longer, and raise the bar for everyone operating in their category."
        }
        stats={HomeStats}
      />
      <ClientReviews />
      <CTA />
    </>
  );
};
export default Home;
