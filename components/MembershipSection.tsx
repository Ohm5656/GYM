

import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { siteData } from "@/lib/data";
import { Check } from "lucide-react";
import { Button } from "./Button";
import { clsx } from "clsx";
import Link from "next/link";

interface MembershipSectionProps {
  isPreview?: boolean;
  hideHeader?: boolean;
}

export function MembershipSection({ isPreview = false, hideHeader = false }: MembershipSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background-main relative overflow-hidden border-t border-border/50">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-gold/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {!hideHeader && (
          isPreview ? (
            <SectionHeader
              label="MEMBERSHIP"
              title="เลือกแพ็กเกจที่เหมาะกับคุณ"
              description="สมัครสมาชิกวันนี้เพื่อรับสิทธิพิเศษและเริ่มต้นเปลี่ยนแปลงตัวเองไปกับเรา"
              actionLabel="ดูแพ็กเกจทั้งหมด"
              actionHref="/packages"
            />
          ) : (
            <SectionHeader
              label="MEMBERSHIP"
              title="เลือกแพ็กเกจที่เหมาะกับคุณ"
              centered
            />
          )
        )}

        <div className="grid lg:grid-cols-3 gap-5 md:gap-8 items-center mt-4">
          {siteData.packages.map((pkg, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div
                className={clsx(
                  "relative rounded-2xl md:rounded-3xl p-6 md:p-10 transition-transform duration-500 hover:-translate-y-2",
                  {
                    "bg-card border border-border/50": !pkg.popular,
                    "bg-card border border-accent-gold/50 shadow-[0_0_40px_rgba(214,168,79,0.08)] lg:-translate-y-4 lg:hover:-translate-y-6":
                      pkg.popular,
                  }
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-orange to-accent-gold text-background-main font-english font-bold text-xs tracking-widest px-5 py-1.5 rounded-full shadow-lg shadow-accent-gold/20">
                    POPULAR
                  </div>
                )}
                
                <h3 className="text-xl font-english font-bold text-text-muted mb-1">{pkg.name}</h3>
                <div className="text-white font-medium mb-6 text-lg">{pkg.thaiName}</div>
                
                <div className="mb-8 border-b border-border/50 pb-8">
                  <span className="text-4xl md:text-5xl font-english font-bold text-white tracking-tight">{pkg.price}</span>
                  <span className="text-text-muted font-english text-sm ml-1">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-accent-gold/10 p-1 rounded-full text-accent-gold shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={pkg.popular ? "/packages" : "/contact"}>
                  <Button
                    variant={pkg.popular ? "primary" : "secondary"}
                    className="w-full rounded-full"
                  >
                    {pkg.buttonText}
                  </Button>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
