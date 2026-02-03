import React from "react";
import Hero from "@/components/home/hero/Hero";
import WhatWeDo from "@/components/home/what-we-do/WhatWeDo";
import CTA from "@/components/home/cta/CTA";
import Image from "next/image";
import EmpoweringSection from "@/components/home/Empowering/EmpoweringSection";
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
        <EmpoweringSection />
      <WhatWeDo />
      <CTA />
    </>
  );
};
export default Home;
