import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a brief initial load for smooth entry
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#050505] text-white selection:bg-[#3b82f6] selection:text-white transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
