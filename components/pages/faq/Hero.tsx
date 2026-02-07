import React from "react";
import SectionTag from "@/components/global/SectionTag";

const Hero = () => {
  return (
    <section
      className={
        "pt-32 pb-5 bg-[url('/global/bg-grad.webp')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col gap-4 items-center w-full"}>
            <SectionTag title={"FAQ"} icon={false} />
            <div className={"flex flex-col gap-4.5 items-center"}>
              <h1
                className={
                  "text-[#F2F7FE] text-[56px] font-bold leading-16.25 text-center!"
                }
              >
                Frequently Asked Questions
              </h1>
              <p
                className={
                  "text-[#D8D8D8] text-[18px] font-normal leading-7 max-w-142.5 text-center"
                }
              >
                We align with trailblazers who view transformation as a
                mandate—not a fleeting moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
