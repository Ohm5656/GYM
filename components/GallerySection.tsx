import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { siteData } from "@/lib/data";
import Image from "next/image";

export function GallerySection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background-main relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <SectionHeader
          label="GALLERY"
          title="บรรยากาศภายในคลับ"
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">
          {siteData.gallery.map((image, idx) => {
            // Create a masonry-like staggered layout
            const isLarge = idx === 0 || idx === 3;
            
            return (
              <Reveal key={idx} delay={idx * 0.1} className={isLarge ? "md:col-span-2 md:row-span-2" : ""} fullHeight={isLarge}>
                <div 
                  className={`group relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 cursor-pointer bg-background-light/30 flex items-center justify-center ${isLarge ? "h-full" : "aspect-square"}`}
                >
                  {idx === 5 ? (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <div className="w-16 h-16 rounded-full border-2 border-accent-gold/50 flex items-center justify-center text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-500">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                      <span className="font-thai text-xl font-medium text-white group-hover:text-accent-gold transition-colors duration-300">รูปภาพเพิ่มเติม</span>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={image}
                        alt={`Gym gallery image ${idx + 1}`}
                        fill
                        quality={65}
                        sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-background-main/20 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Hover overlay with plus icon */}
                      <div className="absolute inset-0 bg-accent-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-sm">
                        <span className="w-12 h-12 rounded-full border-2 border-background-main flex items-center justify-center text-background-main mb-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </span>
                        <span className="font-english text-background-main font-bold tracking-widest text-sm uppercase">View Full</span>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
