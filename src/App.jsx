import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Background/Particles";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-mesh relative selection:bg-primary/30 min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow hidden lg:block"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y 
        }}
      />

      {/* Background Particles */}
      <Particles />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
