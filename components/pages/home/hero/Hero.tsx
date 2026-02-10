import Image from "next/image";
import SectionTag from "@/components/global/SectionTag";
import { AgencyLogos } from "@/constant/AgencyLogos";
import SecondaryBtn from "@/components/global/SecondaryBtn";
import PrimaryButton from "@/components/global/PrimaryButton";

interface HeroProps {
  content: {
    tag: string;
    title: string;
    description: string;
    socialProof: string;
    statsTag: string;
  };
  common: {
    buttons: {
      applyNow: string;
      exploreApproach: string;
    };
  };
}

const Hero = ({ content, common }: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background video */}
      <video
        src="/global/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      {/* Main content wrapper */}
      <div className="main-container min-h-svh flex flex-col justify-between py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Top */}
        <div className="mt-20 flex-1 flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
          <div className="flex justify-center w-full">
            <SectionTag title={content.tag} icon={true} />
          </div>

          <div className="flex flex-col items-center gap-5 sm:gap-6 w-full">
            <h1
              className="
                  text-[#F2F7FE] font-semibold capitalize
                  text-5xl lg:text-[56px]
                  leading-[1.1]
                  lg:leading-16.25
                  max-w-[90%] md:max-w-2xl lg:max-w-222.5
                  tracking-[-0.02em]
                "
              dangerouslySetInnerHTML={{ __html: content.title }}
            />

            <p
              className="
                  text-[#E7E7E7CC]
                  text-[clamp(1rem,1.35vw,1.125rem)]
                  leading-[1.65]
                  max-w-257.5
                "
            >
              {content.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center items-center">
            <PrimaryButton title={common.buttons.applyNow} />
            <SecondaryBtn title={common.buttons.exploreApproach} />
          </div>
        </div>

        {/* Hero Bottom */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col items-center justify-center">
          <p className="text-[#E7E7E7] text-center font-medium capitalize text-[clamp(1rem,1.25vw,1.125rem)] max-w-87.5 lg:max-w-none">
            {content.socialProof}
          </p>

          {/* Responsive logos grid */}
          {/* Responsive infinite logo carousel */}
          <div className="mt-8 w-full overflow-hidden mask-gradient">
            <div className="flex w-max animate-scroll items-center">
              {[...AgencyLogos, ...AgencyLogos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="relative opacity-80 hover:opacity-100 transition-opacity
                             mx-6 sm:mx-8 md:mx-12
                             h-7 w-28 sm:h-8 sm:w-32 md:h-9 md:w-36"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 7rem, (max-width: 1024px) 8rem, 9rem"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8 sm:mt-10 text-[#E7E7E7CC] text-[clamp(0.95rem,1.15vw,1.05rem)]">
            {content.statsTag}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
