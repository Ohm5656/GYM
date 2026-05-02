import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai, Oswald } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NavigationWarmup } from "@/components/NavigationWarmup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"], variable: "--font-noto-sans-thai", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ironfitclub.com"),
  title: {
    default: "IRON FIT CLUB | ฟิตเนสพรีเมียมสำหรับคนที่ต้องการเปลี่ยนแปลงตัวเอง",
    template: "%s | IRON FIT CLUB",
  },
  description: "ฟิตเนสพรีเมียมสำหรับการลดไขมัน เพิ่มกล้ามเนื้อ เทรนเนอร์ส่วนตัว คลาสออกกำลังกาย และโปรแกรมดูแลสุขภาพครบวงจร",
  keywords: ["ฟิตเนส", "ยิม", "เทรนเนอร์ส่วนตัว", "ลดน้ำหนัก", "เพิ่มกล้ามเนื้อ", "คลาสออกกำลังกาย", "fitness club", "gym thailand"],
  openGraph: {
    title: "IRON FIT CLUB | ฟิตเนสพรีเมียมสำหรับคนที่ต้องการเปลี่ยนแปลงตัวเอง",
    description: "ฟิตเนสพรีเมียมสำหรับการลดไขมัน เพิ่มกล้ามเนื้อ เทรนเนอร์ส่วนตัว คลาสออกกำลังกาย และโปรแกรมดูแลสุขภาพครบวงจร",
    url: "https://ironfitclub.com",
    siteName: "IRON FIT CLUB",
    locale: "th_TH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          notoSansThai.variable,
          oswald.variable,
          "font-thai bg-background-main text-text-main antialiased selection:bg-accent-orange selection:text-white"
        )}
      >
        <NavigationWarmup />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
