import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#1e1b4b] via-[#2e1065] to-[#3B0764] text-slate-100 py-20 px-6 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
          About Me
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          I’m <span className="font-semibold text-white">Ravipati Hemanth Sai</span>, a computer-science graduate
          passionate about creating seamless, dynamic applications that merge
          full-stack engineering and machine learning. My focus is on writing
          clean, maintainable code and building user experiences that feel
          effortless and elegant.
        </p>
      </motion.div>
    </section>
  );
}
