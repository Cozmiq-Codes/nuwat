import React from "react";
import Hero from "@/components/pages/faq/Hero";
import Faq from "@/components/pages/faq/Faq";
import CTA from "@/components/global/cta/CTA";

const Page = () => {
  return (
    <>
      <Hero />
      <Faq />
      {/*<CTA content={dict.home.cta} common={dict.common} />*/}
    </>
  );
};
export default Page;
