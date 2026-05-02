import { MiniPageHero } from "@/components/MiniPageHero";
import { MembershipSection } from "@/components/MembershipSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แพ็กเกจสมาชิกและราคา",
  description: "เลือกแพ็กเกจที่เหมาะกับคุณ พร้อมสิทธิพิเศษมากมาย สมัครวันนี้เพื่อเริ่มต้นเปลี่ยนแปลงตัวเอง",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background-main">
      <MiniPageHero 
        label="MEMBERSHIP"
        title="แพ็กเกจสมาชิก"
        image="/images/weight-room.webp"
      />
      
      <MembershipSection hideHeader={true} />
      
      <FAQSection />
      
      <FinalCTA />
    </main>
  );
}
