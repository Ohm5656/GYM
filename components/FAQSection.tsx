"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

const faqs = [
  {
    question: "สมัครแล้วเริ่มใช้งานได้ทันทีไหม?",
    answer: "สามารถเริ่มใช้งานได้ทันทีหลังจากชำระเงินเสร็จสิ้น เจ้าหน้าที่จะทำการเปิดสิทธิ์การเข้าใช้งานให้ภายใน 15 นาที"
  },
  {
    question: "มีเทรนเนอร์แนะนำไหม?",
    answer: "สำหรับแพ็กเกจ PRO จะได้รับคำแนะนำการใช้อุปกรณ์เบื้องต้นฟรี และแพ็กเกจ ELITE จะมีเทรนเนอร์ส่วนตัวคอยดูแลอย่างใกล้ชิด"
  },
  {
    question: "สามารถทดลองเล่นก่อนได้ไหม?",
    answer: "เรามีบริการ Day Pass สำหรับผู้ที่ต้องการทดลองใช้งานก่อนตัดสินใจสมัครแพ็กเกจรายเดือน"
  },
  {
    question: "ชำระเงินช่องทางไหนได้บ้าง?",
    answer: "เรารองรับการชำระเงินผ่านบัตรเครดิต, พร้อมเพย์ (PromptPay), และการโอนเงินผ่านบัญชีธนาคาร"
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto mt-24">
      <Reveal>
        <h3 className="text-2xl font-bold text-center mb-10 text-white">คำถามที่พบบ่อย (FAQ)</h3>
      </Reveal>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div 
              className="border border-border rounded-xl bg-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span className="font-medium text-white text-lg">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={clsx(
                    "text-accent-gold transition-transform duration-300",
                    openIndex === idx ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={clsx(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === idx ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-text-muted text-base leading-relaxed border-t border-border/50 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
