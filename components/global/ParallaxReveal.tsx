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

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Zoom effect: 1.2 -> 1.0
  const scale = useTransform(smoothProgress, [0, 0.5], [1.2, 1.0]);

  // Parallax effect: Slight vertical movement
  const y = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);

  // Exit animation: Fade out and blur as it leaves the viewport
  // 0.5 is when it's fully in view center, 1.0 is when it's leaving
  const opacity = useTransform(smoothProgress, [0.7, 1], [1, 0.7]);
  const blurValue = useTransform(smoothProgress, [0.7, 1], [0, 10]);
  const blur = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl w-full h-[500px]",
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
