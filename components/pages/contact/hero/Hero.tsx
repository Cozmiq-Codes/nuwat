"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactHeroProps {
  content: {
    title: string;
    description: string;
  };
}

const ContactHero = ({ content }: ContactHeroProps) => {
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
      <div className={"bg-[#FFFFFF03] rounded-2xl mx-5 my-5 backdrop-blur-2xl"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center gap-5 w-full"}>
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
              className={"flex flex-col items-center gap-5"}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 1.15 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1.0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1
                className="
                shimmer-text
                text-[#F2F7FE] font-semibold capitalize
                text-5xl lg:text-[56px]
                text-center
                leading-[1.1]
                lg:leading-16.25
                max-w-[90%] md:max-w-2xl lg:max-w-140
                tracking-[-0.02em]
              "
              >
                {content.title}
              </h1>
              <p
                className="
                text-[#E7E7E7CC]
                text-[clamp(1rem,1.35vw,1.125rem)]
                leading-[1.65]
                max-w-166.25
                text-center
              "
              >
                {content.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
