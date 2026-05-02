import { siteData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-background-main border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-english font-bold tracking-widest text-white mb-2 block">
            IRON <span className="text-accent-orange">FIT</span> CLUB
          </a>
          <p className="text-text-muted text-sm max-w-sm">
            พื้นที่ออกกำลังกายสำหรับคนที่ต้องการพัฒนาร่างกายอย่างจริงจัง
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {siteData.navLinks.slice(0, 4).map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-accent-orange transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-text-muted text-xs font-english">
          &copy; {new Date().getFullYear()} IRON FIT CLUB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
