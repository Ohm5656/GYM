import { MiniPageHero } from "@/components/MiniPageHero";
import { siteData } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import { Star, Quote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "รีวิวจากสมาชิก",
  description: "เสียงยืนยันจากสมาชิกที่เห็นผลจริง กับการเปลี่ยนแปลงตัวเองด้วยโปรแกรมฟิตเนสของเรา",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background-main">
      <MiniPageHero 
        label="SUCCESS STORIES"
        title="รีวิวและผลลัพธ์"
        image="/images/gym-class.webp"
      />
      
      <div className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.testimonials.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-card p-8 rounded-3xl relative group border border-border/50 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-accent-gold/10 transition-colors duration-500 w-16 h-16" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-accent-gold text-accent-gold" />
                      ))}
                    </div>
                    
                    <p className="text-white/80 text-lg leading-relaxed mb-8 relative z-10 font-light">
                      "{item.review}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 relative z-10 border-t border-border/50 pt-6">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center font-english font-bold text-accent-gold text-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-xs text-accent-gold font-english tracking-widest uppercase mt-0.5">Verified Member</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      
      <FinalCTA />
    </main>
  );
}
