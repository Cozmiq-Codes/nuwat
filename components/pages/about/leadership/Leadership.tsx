import React from "react";
import Image from "next/image";

const LeadershipImage = "/about/leadership.webp";

interface LeadershipProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    quote: string;
  };
}

const Leadership = ({ content }: LeadershipProps) => {
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
                    {content.title}
                  </h2>
                  <p className="text-white text-sm sm:text-base font-normal leading-6 sm:leading-7">
                    {content.subtitle}
                  </p>
                </div>

                <p
                  className="text-white text-sm sm:text-base font-medium leading-6 sm:leading-7"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </div>

              <div className="p-4 sm:p-5 lg:p-6 bg-[#131313] rounded-2xl lg:rounded-[18px]">
                <p className="text-sm sm:text-base font-medium leading-6 sm:leading-7 heading-span italic">
                  {content.quote}
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
