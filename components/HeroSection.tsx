"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "./Button";
import { siteData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const heroEase = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
      {/* Background Image & Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gym-class.webp"
          alt="Premium luxury gym interior"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background-main/60" /> {/* Dark overall tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-main/80 via-transparent to-background-main" /> {/* Vignette top and bottom */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background-main/50 to-background-main" /> {/* Radial vignette */}
        
        {/* Abstract motion ring glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] border border-accent-gold/10 bg-accent-orange/5 blur-3xl transform -rotate-12 pointer-events-none" />
      </div>

      <LazyMotion features={domAnimation}>
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: heroEase }}
            className="flex flex-col items-center"
          >
          <span className="font-english tracking-[0.3em] text-xs md:text-sm text-accent-gold uppercase font-bold mb-6 block drop-shadow-md">
            Premium Fitness Club
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.15] text-white">
            ยกระดับการฝึก <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-text-muted">
              สู่ร่างกายที่แข็งแรงกว่าเดิม
            </span>
          </h1>
          <p className="text-text-muted text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            ฟิตเนสพรีเมียมสำหรับคนที่ต้องการดูแลสุขภาพ ลดไขมัน เพิ่มกล้ามเนื้อ และฝึกอย่างมีเป้าหมาย พร้อมบรรยากาศระดับมืออาชีพ
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mb-16 w-full sm:w-auto">
            <Link href="/packages" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                เริ่มต้นวันนี้
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                ดูบริการ
              </Button>
            </Link>
          </div>
          </m.div>
        </div>

        {/* Elegant Stats Row */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-10 left-0 right-0 z-10"
        >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8 max-w-4xl mx-auto">
            {siteData.heroStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-english font-light text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
