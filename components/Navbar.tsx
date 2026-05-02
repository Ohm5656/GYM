"use client";

import { useState, useEffect, useRef } from "react";
import { siteData } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const desktopLinks = siteData.navLinks.slice(1).filter((link) => link.href !== "/contact");
const mobileLinks = siteData.navLinks.filter((link) => link.href !== "/contact");

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolledState = () => {
      frameRef.current = null;
      const nextIsScrolled = window.scrollY > 50;

      if (isScrolledRef.current !== nextIsScrolled) {
        isScrolledRef.current = nextIsScrolled;
        setIsScrolled(nextIsScrolled);
      }
    };

    const handleScroll = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateScrolledState);
      }
    };

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        {
          "bg-background-main/90 backdrop-blur-md border-b border-border py-4": isScrolled,
          "bg-transparent py-6": !isScrolled,
        }
      )}
    >
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo - Left */}
        <div className="flex justify-start">
          <Link href="/" className="text-2xl font-english font-bold tracking-widest text-white">
            IRON<span className="text-accent-gold ml-1">FIT</span>
          </Link>
        </div>

        {/* Desktop Menu - Center */}
        <div className="hidden md:flex justify-center">
          <ul className="flex items-center gap-8">
            {desktopLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "text-sm font-medium transition-colors hover:text-accent-gold",
                      isActive ? "text-white" : "text-text-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA - Right */}
        <div className="hidden md:flex justify-end">
          <Link href="/contact">
            <Button variant="primary" size="sm">ติดต่อเรา</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden justify-end">
          <button
            className="text-white hover:text-accent-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background-main border-b border-border p-6 flex flex-col gap-6 shadow-2xl">
          <ul className="flex flex-col gap-4 items-center">
            {mobileLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      "text-lg font-medium transition-colors block",
                      isActive ? "text-accent-gold" : "text-text-muted hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full mt-2">ติดต่อเรา</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
