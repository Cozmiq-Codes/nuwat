import React from "react";
import { StatsSectionProps } from "@/constant/Stats";
import Image from "next/image";

const BgGrad = "/hero/bg-grad-two.webp";

const StatsSection = ({
  heading,
  gradientHeading,
  description,
  stats,
}: StatsSectionProps) => {
  return (
    <section className={"relative"}>
      <div className={"main-container relative z-50"}>
        <div
          className={
            "py-10 md:py-18.75 px-4 md:px-0 bg-[#FFFFFF05] flex flex-col items-center justify-center w-full rounded-3xl gap-8 md:gap-12"
          }
        >
          <div
            className={
              "max-w-full lg:max-w-225 flex flex-col items-center gap-4"
            }
          >
            <h2 className={"section-heading text-3xl md:text-4xl lg:text-5xl"}>
              {heading || "Heading"}
              <span className={"heading-span"}>
                {" "}
                {gradientHeading && gradientHeading}
              </span>
            </h2>
            {description && <p>{description || "Description"}</p>}
          </div>
          <div
            className={
              "flex flex-col md:flex-row justify-between gap-8 md:gap-16 text-center"
            }
          >
            {stats.map((stat, index) => (
              <div className={"flex flex-col items-center gap-2"} key={index}>
                <h3
                  className={
                    "heading-span text-[48px] lg:text-[64px] font-medium leading-[1.2] lg:leading-18 tracking-[-1.677px]"
                  }
                >
                  {stat.title}
                </h3>
                <p
                  className={
                    "text-[14px] lg:text-[16px] font-normal leading-6 lg:leading-7 text-[#FFFFFFC2]"
                  }
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Image
        src={BgGrad}
        alt={"bg grad"}
        className={"w-587.5 h-225 absolute -bottom-full right-0 z-10"}
        width={1000}
        height={1000}
      />
    </section>
  );
};
export default StatsSection;
