"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
}

export default function ParallaxReveal({
  src,
  alt,
  className,
  containerClassName,
  width = 1000,
  height = 1000,
}: ParallaxRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, [0, 0.5], [1.2, 1.0]);

  const y = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);

  const opacity = useTransform(smoothProgress, [0.7, 1], [1, 0.7]);
  const blurValue = useTransform(smoothProgress, [0.7, 1], [0, 10]);
  const blur = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl w-full h-62.5 md:h-125 lg:h-full",
        containerClassName,
      )}
    >
      <motion.div
        style={{
          scale,
          y,
          opacity,
          filter: blur,
        }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("w-full h-full object-cover", className)}
          priority
        />
      </motion.div>
    </div>
  );
}
