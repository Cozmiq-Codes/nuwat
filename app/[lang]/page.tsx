import LenisWrapper from "@/components/global/LenisWrapper";
import FadeIn from "@/components/global/FadeIn";

import Hero from "@/components/pages/home/hero/Hero";
import WhatWeDo from "@/components/pages/home/what-we-do/WhatWeDo";
import CTA from "@/components/global/cta/CTA";
import Image from "next/image";

import StatsSection from "@/components/global/stats/StatsSection";
import DominanceSection from "@/components/pages/home/dominance/Dominance";
import VisionDominance from "@/components/pages/home/vision-dominance/VisionDominance";
import ClientReviews from "@/components/pages/home/reviews/ClientReviews";
import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
const HeroImage = "/hero/hero-big.webp";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const Home = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const homeStats = [
    dict.home.stats.items.clients,
    dict.home.stats.items.referral,
    dict.home.stats.items.acceptance,
  ];

  return (
    <LenisWrapper>
      <FadeIn>
        <Hero content={dict.home.hero} common={dict.common} />
      </FadeIn>
      <FadeIn className="px-5 my-5">
        <div className="relative">
          <Image
            src={HeroImage}
            alt={"Hero Image"}
            width={1000}
            height={1000}
            className={"w-full h-[500px] rounded-2xl"}
          />
        </div>
      </FadeIn>
      <FadeIn>
        <VisionDominance content={dict.home.visionDominance} />
      </FadeIn>
      <FadeIn>
        <WhatWeDo
          content={dict.home.whatWeDo}
          aboutNuwat={dict.common.buttons.aboutNuwat}
        />
      </FadeIn>
      <FadeIn>
        <DominanceSection content={dict.home.dominance} />
      </FadeIn>
      <FadeIn>
        <StatsSection
          heading={dict.home.stats.heading}
          gradientHeading={dict.home.stats.headingGradient}
          description={dict.home.stats.description}
          stats={homeStats}
        />
      </FadeIn>
      <FadeIn>
        <ClientReviews content={dict.home.reviews} />
      </FadeIn>
      <FadeIn>
        <CTA content={dict.home.cta} common={dict.common} />
      </FadeIn>
    </LenisWrapper>
  );
};
export default Home;
