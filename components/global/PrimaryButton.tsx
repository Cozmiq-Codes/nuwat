"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

const PrimaryButton = ({ title, link }: { title: string; link: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link ? link : "#"}>
      <motion.button
        className="primary_button flex text-center w-full sm:w-auto px-6 py-3 text-[clamp(0.95rem,1.1vw,1rem)] overflow-hidden"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Text — slot-machine vertical cycle */}
        <span
          className="relative inline-flex flex-col overflow-hidden"
          style={{ height: "1.5em" }}
        >
          {/* Visible text — slides up and out */}
          <motion.span
            className="inline-block whitespace-nowrap"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: hovered ? "-100%" : "0%",
              opacity: hovered ? 0 : 1,
            }}
            transition={springTransition}
          >
            {title}
          </motion.span>

          {/* Duplicate text — slides up into view */}
          <motion.span
            className="inline-block whitespace-nowrap"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: hovered ? "-100%" : "0%",
              opacity: hovered ? 1 : 0,
            }}
            transition={springTransition}
          >
            {title}
          </motion.span>
        </span>

        {/* Arrow — diagonal relay animation */}
        <span
          className="relative inline-flex items-center justify-center overflow-hidden"
          style={{ width: 24, height: 24 }}
        >
          {/* Visible arrow — exits top-right */}
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: hovered ? 10 : 0,
              y: hovered ? -10 : 0,
              opacity: hovered ? 0 : 1,
            }}
            transition={{ ...springTransition, delay: hovered ? 0.1 : 0 }}
          >
            <Image
              src="/layout/what-we-do/right_icon.svg"
              alt="Right Icon"
              width={24}
              height={24}
            />
          </motion.span>

          {/* Hidden arrow — enters from bottom-left */}
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            initial={{ x: -10, y: 10, opacity: 0 }}
            animate={{
              x: hovered ? 0 : -10,
              y: hovered ? 0 : 10,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ ...springTransition, delay: hovered ? 0.1 : 0 }}
          >
            <Image
              src="/layout/what-we-do/right_icon.svg"
              alt="Right Icon"
              width={24}
              height={24}
            />
          </motion.span>
        </span>
      </motion.button>
    </Link>
  );
};

export default PrimaryButton;
