import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { siteData } from "@/lib/data";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-section relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-accent-orange/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          label="CLIENT REVIEWS"
          title="เสียงจากคนที่เริ่มต้นแล้วเห็นผลจริง"
          centered
        />

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.testimonials.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="glass-card p-8 rounded-sm relative group hover:-translate-y-2 transition-transform duration-300">
                <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-accent-orange/10 transition-colors duration-300 w-16 h-16" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent-orange text-accent-orange" />
                  ))}
                </div>
                
                <p className="text-text-muted leading-relaxed mb-8 relative z-10 min-h-[100px]">
                  "{item.review}"
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-background-soft border border-border flex items-center justify-center font-english font-bold text-accent-orange">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.name}</div>
                    <div className="text-xs text-text-muted">Verified Member</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
