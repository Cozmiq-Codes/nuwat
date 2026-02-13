"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxReveal from "@/components/global/ParallaxReveal";

const NegotiateImage = "/services/negotiate/negotiate.webp";
const CancelIcon = "/services/negotiate/cancel-circle.svg";
const UpArrowIcon = "/services/negotiate/arrow-up.svg";
const DownArrowIcon = "/services/negotiate/arrow-down.svg";

interface NegotiateProps {
  title: string;
  items: Array<{
    id: string;
    title: string;
    description?: string;
  }>;
}

const Negotiate = ({ title, items }: NegotiateProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={
        "bg-[url('/services/bg-grad.webp')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <motion.div layout>
          <motion.div
            layout
            className={
              "grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-10 items-stretch"
            }
          >
            {/* Left Column: Accordion List */}
            <motion.div
              layout
              className={
                "bg-[#131313] rounded-2xl p-6 md:p-10 lg:p-12 flex flex-col gap-6 lg:gap-8"
              }
            >
              <h2
                className={
                  "text-white text-[32px] sm:text-[40px] lg:text-[48px]! font-bold leading-tight lg:leading-15 max-w-120"
                }
              >
                {title}
              </h2>

              <div className={"flex flex-col gap-4 sm:gap-5"}>
                {items.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        layout: { duration: 0.3 },
                      }}
                    >
                      <div
                        onClick={() => handleItemClick(index)}
                        className={`p-4 sm:p-5 rounded-xl transition-colors duration-300 cursor-pointer relative overflow-hidden ${
                          isActive
                            ? "bg-[linear-gradient(226deg,rgba(0,209,255,0.08)_18.78%,rgba(81,162,255,0.08)_74.66%)]"
                            : "bg-[#1C1C1C52]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 flex-1">
                            <motion.div
                              animate={{ rotate: isActive ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="shrink-0 mt-1 sm:mt-0"
                            >
                              <Image
                                src={CancelIcon}
                                alt={"Cancel Icon"}
                                width={24}
                                height={24}
                                className={"w-5 h-5 sm:w-6 sm:h-6"}
                              />
                            </motion.div>
                            <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                              <h3
                                className={
                                  "text-white text-lg sm:text-[20px] font-bold leading-snug sm:leading-7"
                                }
                              >
                                {item.title}
                              </h3>
                              <AnimatePresence initial={false}>
                                {isActive && item.description && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 150,
                                      damping: 20,
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <p
                                      className={
                                        "text-white/80 text-sm sm:text-base font-normal leading-relaxed sm:leading-7 max-w-147.5 pt-2"
                                      }
                                    >
                                      {item.description}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <motion.div animate={{ rotate: isActive ? 180 : 0 }}>
                            <Image
                              src={isActive ? UpArrowIcon : DownArrowIcon}
                              alt={
                                isActive ? "Up arrow icon" : "Down arrow icon"
                              }
                              width={24}
                              height={24}
                              className={
                                "w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-1 sm:mt-0"
                              }
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Image with Shimmer Line */}
            <motion.div
              layout
              transition={{
                layout: { duration: 0.3 },
              }}
              className={"w-full h-full relative min-h-75"}
            >
              <ParallaxReveal
                src={NegotiateImage}
                alt={"negotiate image"}
                containerClassName="w-full h-full rounded-2xl"
                className="object-cover"
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Negotiate;
