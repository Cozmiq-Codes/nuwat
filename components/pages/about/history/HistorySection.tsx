"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { HistoryItem } from "@/constant/HistoryItem";

interface HistorySectionProps {
  heading: string;
  subtitle: string;
  items: Array<{
    title: string;
    body: string;
    marker: string;
    side: "left" | "right";
  }>;
}

export default function HistorySection({
  heading,
  subtitle,
  items,
}: HistorySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="history"
      className="relative bg-[url('/about/section-bg-two.webp')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="relative main-container px-4">
        <div className="flex flex-col items-center gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="
                text-[#F2F7FE] font-semibold capitalize
                text-5xl lg:text-[56px]
                text-center
                leading-[1.1]
                lg:leading-16.25
                max-w-[90%] md:max-w-2xl lg:max-w-140
                tracking-[-0.02em]
              "
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="text-[16px] leading-7 text-white"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative my-14">
          {/* Main Spine (Gray Background Line) */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#FFFFFF33] -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 -z-20" />

          {/* Active Spine (Blue Growing Line) */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 top-0 bottom-0 w-1 bg-[#00D1FF] -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 -z-10 shadow-[0_0_15px_rgba(0,209,255,0.6)]"
          />

          <ul className="space-y-10 md:space-y-14">
            {items.map((item) => {
              const isLeft = item.side === "left";

              return (
                <li key={item.marker} className="relative">
                  {/* Node (Year) */}
                  <TimelineNode marker={item.marker} />

                  {/* Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14">
                    {/* Left column */}
                    <div
                      className={[
                        "pl-14 md:pl-0",
                        isLeft
                          ? "md:col-start-1 md:justify-self-end md:pr-14"
                          : "md:col-start-1 md:pr-14 md:opacity-0 md:pointer-events-none",
                      ].join(" ")}
                      aria-hidden={!isLeft}
                    >
                      {isLeft ? (
                        <Card item={item} align="center" side="left" />
                      ) : (
                        <div className="h-1" />
                      )}
                    </div>

                    {/* Right column */}
                    <div
                      className={[
                        "pl-14 md:pl-14",
                        !isLeft
                          ? "md:col-start-2 md:justify-self-start"
                          : "md:col-start-2 md:opacity-0 md:pointer-events-none",
                      ].join(" ")}
                      aria-hidden={isLeft}
                    >
                      {!isLeft ? (
                        <Card item={item} align="left" side="right" />
                      ) : (
                        <div className="h-1" />
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ marker }: { marker: string }) {
  return (
    <div className="absolute left-6 top-0 z-10 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
      <motion.div
        initial="inactive"
        whileInView="active"
        viewport={{ margin: "5000px 0px -50% 0px" }}
        variants={{
          inactive: {
            scale: 0.8,
            backgroundColor: "#070707",
            borderColor: "rgba(255,255,255,0.1)",
            transition: { duration: 0.5, ease: "easeOut" },
          },
          active: {
            scale: [0.8, 1.2, 1.0],
            backgroundColor: "#00D1FF",
            borderColor: "#00D1FF",
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
        className="flex h-22 w-22 items-center justify-center rounded-full text-[18px] font-bold leading-5 tracking-[0.7px] text-white border-2 border-transparent transition-colors shadow-lg"
        style={{
          backgroundColor: "#070707",
        }}
      >
        <span className="relative z-1 capitalize">{marker}</span>
      </motion.div>
    </div>
  );
}

function Card({
  item,
  align,
  side,
}: {
  item: Pick<HistoryItem, "title" | "body">;
  align: "left" | "center";
  side: "left" | "right";
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      // Mobile: Slide Up (y=30). Desktop: Pure Slide In (y=0)
      y: isMobile ? 30 : 0,
      // Mobile: No X slide. Desktop: Slide from Side
      x: isMobile ? 0 : side === "left" ? -30 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-20% 0px -20% 0px", once: true }}
      variants={variants}
    >
      <div
        className={[
          "w-full max-w-150 rounded-2xl bg-[#FFFFFF14] p-8",
          "flex flex-col gap-6",
          "shadow-[0_20px_60px_rgba(0,0,0,0.65)] ring-1 ring-white/5",
          "transition-transform duration-200 will-change-transform",
          "hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(0,0,0,0.7)]",
          align === "center" ? "text-right" : "text-left",
        ].join(" ")}
      >
        <h3 className="text-sm font-semibold tracking-tight text-[#F2F7FE] md:text-[28px] leading-8">
          {item.title}
        </h3>
        <p className="text-[#E7E7E7] text-[16px] leading-7">{item.body}</p>
      </div>
    </motion.div>
  );
}
