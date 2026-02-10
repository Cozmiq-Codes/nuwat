"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 40,
}: FadeInProps & { y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.0,
        ease: [0.2, 0.8, 0.2, 1],
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
