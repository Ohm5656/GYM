import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "./Button";
import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-section relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              label="CONTACT US"
              title="ติดต่อเรา"
              description="สอบถามข้อมูลเพิ่มเติมเกี่ยวกับแพ็กเกจ บริการ หรือนัดหมายเข้าชมฟิตเนส"
            />

            <div className="space-y-8 mb-12">
              <Reveal delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="bg-background-soft p-3 rounded-sm border border-border text-accent-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">โทรศัพท์</h4>
                    <p className="text-text-muted">099-999-9999</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="bg-background-soft p-3 rounded-sm border border-border text-accent-orange">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">เวลาเปิดบริการ</h4>
                    <p className="text-text-muted">ทุกวัน 06:00 - 22:00 น.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="bg-background-soft p-3 rounded-sm border border-border text-accent-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">ที่อยู่</h4>
                    <p className="text-text-muted">123 ถนนสุขุมวิท กรุงเทพฯ</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="gap-2">
                  <MessageCircle size={20} /> แชทผ่าน Line
                </Button>
                <Button variant="secondary" className="gap-2">
                  <MapPin size={20} /> ดูแผนที่
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex gap-4 mt-12">
                <a href="#" className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-accent-orange transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-accent-orange transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map Placeholder */}
          <Reveal delay={0.3}>
            <div className="h-full min-h-[400px] bg-card border border-border rounded-sm relative overflow-hidden flex items-center justify-center group">
              <Image
                src="/images/map-preview.webp"
                alt="Map location preview"
                fill
                quality={45}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center opacity-20 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background-main/50" />
              <div className="relative z-10 text-center">
                <MapPin size={48} className="mx-auto mb-4 text-accent-orange opacity-50" />
                <p className="text-text-muted font-english tracking-widest text-sm uppercase">Interactive Map Placeholder</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
