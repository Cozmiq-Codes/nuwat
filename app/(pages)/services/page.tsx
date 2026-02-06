import React from "react";
import Hero from "@/components/pages/services/hero/Hero";
import Role from "@/components/pages/services/role/Role";
import ServiceDomains from "@/components/pages/services/service-domains/ServiceDomains";
import Negotiate from "@/components/pages/services/negotiate/Negotiate";
import CTA from "@/components/global/cta/CTA";
import HighEngage from "@/components/pages/services/high-engage/HighEngage";

const Page = () => {
  return (
    <>
      <Hero />
      <Role />
      <ServiceDomains />
      <Negotiate />
      <HighEngage />
      <CTA />
    </>
  );
};
export default Page;
