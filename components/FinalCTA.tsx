

import { Button } from "./Button";
import { Reveal } from "./Reveal";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background-main border-t border-border/50">
      {/* Background Texture & Glow */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
        <Reveal>
          <span className="font-english tracking-[0.3em] text-xs md:text-sm text-accent-gold uppercase font-bold mb-4 block">
            START TODAY
          </span>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            พร้อมเริ่มเปลี่ยนตัวเองหรือยัง?
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            เริ่มต้นวันนี้กับพื้นที่ออกกำลังกายที่พร้อมดูแลคุณทุกเป้าหมาย ไม่ว่าจะลดน้ำหนัก เพิ่มกล้ามเนื้อ หรือเริ่มต้นดูแลสุขภาพอย่างจริงจัง
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/packages" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                สมัครสมาชิกวันนี้
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                ติดต่อสอบถาม
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
