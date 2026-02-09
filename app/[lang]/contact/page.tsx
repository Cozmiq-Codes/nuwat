import React from "react";
import ContactHero from "@/components/pages/contact/hero/Hero";
import Venture from "@/components/pages/contact/venture/Venture";
import Reach from "@/components/pages/contact/reach/Reach";
import Pipeline from "@/components/pages/contact/pipeline/Pipeline";

import RequestConsideration from "@/components/pages/contact/request-consideration/RequestConsideration";

const Page = () => {
  return (
    <>
      <ContactHero />
      <Venture />
      <Reach />
      <Pipeline />
      <RequestConsideration />
    </>
  );
};
export default Page;
