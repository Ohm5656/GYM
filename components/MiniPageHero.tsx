"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

interface MiniPageHeroProps {
  label: string;
  title: string;
  image?: string;
}

const miniHeroTransition = { duration: 0.8, ease: "easeOut" } as const;

export function MiniPageHero({ label, title, image = "/images/gym-equipment.webp" }: MiniPageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/60 to-background-main/20" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={miniHeroTransition}
          >
            <span className="font-english tracking-[0.3em] text-xs text-accent-gold uppercase font-bold mb-4 block drop-shadow-sm">
              {label}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {title}
            </h1>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
