"use client";

import { useRef } from "react";
import { StatsSectionProps } from "@/constant/Stats";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import RollingCounter from "./RollingCounter";

const BgGrad = "/hero/bg-grad-two.webp";

const StatsSection = ({
  heading,
  gradientHeading,
  description,
  stats,
  isGradient = false,
}: StatsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={"relative"} ref={ref}>
      <div className={"main-container relative z-50"}>
        <div
          className={
            "py-10 md:py-18.75 px-4 md:px-0 bg-[#FFFFFF05] flex flex-col items-center justify-center w-full rounded-3xl gap-8 md:gap-12"
          }
        >
          <motion.div
            className={
              "max-w-full lg:max-w-225 flex flex-col items-center gap-4"
            }
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={"section-heading text-3xl md:text-4xl lg:text-5xl"}>
              {heading || "Heading"}
              <span className={"heading-span"}>
                {" "}
                {gradientHeading && gradientHeading}
              </span>
            </h2>
            {description && <p>{description || "Description"}</p>}
          </motion.div>
          <div
            className={
              "flex flex-col md:flex-row justify-between gap-8 md:gap-16 text-center"
            }
          >
            {stats.map((stat, index) => {
              const statConfig = getStatConfig(stat.title);

              return (
                <div className={"flex flex-col items-center gap-2"} key={index}>
                  <h3
                    className={
                      "heading-span text-[48px] lg:text-[64px] font-medium leading-[1.2] lg:leading-18 tracking-[-1.677px]"
                    }
                  >
                    {statConfig ? (
                      <RollingCounter
                        from={0}
                        to={statConfig.to}
                        duration={statConfig.duration}
                        suffix={statConfig.suffix}
                        prefix={statConfig.prefix}
                        start={isInView}
                      />
                    ) : (
                      stat.title
                    )}
                  </h3>
                  <motion.p
                    className={
                      "text-[14px] lg:text-[16px] font-normal leading-6 lg:leading-7 text-[#FFFFFFC2] capitalize"
                    }
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: statConfig ? statConfig.duration : 0.5, // Fade in simply after counting finishes
                      ease: "easeOut",
                    }}
                  >
                    {stat.description}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {
        isGradient && (
              <Image
                  src={BgGrad}
                  alt={"bg grad"}
                  className={"w-587.5 h-225 absolute -bottom-full right-0 z-10"}
                  width={1000}
                  height={1000}
              />
          )
      }
    </section>
  );
};

// Helper function to determine animation config based on title string
function getStatConfig(title: string) {
  if (title === "10,000+") return { to: 10000, suffix: "+", duration: 3.5 };
  if (title === "92%") return { to: 92, suffix: "%", duration: 3.0 };
  if (title === "1 in 5") return { to: 5, prefix: "1 in ", duration: 1.5 };
  return null;
}

export default StatsSection;
