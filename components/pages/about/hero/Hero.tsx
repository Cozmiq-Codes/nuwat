import React from "react";
import SectionTag from "@/components/global/SectionTag";

const AboutHero = () => {
  return (
    <section
      className={
        "mt-32 mb-5 bg-[#FFFFFF03] rounded-2xl border border-white mx-5"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center gap-5 w-full"}>
            <SectionTag title={"company"} icon={false} />
            <div className={"flex flex-col items-center gap-5"}>
              <h1
                className="
                text-[#F2F7FE] font-semibold capitalize
                text-5xl lg:text-[56px]
                text-center
                leading-[1.1]
                lg:leading-[65px]
                max-w-[90%] md:max-w-2xl lg:max-w-[560px]
                tracking-[-0.02em]
              "
              >
                Architecting Empires{" "}
                <span className={"heading-span"}>That Define Markets</span>
              </h1>
              <p
                className="
                text-[#E7E7E7CC]
                text-[clamp(1rem,1.35vw,1.125rem)]
                leading-[1.65]
                max-w-[665px]
                text-center
              "
              >
                NUWAT is the private vehicle of a sovereign operator whose
                career is defined by moving the capital that moves nations. We
                don’t just execute at scale; we engineer the industrial and
                economic infrastructure that others rely on to exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
