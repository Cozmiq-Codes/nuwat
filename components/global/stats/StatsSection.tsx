import React from "react";
import {HomeStats, StatsSectionProps} from "@/constant/Stats";


const StatsSection = ({heading, gradientHeading, description}: StatsSectionProps) => {
  return (
    <section>
      <div className={"main-container"}>
        <div
          className={
            "py-[40px] md:py-[75px] px-4 md:px-0 bg-[#FFFFFF05] flex flex-col items-center justify-center w-full rounded-3xl gap-8 md:gap-12"
          }
        >
          <div
            className={
              "max-w-full lg:max-w-[900px] flex flex-col items-center gap-4"
            }
          >
            <h2 className={"section-heading text-3xl md:text-4xl lg:text-5xl"}>
                {heading || "Heading"}
              <span className={"heading-span"}> {(gradientHeading && gradientHeading) || "Heading"}</span>
            </h2>
              {
                  description && <p>{description || "Description"}</p>
              }
          </div>
          <div
            className={
              "flex flex-col md:flex-row justify-between gap-8 md:gap-16 text-center"
            }
          >
              {
                  HomeStats.map((stat, index) => (
                      <div className={"flex flex-col items-center gap-2"} key={index}>
                          <h3
                              className={
                                  "heading-span text-[48px] lg:text-[64px] font-medium leading-[1.2] lg:leading-[72px] tracking-[-1.677px]"
                              }
                          >
                              {stat.title}
                          </h3>
                          <p
                              className={
                                  "text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[28px] text-[#FFFFFFC2]"
                              }
                          >
                              {stat.description}
                          </p>
                      </div>
                  ))
              }
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
