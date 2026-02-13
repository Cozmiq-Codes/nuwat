"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import ParallaxReveal from "@/components/global/ParallaxReveal";
import { motion, AnimatePresence } from "framer-motion";

const FirstCityImage = "/empowering/city.webp";
const SecondCityImage = "/empowering/second-city.webp";
const ThirdCityImage = "/empowering/third-city.webp";

const images = [FirstCityImage, SecondCityImage, ThirdCityImage];

const DriveImage = "/empowering/drive.webp";
const GrowthImage = "/empowering/growth.webp";
const OperationsImage = "/empowering/operations.webp";
const BgGrad = "/empowering/bg-grad.webp";

interface VisionDominanceProps {
  content: {
    title: string;
    items: {
      "01": { title: string; description: string };
      "02": { title: string; description: string };
      "03": { title: string; description: string };
    };
  };
}

const VisionDominance = ({ content }: VisionDominanceProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]); // For Mobile Tabs
  const tabsRef = useRef<HTMLDivElement>(null); // For Tabs Container
  const DURATION = 5000; // 5 seconds

  // Memoize resetTimer to avoid dependency cycles
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, DURATION);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  // Scroll active item TAB into view within the container ONLY
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const container = tabsRef.current;
    const activeTab = itemRefs.current[activeIndex];

    if (isMobile && container && activeTab) {
      // Calculate center position
      const scrollLeft =
        activeTab.offsetLeft -
        container.offsetWidth / 2 +
        activeTab.offsetWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  const items = [
    {
      id: "01",
      icon: DriveImage,
      ...content.items["01"],
    },
    {
      id: "02",
      icon: GrowthImage,
      ...content.items["02"],
    },
    {
      id: "03",
      icon: OperationsImage,
      ...content.items["03"],
    },
  ];

  return (
    <section className={"relative"}>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div
            className={
              "flex flex-col justify-center items-center w-full gap-10 lg:gap-[56px]"
            }
          >
            <div>
              <h2
                className={"section-heading"}
                dangerouslySetInnerHTML={{ __html: content.title }}
              />
            </div>

            {/* ================= MOBILE LAYOUT (< 1024px) ================= */}
            <div className="flex flex-col w-full gap-8 lg:hidden">
              {/* TOP ROW: Tabs (Header) */}
              <div
                ref={tabsRef}
                className="flex w-full overflow-x-auto no-scrollbar snap-x gap-4 px-4 -mx-4"
              >
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onClick={() => handleItemClick(index)}
                    className={`flex flex-row items-center gap-3 min-w-fit px-4 snap-center cursor-pointer relative pb-4 transition-opacity duration-300 ${
                      activeIndex === index ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <div className={"text-[#F2F7FE] text-2xl font-bold"}>
                      {item.id}
                    </div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                    <div className="text-[#F2F7FE] text-sm font-bold text-center leading-tight whitespace-nowrap">
                      {item.title}
                    </div>

                    {/* Tab Progress Bar (Bottom of Tab) */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                      {activeIndex === index && (
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: DURATION / 1000,
                            ease: "linear",
                          }}
                          className="h-full bg-gradient-to-r from-[#0EB5E8] to-[#1E4E8C] shadow-[0_0_15px_rgba(14,181,232,0.4)]"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM ROW: Content (Image + Description) */}
              <div className="flex flex-col gap-6 w-full">
                {/* Active Image */}
                <div className="w-full aspect-4/3 relative rounded-2xl overflow-hidden bg-white/5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={images[activeIndex]}
                        alt={`Vision Dominance Image ${activeIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Active Description */}
                <div className="min-h-[100px] flex items-start justify-center text-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px] max-w-[500px]"
                    >
                      {items[activeIndex].description}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* ================= DESKTOP LAYOUT (>= 1024px) ================= */}
            <div
              className={
                "hidden lg:flex w-full flex-row gap-12 relative items-start"
              }
            >
              {/* Left Column: Timeline Items */}
              <div className={"flex flex-col w-1/2"}>
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(index)} // Click interaction
                    className={`flex relative transition-opacity duration-500 cursor-pointer ${
                      activeIndex === index ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <div
                      className={
                        "text-[#F2F7FE] text-[40px] font-bold leading-[32px] w-[50px] flex-shrink-0 text-right"
                      }
                    >
                      {item.id}
                    </div>

                    {/* Timeline Track */}
                    <div className="w-[60px] flex flex-col items-center flex-shrink-0 relative">
                      {/* Base Grey Line */}
                      <div
                        className={`w-[1px] bg-slate-800 absolute top-2 bottom-0 ${index === 2 ? "bg-gradient-to-b from-slate-800 to-transparent" : ""}`}
                      ></div>

                      {/* Active Blue Line (Animated Progress) */}
                      <div className="absolute top-2 w-[3px] h-[120px] bg-transparent z-10 overflow-hidden rounded-full">
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: "0%" }}
                            animate={{ height: "100%" }}
                            transition={{
                              duration: DURATION / 1000,
                              ease: "linear",
                            }}
                            className="w-full bg-gradient-to-b from-[#0EB5E8] to-[#1E4E8C] shadow-[0_0_15px_rgba(14,181,232,0.4)]"
                          />
                        )}
                      </div>
                    </div>

                    <div
                      className={`flex flex-col gap-5 pt-1 ${index === 2 ? "" : "pb-24"}`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                      />
                      <div className={"flex flex-col gap-6"}>
                        <h3
                          className={
                            "text-[#F2F7FE] text-[28px] font-bold leading-[32px]"
                          }
                        >
                          {item.title}
                        </h3>
                        <p
                          className={
                            "max-w-[465px] text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px]"
                          }
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Sticky Image */}
              <div className="w-1/2 sticky top-24 self-start">
                <div className="w-full h-[calc(100vh-6rem)] relative rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <ParallaxReveal
                        src={images[activeIndex]}
                        alt={`Vision Dominance Image ${activeIndex + 1}`}
                        containerClassName={"w-full h-full rounded-2xl"}
                        width={10000}
                        height={10000}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"hidden lg:block absolute bottom-0 left-0 -z-10"}>
        <Image
          src={BgGrad}
          alt={"BgGrad"}
          width={1350}
          height={450}
          className={"w-[1050px] h-[1050px]"}
        />
      </div>
    </section>
  );
};

export default VisionDominance;
