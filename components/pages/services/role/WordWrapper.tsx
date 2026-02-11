"use client";

import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";

interface WordWrapperProps {
  content: string;
  trigger?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015, // Faster stagger for smoother feel
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15, // Reduced distance for less layout calculation cost
  },
  visible: (isHighlighted: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: isHighlighted ? "backOut" : "easeOut",
    },
  }),
};

const WordWrapper = ({ content, trigger = false }: WordWrapperProps) => {
  const words = useMemo(() => {
    // 1. Split by the span tag to separate highlighted parts
    // This regex captures the content inside the specific span
    const parts = content.split(
      /(<span\s+class=["']heading-span["']>(.*?)<\/span>)/g,
    );

    const result: { text: string; isHighlighted: boolean }[] = [];

    parts.forEach((part) => {
      // Ignore empty strings from split
      if (!part) return;

      // Check if this part is the full HTML string we just split by
      if (part.startsWith("<span")) return;

      // Check if this part was the captured group inside the span (highlighted)
      // We know it's highlighted if the Original content contained it wrapped in spans.
      // A safer way in this specific loop context:
      // The split structure usually alternates: [normal, FULL_SPAN, INNER_TEXT, normal...]
      // But standard split regex behavior can be tricky.

      // Let's use a simpler tokenizing approach for robustness:
      const isHighlighted =
        content.includes(`<span class="heading-span">${part}</span>`) ||
        content.includes(`<span class='heading-span'>${part}</span>`);

      // Now split this segment into individual words
      const segmentWords = part.split(/\s+/).filter((w) => w.length > 0);

      segmentWords.forEach((w) => {
        result.push({ text: w, isHighlighted });
      });
    });

    return result;
  }, [content]);

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      className="inline-block" // Ensure container behaves like text
    >
      {words.map((wordObj, i) => (
        <React.Fragment key={i}>
          <motion.span
            variants={wordVariants}
            custom={wordObj.isHighlighted}
            className={`inline-block ${
              wordObj.isHighlighted ? "text-[#3B82F6]" : "text-[#E7E7E7]"
            }`}
            // Add will-change to hint browser compositor
            style={{ willChange: "opacity, transform" }}
          >
            {wordObj.text}
          </motion.span>
          {/* Render a standard space character, NOT a motion component */}{" "}
        </React.Fragment>
      ))}
    </motion.span>
  );
};

export default WordWrapper;
