import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import Image from "next/image";

const features = [
  "อุปกรณ์ครบทุกโซน",
  "เทรนเนอร์ดูแลใกล้ชิด",
  "เหมาะทั้งมือใหม่และสายจริงจัง",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-section relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="ABOUT THE CLUB"
              title="มากกว่ายิม คือพื้นที่สำหรับสร้างร่างกายที่แข็งแรงกว่าเดิม"
              description="เราออกแบบพื้นที่ออกกำลังกายให้เหมาะกับทุกเป้าหมาย ไม่ว่าจะเป็นการลดน้ำหนัก เพิ่มกล้ามเนื้อ ฟื้นฟูสุขภาพ หรือเริ่มต้นออกกำลังกายอย่างถูกวิธี พร้อมบรรยากาศที่เป็นส่วนตัว อุปกรณ์ครบครัน และทีมงานที่คอยให้คำแนะนำอย่างใกล้ชิด"
            />
            
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <Reveal key={idx} delay={0.3 + idx * 0.1}>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-accent-orange" size={24} />
                    <span className="text-lg font-medium">{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden group">
              <Image
                src="/images/personal-training.webp"
                alt="IRON FIT CLUB training session"
                fill
                quality={65}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center brightness-[0.72] contrast-[1.12] saturate-[0.88] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background-main/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/30 to-background-main/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-background-main/45 via-transparent to-background-main/45" />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.75)]" />
              {/* Orange highlight line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-2xl font-english font-bold text-white tracking-wider">
                  IRON FIT CLUB
                </div>
                <div className="text-accent-orange font-medium mt-2">PREMIUM FITNESS</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
