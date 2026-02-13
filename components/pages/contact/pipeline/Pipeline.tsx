"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const cr = "/contact/cr.svg";
const sb = "/contact/sb.svg";
const md = "/contact/md.svg";

interface PipelineProps {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

const Pipeline = ({ title, subtitle, items }: PipelineProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const icons: Record<string, string> = {
    review: cr,
    briefing: sb,
    mandate: md,
  };

  const CARD_DURATION = 0.5;

  return (
    <section
      className={
        "bg-[url('/contact/pipeline.png')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center gap-12 w-full"}>
            <div className={"flex flex-col gap-3"}>
              <h2 className={"section-heading"}>{title}</h2>
              <p
                className={
                  "text-[16px] font-normal leading-7 max-w-162.5 text-center"
                }
              >
                {subtitle}
              </p>
            </div>

            <div
              ref={containerRef}
              className={"grid grid-cols-1 lg:grid-cols-3 gap-6 relative"}
            >
              {items.map((item, index) => {
                const baseDelay = index * 0.1; // Faster stagger

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: baseDelay,
                      ease: "easeOut",
                    }}
                    className={
                      "p-6 rounded-[18px] bg-[#FFFFFF14] flex flex-col gap-12 relative"
                    }
                  >
                    <div className="flex flex-col gap-12 relative z-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: baseDelay + 0.1,
                        }}
                      >
                        <Image
                          src={icons[item.id] || cr}
                          alt={item.title}
                          width={32}
                          height={32}
                          className={"w-12 h-12"}
                        />
                      </motion.div>

                      <div className={"flex flex-col gap-3"}>
                        <h3
                          className={
                            "text-[#F2F7FE] text-[24px] font-bold leading-7"
                          }
                        >
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
