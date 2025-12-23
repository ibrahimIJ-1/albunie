import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Agents from "@/components/sections/Agents";
import Contact from "@/components/sections/Contact";
import Logos from "@/components/sections/Logos";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header locale="en" />

      <Hero />
      <Logos />
      <Services />
      <Testimonials />
      <Agents />
      <Contact />

      <Footer />
    </main>
  );
}
