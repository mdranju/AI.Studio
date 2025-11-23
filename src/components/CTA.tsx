import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const CTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="cta"
      className="py-32 bg-black relative overflow-hidden flex items-center justify-center"
    >
      {/* Background Pulse */}
      <div
        className={`absolute inset-0 bg-blue-900/10 transition-opacity duration-1000 ${
          isHovered ? "opacity-40" : "opacity-0"
        }`}
      />

      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
              Ascend?
            </span>
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            We only take on 2 new clients per month to ensure absolute quality.{" "}
            <br />
            Current availability:{" "}
            <span className="text-[#3b82f6] font-bold">1 Slot Left</span> for
            October.
          </p>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-[#3b82f6] hover:text-white transition-all duration-300 rounded-xl"
          >
            <Calendar
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
            <span>Book Intro Call</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3b82f6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <p className="mt-6 text-xs text-gray-600 uppercase tracking-widest">
            No commitment required. 15 Min Discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
