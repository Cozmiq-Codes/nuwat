import React from "react";
import Image from "next/image";
import SectionTag from "@/components/global/SectionTag";
import { AgencyLogos } from "@/constant/AgencyLogos";

const TopGradient = "/hero/hero-gradient-top.svg";
const BottomGradient = "/hero/hero-gradient-bottom.svg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main content wrapper */}
      <div className="main-container min-h-[100svh] flex flex-col justify-between py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Top */}
        <div className="mt-20 flex-1 flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
          <div className="flex justify-center w-full">
            <SectionTag title="Data-Driven Decisions" />
          </div>

          <div className="flex flex-col items-center gap-5 sm:gap-6 w-full">
            <h1
              className="
                text-[#F2F7FE] font-semibold capitalize
                text-5xl lg:text-[56px]
                leading-[1.1]
                lg:leading-[60px]
                max-w-[90%] md:max-w-2xl lg:max-w-[80%]
                tracking-[-0.02em]
              "
            >
              Creating business transformations{" "}
              <span className="heading-span">
                most companies never survive.
              </span>
            </h1>

            <p
              className="
                text-[#E7E7E7CC]
                text-[clamp(1rem,1.35vw,1.125rem)]
                leading-[1.65]
                max-w-[min(38rem,92vw)]
              "
            >
              We build customer and brand experiences through a proven framework
              for businesses that refuse to stay ordinary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
            <button className="primary_button text-center w-full sm:w-auto px-6 py-3 text-[clamp(0.95rem,1.1vw,1rem)]">
              Apply Now
            </button>
            <button className="secondary-btn w-full sm:w-auto px-6 py-3 text-[clamp(0.95rem,1.1vw,1rem)]">
              Explore our Approach
            </button>
          </div>
        </div>

        {/* Hero Bottom */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col items-center justify-center">
          <p className="text-[#E7E7E7] text-center font-medium capitalize text-[clamp(1rem,1.25vw,1.125rem)] max-w-[350px]">
            Chosen by industry leaders who set the standard instead of chasing
            it
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
            Chosen by over 10,000 global companies building at serious scale
          </p>
        </div>
      </div>

      {/* Optional gradients (responsive + no overflow scroll) */}
      <div className="pointer-events-none absolute top-[-22%] left-[-26%] -z-10 w-[min(1650px,140vw)] aspect-[1650/785] opacity-90">
        <Image
          src={TopGradient}
          alt="Hero Top Gradient"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <div className="pointer-events-none absolute bottom-[-55%] right-[-26%] -z-10 w-[min(1650px,140vw)] aspect-[1650/785] opacity-90">
        <Image
          src={BottomGradient}
          alt="Hero Bottom Gradient"
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
