import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { TrainerSection } from "@/components/TrainerSection";
import { MembershipSection } from "@/components/MembershipSection";
import { TransformationSection } from "@/components/TransformationSection";
import { GallerySection } from "@/components/GallerySection";
import { FinalCTA } from "@/components/FinalCTA";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "IRON FIT CLUB",
    "image": "https://ironfitclub.com/og-image.jpg",
    "@id": "https://ironfitclub.com",
    "url": "https://ironfitclub.com",
    "telephone": "099-999-9999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 ถนนสุขุมวิท",
      "addressLocality": "กรุงเทพฯ",
      "addressRegion": "BKK",
      "postalCode": "10110",
      "addressCountry": "TH"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://facebook.com/ironfitclub",
      "https://instagram.com/ironfitclub"
    ]
  };

  return (
    <main className="min-h-screen">
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FacilitiesSection />
      <TrainerSection />
      <MembershipSection />
      <TransformationSection />
      <GallerySection />
      <FinalCTA />
    </main>
  );
}
