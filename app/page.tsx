import FloatingTechIcons from "@/components/FloatingTechIcons/view";
import ParallaxSection from "@/components/ParallaxSection/view";
import Testimonials from "@/components/Testimonials/view";
import About from "@/components/about/view";
import Contact from "@/components/contact/view";
import { _Header } from "@/components/header";
import Hero from "@/components/hero/view";
import Services from "@/components/services/view";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <FloatingTechIcons />
    <Services />
    <About />
    <Testimonials />
    <Contact />
    </>
  );
}
