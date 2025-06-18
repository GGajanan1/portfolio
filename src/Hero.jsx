import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] opacity-50" />
      
      {/* Animated circles */}
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#6366f1] opacity-10 blur-3xl -top-32 -left-32 animate-pulse" />
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#ec4899] opacity-10 blur-3xl -bottom-32 -right-32 animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Hi, I'm Gourshettiwar Gajanan</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-2 rounded-lg border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
