"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LeadershipImage = "/about/leadership.webp";

interface LeadershipProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    quote: string;
  };
}

const Leadership = ({ content }: LeadershipProps) => {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="main-container">
        <div className="section-wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px] items-start"
          >
            {/* Left Part */}
            <div className="w-full">
              {/* Responsive image wrapper */}
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[360px]">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1.0,
                      filter: "blur(0px)",
                      transition: { duration: 1.2, ease: "easeOut" },
                    },
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={LeadershipImage}
                    alt="Leadership"
                    className="object-cover w-full h-full"
                    priority
                    width={1000}
                    height={1000}
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Part */}
            <div className="flex flex-col gap-10 lg:gap-0 lg:justify-between h-full">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex flex-col items-start gap-2 sm:gap-3">
                  <motion.h2
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 0.2 },
                      },
                    }}
                    className="section-heading text-3xl sm:text-4xl lg:text-5xl"
                  >
                    {content.title}
                  </motion.h2>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 0.3 },
                      },
                    }}
                    className="text-white text-sm sm:text-base font-normal leading-6 sm:leading-7"
                  >
                    {content.subtitle}
                  </motion.p>
                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.4 },
                    },
                  }}
                  className="text-white text-sm sm:text-base font-medium leading-6 sm:leading-7"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    scale: 1.0,
                    transition: { duration: 0.6, delay: 0.6 },
                  },
                }}
                className="p-4 sm:p-5 lg:p-6 bg-[#131313] rounded-2xl lg:rounded-[18px]"
              >
                <p className="text-sm sm:text-base font-medium leading-6 sm:leading-7 heading-span italic">
                  {content.quote}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
