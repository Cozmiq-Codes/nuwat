"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface NuwatCodeProps {
  title: string;
  items: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
}

const NuwatCode = ({ title, items }: NuwatCodeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      className={
        "relative bg-[url('/about/nuwat-code/bg.svg')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center w-full gap-12"}>
            <div>
              <h2 className={"section-heading"}>{title}</h2>
            </div>

            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className={
                "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 group"
              }
            >
              {items.map((principle, index) => (
                <SpotlightCard
                  key={principle.id}
                  principle={principle}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({
  principle,
  index,
}: {
  principle: { title: string; description: string; image: string };
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Set initial position
    const updatePosition = () => {
      if (cardRef.current) {
        cardRef.current.style.setProperty(
          "--card-x",
          `${cardRef.current.offsetLeft}px`,
        );
        cardRef.current.style.setProperty(
          "--card-y",
          `${cardRef.current.offsetTop}px`,
        );
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: 0.2 * index,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="code-card-bg flex flex-col gap-8 rounded-2xl p-6 relative overflow-hidden group/card"
    >
      {/* Spotlight Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            600px circle at calc(var(--mouse-x, 0px) - var(--card-x, 0px)) calc(var(--mouse-y, 0px) - var(--card-y, 0px)), 
            rgba(255, 255, 255, 0.1), 
            transparent 40%
          )`,
        }}
      />

      {/* Content */}
      <Image
        src={principle.image}
        alt={principle.title}
        className={
          "w-[48px] h-[48px] z-10 transition-all duration-500 group-hover/card:drop-shadow-[0_0_8px_rgba(47,128,237,0.6)]"
        }
        width={48}
        height={48}
      />

      <div className={"flex flex-col gap-[14px] z-10"}>
        <h3 className={"text-white text-[24px] font-bold leading-[40px]"}>
          {principle.title}
        </h3>
        <p className={"text-white text-[16px] font-normal leading-6"}>
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
};

export default NuwatCode;
