import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden group rounded-xl">
              <img
                src="https://picsum.photos/600/800?grayscale"
                alt="Founder"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

              {/* Hover Reveal Details */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
            {/* Decorative sharp borders */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-white/20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-white/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-[#3b82f6] text-sm font-bold tracking-widest uppercase mb-4">
              The Architect
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Obsessed with the <br /> details that matter.
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-light">
              <p>
                I started Studio with a singular thesis:{" "}
                <strong className="text-white">
                  Design and Engineering are not separate disciplines.
                </strong>{" "}
                They are two sides of the same coin.
              </p>
              <p>
                We don't hand off designs to developers. We build living
                systems. My background in low-level graphics programming and
                high-end UI design allows us to bridge the gap that kills most
                projects.
              </p>
              <p>
                When you work with us, you aren't hiring an agency. You're
                hiring a specialized task force dedicated to elevating your
                digital presence.
              </p>
            </div>

            <div className="mt-12 flex items-center space-x-4 cursor-pointer group w-fit">
              <span className="text-white font-bold uppercase tracking-wider group-hover:text-[#3b82f6] transition-colors">
                Read Manifesto
              </span>
              <ArrowRight
                className="text-white group-hover:translate-x-2 transition-transform duration-300"
                size={20}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
