"use client";

import { motion } from "framer-motion";
import { HistoryItem, ITEMS } from "@/constant/HistoryItem";

export default function HistorySection() {
  return (
    <section id="history" className="relative bg-[url('/about/section-bg-two.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative main-container px-4">
        <div className="flex flex-col items-center gap-3">
          <h2
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
            Our History
          </h2>
          <p className="text-[16px] leading-7 text-white">Established 2009</p>
        </div>

        {/* Timeline */}
        <div className="relative my-14">
          <ul className="space-y-10 md:space-y-14">
            {ITEMS.map((item, index) => {
              const isLeft = item.side === "left";
              const isLast = index === ITEMS.length - 1;

              return (
                <li key={item.marker} className="relative">
                  {/* Vertical line connecting to next item - Hidden for last item */}
                  {!isLast && (
                    <motion.div
                      className="absolute left-6 top-0 w-1 bg-[#FFFFFF33] -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 -z-10"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                      style={{
                        height: "calc(100% + 2.5rem)",
                        transformOrigin: "top",
                      }}
                    >
                      {/* Desktop height adjustment */}
                      <div
                        className="hidden md:block w-full bg-[#FFFFFF33]"
                        style={{ height: "calc(100% + 3.5rem)" }}
                      />
                    </motion.div>
                  )}

                  {/* Node */}
                  <div className="absolute left-6 top-0 z-10 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className="flex h-22 w-22 items-center justify-center rounded-full text-[18px] font-bold leading-5 tracking-[0.7px] text-white"
                      style={{
                        background:
                          "linear-gradient(226deg, rgba(0, 209, 255, 0.19) 18.78%, rgba(81, 162, 255, 0.19) 74.66%), #070707",
                      }}
                    >
                      {item.marker}
                    </div>
                  </div>

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
                        <Card item={item} align="center" />
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
                        <Card item={item} align="left" />
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

function Card({
  item,
  align,
}: {
  item: Pick<HistoryItem, "title" | "body">;
  align: "left" | "center";
}) {
  return (
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
  );
}
