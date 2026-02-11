"use client";

import React from "react";
import { motion } from "framer-motion";
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
      <motion.video
        src="/global/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col gap-4 items-center w-full"}>
            <SectionTag title={content.tag} icon={false} />
            <div className={"flex flex-col gap-4.5 items-center"}>
              {/* Shimmer Effect Styles */}
              <style>{`
              .shimmer-text span {
                background: linear-gradient(110deg, #2F80ED 40%, #89C7F7 50%, #2F80ED 60%);
                background-size: 200% 100%;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shimmer 1.5s cubic-bezier(0.2, 0, 0, 1) 1.2s forwards;
                background-position: -100% 0;
              }
              @keyframes shimmer {
                0% { background-position: -100% 0; }
                100% { background-position: 200% 0; }
              }
            `}</style>
              <motion.div
                className={"flex flex-col gap-4.5 items-center"}
                initial={{ opacity: 0, filter: "blur(20px)", scale: 1.15 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1.0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <h1
                  className={
                    "shimmer-text text-[#F2F7FE] text-[56px] font-bold leading-16.25 text-center!"
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
