import { MiniPageHero } from "@/components/MiniPageHero";
import { siteData } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ทีมเทรนเนอร์มืออาชีพ",
  description: "ทำความรู้จักกับทีมเทรนเนอร์มากประสบการณ์ของเรา ที่พร้อมให้คำปรึกษาและดูแลการฝึกของคุณอย่างใกล้ชิด",
};

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-background-main">
      <MiniPageHero 
        label="EXPERT COACHES"
        title="ทีมเทรนเนอร์มืออาชีพ"
        image="/images/personal-training.webp"
      />
      
      <div className="py-24">
        <div className="container mx-auto px-6 space-y-24">
          {siteData.trainers.map((trainer, idx) => (
            <Reveal key={idx} delay={0.1}>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-1 md:order-none">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group border border-border/50 max-w-md mx-auto md:mx-0">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      quality={70}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-main/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                      <a href="#" aria-label={`${trainer.name} Instagram`} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-gold transition-colors border border-white/10">
                        <Instagram size={18} />
                      </a>
                      <a href="#" aria-label={`${trainer.name} Twitter`} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-gold transition-colors border border-white/10">
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="order-2 md:order-none">
                  <div className="inline-block border border-accent-gold/30 text-accent-gold bg-accent-gold/5 text-sm font-bold px-4 py-2 mb-4 rounded-full font-english tracking-widest uppercase">
                    {trainer.specialty}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-english font-bold text-white mb-6 leading-tight">{trainer.name}</h2>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8 border-y border-border/50 py-6">
                    <div>
                      <span className="block text-sm text-text-muted mb-1">ประสบการณ์</span>
                      <span className="text-white font-bold text-xl">{trainer.experience}</span>
                    </div>
                    <div>
                      <span className="block text-sm text-text-muted mb-1">สไตล์การสอน</span>
                      <span className="text-white font-bold">{trainer.style}</span>
                    </div>
                  </div>
                  
                  <p className="text-text-muted text-lg mb-10 leading-relaxed">
                    {trainer.description}
                  </p>
                  
                  <Link href="/contact">
                    <Button variant="primary" className="w-full sm:w-auto">
                      จองเวลาเทรน
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
