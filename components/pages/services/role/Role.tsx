"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import WordWrapper from "./WordWrapper";

const role = "/services/role/role.webp";

interface RoleProps {
  content: {
    title: string;
    description1: string;
    description2: string;
  };
}

const Role = ({ content }: RoleProps) => {
  const containerRef = useRef(null);
  // Reduced threshold to 0.2 so it starts sooner, preventing "pop-in" feel
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={containerRef}
      className="main-container pt-24 lg:pt-32 pb-24 lg:pb-32"
    >
      <div className="section-wrapper">
        {/* Top Section: Title & Image */}
        <div className="flex flex-col justify-between gap-6 lg:gap-12 mb-12 lg:mb-24">
          <h2 className="uppercase text-[14px] md:text-[16px] font-normal leading-[1.5] tracking-wide">
            {content.title}
          </h2>

          <div className="relative overflow-hidden inline-block w-fit">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={
                isInView
                  ? { clipPath: "inset(0 0% 0 0)" }
                  : { clipPath: "inset(0 100% 0 0)" }
              }
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for smoother feel
            >
              <Image
                src={role}
                alt="role image"
                className="w-[280px] md:w-[360px] h-auto object-cover"
                width={500}
                height={500}
                priority={false} // Only prioritize if this is above the fold
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Text Content */}
        <div className="max-w-[760px] flex flex-col gap-6 lg:gap-8">
          {/* NOTE: WordWrapper is wrapped in a generic div or span, 
            NOT a p tag, to avoid HTML nesting warnings if WordWrapper renders divs.
            However, since WordWrapper renders spans, p tag is fine.
          */}
          <p className="text-[#E7E7E7] text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] lg:leading-[42px]">
            <WordWrapper content={content.description1} trigger={isInView} />
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-[#FEFFFFCC] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed lg:leading-[30px]"
          >
            {content.description2}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default Role;
