"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export default function Floating({
  children,
  className,
  duration = 3,
  yOffset = 10,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
