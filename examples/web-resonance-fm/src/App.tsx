import { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Marquee } from "./components/Marquee";
import { References } from "./components/References";
import { Journal } from "./components/Journal";
import { Footer } from "./components/Footer";

export default function App() {
  // Smooth scroll — Lenis. Only signature motion that touches every section.
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Marquee />
      <References />
      <Journal />
      <Footer />
    </div>
  );
}
