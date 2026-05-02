import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { siteData } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function TrainerSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 relative bg-section border-t border-border/50">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <SectionHeader
          label="EXPERT COACHES"
          title="ทีมเทรนเนอร์มืออาชีพ"
          description="ให้คำปรึกษาและดูแลการฝึกของคุณอย่างใกล้ชิด เพื่อให้คุณไปถึงเป้าหมายได้อย่างปลอดภัยและเห็นผล"
          actionLabel="ดูโปรไฟล์ทั้งหมด"
          actionHref="/trainers"
        />

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {siteData.trainers.map((trainer, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Link href="/trainers" className="block group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] border border-border/50 bg-card">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  quality={70}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Smoother gradient so bottom text is perfectly readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-block border border-accent-gold/30 text-accent-gold bg-background-main/60 backdrop-blur-md text-[10px] md:text-xs font-bold px-3 py-1.5 mb-3 rounded-full font-english tracking-widest uppercase">
                      {trainer.specialty}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-english font-bold text-white mb-2">{trainer.name}</h3>
                    <p className="text-text-muted text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 leading-relaxed">
                      {trainer.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-4 text-accent-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      <span className="text-sm font-bold tracking-wide">จองเทรนเนอร์</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
