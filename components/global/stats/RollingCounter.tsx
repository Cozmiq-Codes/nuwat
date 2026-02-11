"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface RollingCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  start?: boolean; // Trigger animation
  prefix?: string;
  suffix?: string;
}

const RollingCounter = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className,
  start = false,
  prefix = "",
  suffix = "",
}: RollingCounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: duration, // Use the prop duration
      delay: delay,
      ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for smooth effect
      onUpdate(value) {
        if (!node) return;
        node.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, delay, start, prefix, suffix]);

  return (
    <span ref={nodeRef} className={`tabular-nums ${className}`}>
      {prefix}
      {Math.round(from).toLocaleString()}
      {suffix}
    </span>
  );
};

export default RollingCounter;
