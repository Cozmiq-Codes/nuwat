import Role from "@/components/pages/services/role/Role";
import ServiceDomains from "@/components/pages/services/service-domains/ServiceDomains";
import Negotiate from "@/components/pages/services/negotiate/Negotiate";
import CTA from "@/components/global/cta/CTA";
import HighEngage from "@/components/pages/services/high-engage/HighEngage";

import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import ServiceHero from "@/components/pages/services/hero/Hero";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const serviceDomainsItems = [
    {
      id: "strategicMandate",
      image: "/services/service-domains/strategic-mandate.webp",
      ...dict.services.domains.items.strategicMandate,
      buttons: Object.values(
        dict.services.domains.items.strategicMandate.buttons,
      ).map((label) => ({ label })),
    },
    {
      id: "operational",
      image: "/services/service-domains/operational-reconstruction.webp",
      ...dict.services.domains.items.operational,
      buttons: Object.values(
        dict.services.domains.items.operational.buttons,
      ).map((label) => ({ label })),
    },
    {
      id: "scale",
      image: "/services/service-domains/scale-architecture.webp",
      ...dict.services.domains.items.scale,
      buttons: Object.values(dict.services.domains.items.scale.buttons).map(
        (label) => ({ label }),
      ),
    },
    {
      id: "identity",
      image: "/services/service-domains/identity-market-presence.webp",
      ...dict.services.domains.items.identity,
      buttons: Object.values(dict.services.domains.items.identity.buttons).map(
        (label) => ({ label }),
      ),
    },
  ];

  const highEngageItems = [
    {
      id: "critical",
      icon: "/services/high-engage/cm.svg",
      ...dict.services.highEngage.items.critical,
    },
    {
      id: "complexity",
      icon: "/services/high-engage/pc.svg",
      ...dict.services.highEngage.items.complexity,
    },
    {
      id: "lag",
      icon: "/services/high-engage/sl.svg",
      ...dict.services.highEngage.items.lag,
    },
    {
      id: "involvement",
      icon: "/services/high-engage/ai.svg",
      ...dict.services.highEngage.items.involvement,
    },
  ];

  const negotiateItems = Object.keys(dict.services.negotiate.items).map(
    (key) => ({
      id: key,
      ...dict.services.negotiate.items[
        key as keyof typeof dict.services.negotiate.items
      ],
    }),
  );

  return (
    <>
      <ServiceHero content={dict.services.hero} />
      <Role content={dict.services.role} />
      <ServiceDomains
        title={dict.services.domains.title}
        items={serviceDomainsItems}
      />
      <Negotiate title={dict.services.negotiate.title} items={negotiateItems} />
      <HighEngage
        title={dict.services.highEngage.title}
        description={dict.services.highEngage.description}
        items={highEngageItems}
      />
      <CTA content={dict.home.cta} common={dict.common} />
    </>
  );
};
export default Page;
