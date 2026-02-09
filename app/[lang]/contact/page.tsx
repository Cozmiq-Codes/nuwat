import React from "react";
import ContactHero from "@/components/pages/contact/hero/Hero";
import Venture from "@/components/pages/contact/venture/Venture";
import Reach from "@/components/pages/contact/reach/Reach";
import Pipeline from "@/components/pages/contact/pipeline/Pipeline";

import RequestConsideration from "@/components/pages/contact/request-consideration/RequestConsideration";

import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import CTA from "@/components/global/cta/CTA";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const reachItems = Object.keys(dict.contact.reach.items).map((key) => ({
    ...dict.contact.reach.items[key as keyof typeof dict.contact.reach.items],
  }));

  const pipelineItems = Object.keys(dict.contact.pipeline.items).map((key) => ({
    ...dict.contact.pipeline.items[
      key as keyof typeof dict.contact.pipeline.items
    ],
    id: key,
  }));

  return (
    <>
      <ContactHero content={dict.contact.hero} />
      <Venture content={dict.contact.venture} />
      <Reach
        title={dict.contact.reach.title}
        description={dict.contact.reach.description}
        items={reachItems}
      />
      <Pipeline
        title={dict.contact.pipeline.title}
        subtitle={dict.contact.pipeline.subtitle}
        items={pipelineItems}
      />
      <RequestConsideration content={dict.contact.form} common={dict.common} />
      <CTA content={dict.home.cta} common={dict.common} />
    </>
  );
};
export default Page;
