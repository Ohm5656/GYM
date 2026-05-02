import { Reveal } from "./Reveal";
import { Button } from "./Button";

export function ContactForm() {
  return (
    <Reveal delay={0.2}>
      <form className="bg-card border border-border p-8 md:p-10 rounded-2xl flex flex-col gap-6 shadow-xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-[80px] pointer-events-none" />
        
        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">ส่งข้อความหาเรา</h3>
        
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-text-muted font-medium">ชื่อ-นามสกุล</label>
            <input 
              type="text" 
              id="name" 
              className="bg-background-main border border-border rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-accent-gold transition-colors"
              placeholder="ระบุชื่อของคุณ"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm text-text-muted font-medium">เบอร์โทรศัพท์</label>
            <input 
              type="tel" 
              id="phone" 
              className="bg-background-main border border-border rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-accent-gold transition-colors"
              placeholder="08X-XXX-XXXX"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <label htmlFor="goal" className="text-sm text-text-muted font-medium">เป้าหมายการออกกำลังกาย</label>
          <div className="relative">
            <select 
              id="goal" 
              className="w-full bg-background-main border border-border rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-accent-gold transition-colors appearance-none"
            >
              <option value="">เลือกเป้าหมาย</option>
              <option value="weight_loss">ลดน้ำหนัก / ลดไขมัน</option>
              <option value="muscle">เพิ่มกล้ามเนื้อ</option>
              <option value="health">เพื่อสุขภาพแข็งแรง</option>
              <option value="other">อื่นๆ</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <label htmlFor="message" className="text-sm text-text-muted font-medium">ข้อความเพิ่มเติม</label>
          <textarea 
            id="message" 
            rows={4}
            className="bg-background-main border border-border rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-accent-gold transition-colors resize-none"
            placeholder="พิมพ์ข้อความของคุณที่นี่..."
          ></textarea>
        </div>

        <Button variant="primary" className="w-full mt-2 py-4 text-lg rounded-full relative z-10">
          ส่งข้อความ
        </Button>
      </form>
    </Reveal>
  );
}
