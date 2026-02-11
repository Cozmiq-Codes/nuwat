import React from "react";
import SectionTag from "@/components/global/SectionTag";

interface HeroProps {
  content: {
    tag: string;
    title: string;
    description: string;
  };
}

const Hero = ({ content }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-5">
      <video
        src="/global/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col gap-4 items-center w-full"}>
            <SectionTag title={content.tag} icon={false} />
            <div className={"flex flex-col gap-4.5 items-center"}>
              <h1
                className={
                  "text-[#F2F7FE] text-[56px] font-bold leading-16.25 text-center!"
                }
              >
                {content.title}
              </h1>
              <p
                className={
                  "text-[#D8D8D8] text-[18px] font-normal leading-7 max-w-142.5 text-center"
                }
              >
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
