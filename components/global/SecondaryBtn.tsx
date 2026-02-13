"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

const SecondaryBtn = ({ title, link }: { title: string, link: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link ? link : '#'}>
      <motion.button
          className="secondary-btn w-full sm:w-auto px-6 py-3 text-[clamp(0.95rem,1.1vw,1rem)]"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background fill — slides up from below */}
        <motion.div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                  "linear-gradient(180deg, rgba(0,209,255,0.85) 18.78%, rgba(81,162,255,0.85) 74.66%)",
            }}
            initial={{ y: "100%" }}
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={springTransition}
        />

        <span
            className="relative z-10 inline-flex flex-col overflow-hidden"
            style={{ height: "1.5em" }}
        >
        <motion.span
            className="inline-block"
            initial={{ y: 0 }}
            animate={{ y: hovered ? "-100%" : "0%" }}
            transition={{ ...springTransition, delay: hovered ? 0.04 : 0 }}
            aria-hidden={hovered}
        >
          {title}
        </motion.span>

        <motion.span
            className="inline-block text-white"
            initial={{ y: 0 }}
            animate={{ y: hovered ? "-100%" : "0%" }}
            transition={{ ...springTransition, delay: hovered ? 0.08 : 0 }}
        >
          {title}
        </motion.span>
      </span>
      </motion.button>
    </Link>
  );
};

export default SecondaryBtn;
