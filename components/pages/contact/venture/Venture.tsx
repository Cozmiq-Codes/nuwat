"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface VentureProps {
  content: {
    title: string;
    description: string;
    highlight: string;
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015,
      delayChildren: 0.1,
    },
  },
};

const whiteWordVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const blueWordVariants: Variants = {
  hidden: { color: "#333333", textShadow: "none", opacity: 0 },
  visible: {
    opacity: 1,
    color: "#2F80ED",
    textShadow: "0 0 10px rgba(47, 128, 237, 0.5)",
    transition: { duration: 0.8, ease: "circOut" },
  },
};

const IgnitionText = ({ content }: { content: string }) => {
  // Split by specific span class
  const segments = content.split(/(<span class="heading-span">.*?<\/span>)/g);

  return (
    <motion.p
      className={
        "text-[#E7E7E7] text-[32px] font-bold leading-10.5 flex flex-wrap gap-x-[0.2em]"
      }
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {segments.map((segment, i) => {
        const isHighlight = segment.startsWith("<span");
        // Remove tags for processing
        const cleanText = segment.replace(/<[^>]+>/g, "");
        if (!cleanText.trim()) return null;

        const words = cleanText.split(/\s+/).filter(Boolean);

        return words.map((word, j) => (
          <motion.span
            key={`${i}-${j}`}
            variants={isHighlight ? blueWordVariants : whiteWordVariants}
            className={isHighlight ? "cursor-pointer" : ""}
            whileHover={
              isHighlight
                ? {
                    textShadow: "0 0 15px rgba(47, 128, 237, 0.9)",
                    filter: "brightness(1.2)",
                  }
                : {}
            }
          >
            {word}
          </motion.span>
        ));
      })}
    </motion.p>
  );
};

const Venture = ({ content }: VentureProps) => {
  return (
    <section>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div
            className={
              "flex flex-col xl:flex-row justify-between w-full gap-8 md:gap-0"
            }
          >
            {/* Left Column (The Warning) */}
            <motion.div
              className={"flex flex-col justify-between w-full md:w-1/2"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }} // FadeIn with opacity: 0.6
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3
                className={
                  "text-[16px] font-medium leading-normal heading-span"
                }
              >
                {content.title}
              </h3>
              <p
                className={
                  "text-[#E7E7E7] text-[16px] font-medium leading-7 tracking-[0.07] max-w-[320px]"
                }
              >
                {content.description}
              </p>
            </motion.div>

            {/* Right Column (The Mandate) */}
            <div className={"max-w-[750px]"}>
              <IgnitionText content={content.highlight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venture;
