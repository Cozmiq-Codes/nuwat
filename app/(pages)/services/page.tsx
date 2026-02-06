import React from "react";
import Hero from "@/components/services/hero/Hero";
import Role from "@/components/services/role/Role";
import ServiceDomains from "@/components/services/service-domains/ServiceDomains";
import Negotiate from "@/components/services/negotiate/Negotiate";
import CTA from "@/components/global/cta/CTA";
import HighEngage from "@/components/services/high-engage/HighEngage";

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
