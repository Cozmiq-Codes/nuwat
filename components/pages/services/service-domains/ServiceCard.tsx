"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface ServiceCardProps {
  id: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
  buttons: Array<{ label: string }>;
  index: number;
}

const ServiceCard = ({
  kicker,
  title,
  description,
  image,
  buttons,
  index,
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#FFFFFF14] backdrop-blur-md py-6 px-8 rounded-3xl overflow-hidden relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      style={{
        position: "sticky",
        top: `calc(100px + ${index * 20}px)`,
      }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, ease: "linear" },
        },
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
        <div className="w-full lg:max-w-55">
          <motion.h4
            className="heading-span text-lg font-medium leading-6"
            variants={{
              hidden: { x: -40, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
              },
            }}
          >
            {kicker}
          </motion.h4>
        </div>

        <div className="relative w-full lg:w-87.5 h-62.5 md:h-87.5 lg:h-75 overflow-hidden rounded-xl">
          <motion.div
            className="relative w-full h-full"
            style={{ y: imageY }}
            variants={{
              hidden: { scale: 0.9, filter: "blur(10px)" },
              visible: {
                scale: 1.0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                },
              },
              hover: {
                scale: 1.05,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            <Image
              src={image || ""}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="max-w-full lg:max-w-150 flex flex-col justify-end gap-5">
          <motion.div
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
              },
            }}
          >
            <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-8 mb-2">
              {title}
            </h3>
            <p className="text-white text-[16px] font-normal leading-6.5 mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              {buttons.map((button, idx) => (
                <motion.button
                  key={idx}
                  className="py-3 px-6 border border-[#00D1FF] rounded-[60px] text-white whitespace-nowrap"
                  whileHover={{
                    backgroundColor: "rgba(0, 209, 255, 0.2)",
                    borderColor: "#00b8e6",
                    transition: { duration: 0.3 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {button.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
