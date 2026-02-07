import React from "react";
import Image from "next/image";
import { ServicesStakes } from "@/constant/Services";

const SectionImage = "/services/high-engage/section-img.webp";

const HighEngage = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="main-container">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left column */}
            <div className="flex flex-col gap-8 lg:gap-10 lg:justify-between">
              <div className="max-w-[620px] flex flex-col gap-3 sm:gap-4">
                <h2 className="section-heading !text-left">
                  When It Makes Sense To Engage Criteria for High-Stakes
                  Partnership
                </h2>

                <p className="text-[14px] sm:text-[16px] font-normal leading-6 sm:leading-7 max-w-[480px] text-white/80">
                  Nuwat is for when leadership has a serious decision
                  environment, and you need to act.
                </p>
              </div>

              <div className="w-full max-w-[620px]">
                <Image
                  src={SectionImage}
                  alt="Section Image"
                  width={620}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                  sizes="(min-width: 1024px) 620px, (min-width: 640px) 80vw, 100vw"
                  priority={false}
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              {ServicesStakes.map((service, index) => (
                <div
                  key={service?.title ?? index}
                  className="bg-white/[0.06] p-4 sm:p-5 lg:p-6 rounded-2xl"
                >
                  <div className="flex gap-4 sm:gap-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                      sizes="48px"
                    />

                    <div className="flex flex-col gap-2 sm:gap-3">
                      <h3 className="text-white text-lg sm:text-xl font-medium leading-6 sm:leading-7">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-[16px] font-normal leading-6 sm:leading-7">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighEngage;
