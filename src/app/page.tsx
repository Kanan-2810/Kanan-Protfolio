import { DarkRegion } from "@/components/layout/DarkRegion";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Cta } from "@/components/sections/Cta";
import { Engagement } from "@/components/sections/Engagement";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Insights } from "@/components/sections/Insights";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Stats />
      <Projects />

      {/* Light → dark → light is the spine of the page. */}
      <DarkRegion>
        <Services />
        <Engagement />
        <Testimonials />
      </DarkRegion>

      <Faq />
      <Insights />
      <Cta />
      <Footer />
    </main>
  );
}
