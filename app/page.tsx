import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      
      {/* Small Footer */}
      <footer className="py-12 border-t border-white/5 text-center bg-base-dark">
        <p className="text-cream/20 text-[10px] uppercase tracking-[0.4em]">
          Designed & Built by Hafsa Farooq • 2026
        </p>
      </footer>
    </main>
  );
}