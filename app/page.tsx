import { Navbar } from "@/components/navbar";
import ShaderBackground from "@/components/shader-background";
import { HeroSection } from "@/components/hero";

export default function Home() {
  return (
    <div> 
      <header>
      <Navbar />
      </header>
      <ShaderBackground> 
      <main>  
        <HeroSection />
        </main>
      </ShaderBackground>
    </div>
)
}
