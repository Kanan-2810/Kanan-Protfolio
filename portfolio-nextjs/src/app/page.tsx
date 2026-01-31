import Image from "next/image";
import {
  Hero,
  Resume,
  About,
  Expertise,
  Services,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Resume />
      <About />
      <Expertise />
      <Services />
      <Footer />
    </main>
  );
}
