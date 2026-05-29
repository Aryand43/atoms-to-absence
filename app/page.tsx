import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ResearchDirectionSection } from "@/components/sections/research-direction-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <ResearchDirectionSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
