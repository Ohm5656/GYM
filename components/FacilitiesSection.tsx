import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Check } from "lucide-react";
import { siteData } from "@/lib/data";
import Image from "next/image";

export function FacilitiesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Reveal delay={0.1}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                  <Image
                    src="/images/gym-equipment.webp"
                    alt="Gym facility 1"
                    fill
                    quality={60}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background-main/30 group-hover:bg-background-main/10 transition-colors duration-500" />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group translate-y-8 md:translate-y-12">
                  <Image
                    src="/images/strength-training.webp"
                    alt="Gym facility 2"
                    fill
                    quality={60}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background-main/30 group-hover:bg-background-main/10 transition-colors duration-500" />
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group -translate-y-4 md:-translate-y-6">
                  <Image
                    src="/images/personal-training.webp"
                    alt="Gym facility 3"
                    fill
                    quality={60}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background-main/30 group-hover:bg-background-main/10 transition-colors duration-500" />
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group translate-y-4 md:translate-y-6">
                  <Image
                    src="/images/weight-room.webp"
                    alt="Gym facility 4"
                    fill
                    quality={60}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background-main/30 group-hover:bg-background-main/10 transition-colors duration-500" />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="order-1 lg:order-2 mt-12 lg:mt-0">
            <SectionHeader
              label="FACILITIES"
              title="อุปกรณ์ครบ บรรยากาศพร้อม สำหรับทุกการฝึก"
              description="พื้นที่ออกกำลังกายที่ได้รับการออกแบบมาอย่างดี เพื่อความสะดวกสบายและประสิทธิภาพสูงสุดของคุณ"
            />
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 mt-10">
              {siteData.facilities.map((facility, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent-gold/10 p-2 rounded-full text-accent-gold border border-accent-gold/20 group-hover:bg-accent-gold group-hover:text-background-main transition-colors duration-300">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-text-muted font-medium text-lg group-hover:text-white transition-colors">{facility}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
