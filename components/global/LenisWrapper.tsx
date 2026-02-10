"use client";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface LenisWrapperProps {
  children: ReactNode;
}

const LenisWrapper = ({ children }: LenisWrapperProps) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;
