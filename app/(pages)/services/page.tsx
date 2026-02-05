import React from "react";
import Hero from "@/components/services/hero/Hero";
import Role from "@/components/services/role/Role";
import ServiceDomains from "@/components/services/service-domains/ServiceDomains";
import Negotiate from "@/components/services/negotiate/Negotiate";

const Page = () => {
  return (
    <>
      <Hero />
      <Role />
      <ServiceDomains />
      <Negotiate />
    </>
  );
};
export default Page;
