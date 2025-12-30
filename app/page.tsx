import { Navbar } from "@/components/navbar";
import ShaderBackground from "@/components/shader-background";
import { HeroSection } from "@/components/hero";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <div> 
      <header>
      <Navbar />
      </header>
      <ShaderBackground> 
      <main className="mt-16">  
        <HeroSection />
        <FAQ />
        </main>
      </ShaderBackground>
    </div>
)
}
