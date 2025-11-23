import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import type { Testimonial } from "@/types/types";
// import { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "CTO",
    company: "NexTech",
    content:
      "Studio didn't just build a site; they built an experience. The shader work in the hero section alone increased our time-on-page by 40%.",
    image: "https://picsum.photos/100/100?random=1",
  },
  {
    id: 2,
    name: "Sarah Jenks",
    role: "Founder",
    company: "Lumina",
    content:
      "Speed is an understatement. We went from Figma concept to live production in 4 days. The TDD approach meant zero bugs on launch.",
    image: "https://picsum.photos/100/100?random=2",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Product Lead",
    company: "Vantage",
    content:
      "Sharp, minimal, and exactly what we needed. They understood our brand guidelines better than our internal team.",
    image: "https://picsum.photos/100/100?random=3",
  },
  {
    id: 4,
    name: "Elena V.",
    role: "Marketing Dir.",
    company: "Sovern",
    content:
      "The feedback loop was incredible. It felt like they were sitting in the office next to us. Highly recommended.",
    image: "https://picsum.photos/100/100?random=4",
  },
  {
    id: 5,
    name: "David K.",
    role: "CEO",
    company: "Orbital",
    content:
      "World-class engineering. The React components are so clean our internal team adopted their structure.",
    image: "https://picsum.photos/100/100?random=5",
  },
];

const Testimonials: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section
      ref={targetRef}
      id="testimonials"
      className="relative h-[300vh] bg-neutral-950"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 left-10 z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Stories
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-sm">
            Drag to explore what industry leaders say about working with us.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-[20vw]">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative group h-[400px] w-[350px] md:w-[500px] flex-shrink-0 bg-[#080808] border rounded-xl border-white/10 p-8 flex flex-col justify-between hover:border-[#3b82f6]/40 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 11L8 17H11L9 11H10ZM16 11L14 17H17L15 11H16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <p className="text-xl md:text-2xl font-light leading-normal text-gray-300">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#3b82f6]">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer at end */}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
