import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { siteData } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  const previewServices = siteData.services.slice(0, 4);

  return (
    <section className="py-16 md:py-24 lg:py-28 relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-10xl">
        <SectionHeader
          label="TRAINING PROGRAMS"
          title="บริการฟิตเนสครบวงจร"
          description="โปรแกรมการฝึกที่หลากหลาย ออกแบบมาเพื่อตอบโจทย์ทุกเป้าหมายของสมาชิก"
          actionLabel="ดูบริการทั้งหมด"
          actionHref="/services"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {previewServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={idx * 0.1}>
                <Link href="/services" className="block h-full">
                  <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden h-[300px] md:h-[340px] border border-border/50 bg-card">
                    {/* Background Image that appears on hover */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      quality={55}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/80 to-background-main/20 group-hover:from-background-main group-hover:via-background-main/90 transition-colors duration-700" />

                    <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                      <div className="mb-4 transform group-hover:-translate-y-4 transition-transform duration-700">
                        <div className="w-12 h-12 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold mb-5 group-hover:bg-accent-gold group-hover:text-background-main transition-colors duration-500">
                          <Icon size={22} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-text-muted line-clamp-2 leading-relaxed opacity-80">{service.description}</p>
                      </div>

                      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 flex items-center gap-2 text-accent-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-sm font-bold tracking-wide">อ่านเพิ่มเติม</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
