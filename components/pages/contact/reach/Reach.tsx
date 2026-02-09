import React from "react";
import Image from "next/image";

const ReachImage = "/contact/reach.webp";
const StarSVG = "/contact/star.svg";

interface ReachProps {
  title: string;
  description: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

const Reach = ({ title, description, items }: ReachProps) => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[url('/contact/bg-grad-two.webp')] bg-cover bg-center bg-no-repeat">
      <div className="main-container">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left column */}
            <div className="flex flex-col gap-8 lg:gap-10 lg:justify-between">
              <div className="max-w-155 flex flex-col gap-3 sm:gap-4">
                <h2 className="section-heading text-left!">{title}</h2>

                <p className="text-[14px] sm:text-[16px] font-normal leading-6 sm:leading-7 max-w-120 text-white/80">
                  {description}
                </p>
              </div>

              <div className="w-full max-w-155">
                <Image
                  src={ReachImage}
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
              {items.map((service, index) => (
                <div
                  key={service?.title ?? index}
                  className="bg-white/6 p-4 sm:p-5 lg:p-6 rounded-2xl"
                >
                  <div className="flex gap-4 sm:gap-6">
                    <Image
                      src={StarSVG}
                      alt={service.title}
                      width={20}
                      height={20}
                      className={"w-5 h-5"}
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
export default Reach;
