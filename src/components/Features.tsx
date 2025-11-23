import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Clock, MessageSquare } from "lucide-react";

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="features" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Our <span className="text-[#3b82f6]">Methodology</span>
          </h2>
          <p className="text-gray-400 max-w-lg">
            A systematic approach to digital perfection.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
        >
          {/* Feature 1: Web Design - Large Block */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 bg-neutral-900/50 border border-white/10  p-8 flex flex-col justify-between group hover:border-[#3b82f6]/50 transition-colors duration-300 relative overflow-hidden rounded-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-[#3b82f6]/20 transition-all duration-500" />

            <div className="z-10">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Palette className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Aesthetic Engineering</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                We don't just design websites; we architect visual systems.
                Every pixel is calculated, every interaction is intentional. Our
                design language speaks authority and innovation.
              </p>
            </div>

            {/* Abstract UI representation */}
            <div className="w-full h-48 bg-black border border-white/5 relative overflow-hidden p-4 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="space-y-3">
                <div className="h-2 w-1/3 bg-white/20" />
                <div className="h-20 w-full bg-white/5 border border-white/5" />
                <div className="flex gap-2">
                  <div className="h-12 w-1/2 bg-white/5" />
                  <div className="h-12 w-1/2 bg-white/5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Development */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-neutral-900/50 border border-white/10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between group hover:border-[#3b82f6]/50 transition-colors duration-300 rounded-xl"
          >
            <div className="mb-4 md:mb-0 md:mr-4">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center mb-3 border border-white/10">
                <Code2 className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-1">Development</h3>
              <p className="text-sm text-gray-400">
                Clean, scalable React & TS code.
              </p>
            </div>
            <div className="font-mono text-xs text-[#3b82f6] bg-black/50 p-4 border border-white/5 w-full md:w-auto">
              <div>&lt;Component /&gt;</div>
              <div className="pl-4 text-gray-500">
                isLoaded ? render() : null
              </div>
            </div>
          </motion.div>

          {/* Feature 3: TDD */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bg-neutral-900/50 border border-white/10 p-6 flex flex-col justify-between group hover:border-[#3b82f6]/50 transition-colors duration-300 rounded-xl"
          >
            <Zap className="text-white mb-4" size={24} />
            <div>
              <h3 className="text-lg font-bold mb-2">TDD Core</h3>
              <p className="text-xs text-gray-400">
                Tests written before code. Zero regressions.
              </p>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-1 w-full bg-green-500/50" />
              ))}
            </div>
          </motion.div>

          {/* Feature 4: Delivery */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bg-neutral-900/50 border border-white/10 p-6 flex flex-col justify-between group hover:border-[#3b82f6]/50 transition-colors duration-300 rounded-xl"
          >
            <Clock className="text-white mb-4" size={24} />
            <div>
              <h3 className="text-lg font-bold mb-2">4-5 Day Sprints</h3>
              <p className="text-xs text-gray-400">
                Rapid iteration cycles. Lightning fast shipping.
              </p>
            </div>
          </motion.div>

          {/* Feature 5: Feedback */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:col-start-3 md:row-start-2 bg-blue-900/10 border border-blue-500/20 p-6 flex items-center justify-between group hover:bg-blue-900/20 transition-colors duration-300 relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h3 className="text-xl font-bold mb-2 text-blue-200">
                Feedback Loop
              </h3>
              <p className="text-sm text-blue-200/60 max-w-xs">
                Direct Slack access to engineers. No middle-men.
              </p>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full border border-blue-400/30 flex items-center justify-center animate-pulse">
              <MessageSquare size={20} className="text-blue-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
