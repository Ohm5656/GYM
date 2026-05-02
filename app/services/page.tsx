import { MiniPageHero } from "@/components/MiniPageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { siteData } from "@/lib/data";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "บริการและคลาสออกกำลังกาย",
  description: "พบกับบริการฟิตเนสครบวงจรของเรา ทั้งเทรนเนอร์ส่วนตัว คลาสกลุ่ม และโปรแกรมโภชนาการ เพื่อรูปร่างที่คุณใฝ่ฝัน",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background-main">
      <MiniPageHero 
        label="SERVICES" 
        title="บริการฟิตเนสครบวงจร" 
        image="/images/weight-room.webp" 
      />
      
      <div className="py-24">
        <div className="container mx-auto px-6 space-y-24 md:space-y-32">
          {siteData.services.map((service, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <Reveal key={service.id} delay={0.1}>
                <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                  <div className={clsx("order-2", { "md:order-2": !isEven, "md:order-1": isEven })}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                        <service.icon size={24} />
                      </div>
                      <span className="font-english text-xl font-bold text-accent-gold opacity-50 tracking-widest">{service.id}</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">{service.title}</h2>
                    <p className="text-text-muted text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-white font-medium mb-4">ประโยชน์ที่คุณจะได้รับ:</h4>
                      <ul className="space-y-3">
                        {service.benefits?.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-accent-gold" />
                            <span className="text-text-muted">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-10 bg-card/50 p-6 rounded-xl border border-border/50">
                      <span className="block text-sm text-text-muted mb-2">เหมาะสำหรับ</span>
                      <span className="text-white font-medium">{service.suitableFor}</span>
                    </div>
                    
                    <Link href="/contact">
                      <Button variant="primary" className="w-full sm:w-auto">
                        สอบถามบริการนี้
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={clsx("order-1", { "md:order-1": !isEven, "md:order-2": isEven })}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group border border-border/50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        quality={70}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-main/60 to-transparent" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      
      <FinalCTA />
    </main>
  );
}
