import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Wallbox from "@/components/Wallbox";
import Guarantees from "@/components/Guarantees";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Wallbox />
        <Guarantees />
        <Gallery />
        <Process />
        <Pricing />
        <About />
        <Faq />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <FloatingCall />
      <ScrollFx />
    </>
  );
}
