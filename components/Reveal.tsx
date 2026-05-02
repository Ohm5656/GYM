"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  fullHeight?: boolean;
}

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const revealViewport = { once: true, margin: "-50px" };
const revealEase = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, width = "100%", delay = 0, className, fullHeight = false }: RevealProps) {
  return (
    <div style={{ position: "relative", width }} className={`${className || ""} ${fullHeight ? "h-full" : ""}`.trim()}>
      <LazyMotion features={domAnimation}>
        <m.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={{ duration: 0.6, delay, ease: revealEase }}
          className={fullHeight ? "h-full" : undefined}
        >
          {children}
        </m.div>
      </LazyMotion>
    </div>
  );
}
