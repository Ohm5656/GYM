import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { siteData } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function TransformationSection() {
  const previewTestimonials = siteData.testimonials.slice(0, 2);

  return (
    <section className="py-16 md:py-24 lg:py-28 relative border-t border-border/50 bg-section overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <SectionHeader
          label="CLIENT REVIEWS"
          title="เสียงจากสมาชิกที่เห็นผลจริง"
          description="ส่วนหนึ่งของความสำเร็จจากสมาชิกของเรา ที่สามารถเปลี่ยนแปลงตัวเองและไปถึงเป้าหมายได้"
          actionLabel="อ่านรีวิวทั้งหมด"
          actionHref="/reviews"
        />

        <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
          {previewTestimonials.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-card p-8 md:p-10 rounded-2xl md:rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500 border border-border/50 h-full flex flex-col justify-between">
                <div>
                  <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-accent-gold/10 transition-colors duration-500 w-20 h-20" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-10 relative z-10 font-light">
                    "{item.review}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 relative z-10">
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
    </section>
  );
}
