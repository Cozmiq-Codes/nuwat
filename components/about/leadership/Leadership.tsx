import React from "react";
import Image from "next/image";

const LeadershipImage = "/about/leadership.png";

const Leadership = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="main-container">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px] items-start">
            {/* Left Part */}
            <div className="w-full">
              {/* Responsive image wrapper */}
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[360px]">
                <Image
                  src={LeadershipImage}
                  alt="Leadership"
                  className="object-cover"
                  priority
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            {/* Right Part */}
            <div className="flex flex-col gap-10 lg:gap-0 lg:justify-between h-full">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex flex-col items-start gap-2 sm:gap-3">
                  <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
                    Leadership
                  </h2>
                  <p className="text-white text-sm sm:text-base font-normal leading-6 sm:leading-7">
                    The Visionary Mind Behind NUWAT Ventures
                  </p>
                </div>

                <p className="text-white text-sm sm:text-base font-medium leading-6 sm:leading-7">
                  <span className="heading-span">Koshy Samuel</span> is a
                  sovereign force in the world of high-stakes enterprise. He
                  does not just manage businesses; he engineers empires. Having
                  built, scaled, and ultimately exited one of the most
                  formidable industrial conglomerates in the region’s history,
                  his career serves as a masterclass in market dominance. He has
                  spent decades operating at a level of complexity that few can
                  comprehend and fewer can survive, delivering mission-critical
                  infrastructure for global superpowers. His reputation is built
                  on the cold, hard reality of total execution—a legacy forged
                  in steel, power, and the kind of strategic foresight that only
                  a true mogul possesses.
                </p>
              </div>

              <div className="p-4 sm:p-5 lg:p-6 bg-[#131313] rounded-2xl lg:rounded-[18px]">
                <p className="text-sm sm:text-base font-medium leading-6 sm:leading-7 heading-span italic">
                  NUWAT is the final evolution of this mastery. Koshy does not
                  consult for the sake of conversation; he intervenes to ensure
                  victory. He brings the weight of a man who has navigated the
                  most pressurized boardrooms on the planet and walked away with
                  everything. When you engage NUWAT, you are not hiring a
                  firm—you are aligning with a genius of industry who has
                  already proven, beyond all shadow of a doubt, that he is the
                  standard by which all others are measured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
