import { Navbar } from "@/components/navbar";
import ShaderBackground from "@/components/shader-background";
import { HeroSection } from "@/components/hero";
import { Features } from "@/components/features";
import { FAQ } from "@/components/faq";
import { BrowserShowcase } from "@/components/browser-showcase";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <ShaderBackground>
        <main className="mt-16">
          <HeroSection />
          <BrowserShowcase />
          <Features />
          <FAQ />
        </main>
        <Footer />
      </ShaderBackground>
    </div>
  );
}
