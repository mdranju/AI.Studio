import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let frame = 0;
    const dots: { x: number; y: number; baseX: number; baseY: number }[] = [];
    const spacing = 40;

    // Initialize dots grid
    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dots.length = 0;
      for (let x = 0; x < width + spacing; x += spacing) {
        for (let y = 0; y < height + spacing; y += spacing) {
          dots.push({ x, y, baseX: x, baseY: y });
        }
      }
    };

    init();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      frame += 0.02;

      dots.forEach((dot) => {
        // Wave math
        const waveX = Math.sin(dot.y * 0.005 + frame) * 15;
        const waveY = Math.cos(dot.x * 0.005 + frame) * 15;

        // Distance from center for slight vignette effect in movement
        const dx = dot.baseX - width / 2;
        const dy = dot.baseY - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
        const intensity = 1 - Math.min(dist / maxDist, 1);

        const x = dot.baseX + waveX * intensity;
        const y = dot.baseY + waveY * intensity;

        // Draw dot
        const size = 1.5 * intensity;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);

        // Color gradient based on position
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "#3b82f6");
        gradient.addColorStop(1, "#ffffff");
        ctx.fillStyle = `rgba(100, 149, 237, ${0.2 + intensity * 0.5})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-60"
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-0 pointer-events-none opacity-50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 border border-white/20 bg-white/5 backdrop-blur-sm text-xs tracking-[0.2em] uppercase mb-6 text-blue-200 rounded-xl">
            Design & Development Studio
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Building the <br /> <span className="text-white">Future</span> of
            Web.
          </h1>
          <p className="text-gray-400 md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-10">
            We craft digital experiences with surgical precision. Merging
            aesthetic excellence with robust engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 rounded-xl">
            <a
              href="#features"
              className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden hover:bg-[#3b82f6] hover:text-white rounded-xl transition-all duration-300"
            >
              <span className="relative z-10 ">Explore Our Work</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
