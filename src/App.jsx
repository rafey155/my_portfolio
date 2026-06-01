import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lenis from "lenis";

function App() {
  // Setup Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Global Scroll Reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px -10% -10% 0px", // Trigger slightly inside the viewport boundary
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] selection:bg-[#22d3ee]/20 selection:text-[#22d3ee] overflow-x-hidden font-sans">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section (WebGL Particles background) */}
        <Hero />

        {/* Services Grid (3-column tilt cards) */}
        <Services />

        {/* Technical Arsenal (Technical Stack) */}
        <Skills />

        {/* Featured Projects (Alternating zig-zag) */}
        <Projects />

        {/* Contact Form (Centered large glass panel + metadata footer) */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}

export default App;
