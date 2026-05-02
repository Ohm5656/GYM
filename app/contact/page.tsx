import { MiniPageHero } from "@/components/MiniPageHero";
import { ContactSection } from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: "สอบถามรายละเอียดแพ็กเกจ จองคลาส หรือให้เราช่วยแนะนำโปรแกรมฟิตเนสที่เหมาะสมกับคุณ",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background-main">
      <MiniPageHero 
        label="GET IN TOUCH"
        title="ติดต่อเรา"
        image="/images/gym-equipment.webp"
      />
      
      <ContactSection />
    </main>
  );
}
