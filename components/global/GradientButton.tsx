"use client";
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const GradientButton = ({
  children,
  variant = "primary",
  className,
  ...props
}: GradientButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-8 py-3 font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
          : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20",
        className,
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default GradientButton;
