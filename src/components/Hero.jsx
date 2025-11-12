import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 bg-[rgb(29,1,55)] text-white relative overflow-hidden"
    >
      {/* Decorative background blur effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-700/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-700/20 blur-[150px] rounded-full"></div>

      {/* LEFT SIDE — Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center items-center z-10"
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.03}>
          <div className="relative rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] p-2 bg-gradient-to-b from-violet-700/60 to-violet-900/40 hover:shadow-[0_0_45px_rgba(167,139,250,0.6)] transition-shadow duration-700">
            <img
              src="images/sai_profile.jpg" // ✅ Correct path for Vite
              alt="Ravipati Hemanth Sai"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-violet-400 shadow-lg"
              loading="lazy"
            />
            {/* Subtle glowing overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent to-purple-600/20 animate-pulse"></div>
          </div>
        </Tilt>
      </motion.div>

      {/* RIGHT SIDE — Introduction */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center md:text-left mt-10 md:mt-0 z-10"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="text-4xl md:text-5xl font-extrabold leading-snug text-violet-200 drop-shadow-[0_2px_5px_rgba(255,255,255,0.2)]"
        >
          {"Ravipati Hemanth Sai".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.05 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="mt-4 text-slate-300 max-w-lg leading-relaxed">
          Passionate <span className="text-violet-400 font-semibold">Full Stack Developer</span> &{" "}
          <span className="text-violet-400 font-semibold">ML Enthusiast</span> focused on crafting data-driven,
          intelligent solutions with clean and engaging user experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 transition font-medium shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
          >
            View My Work
          </a>
          <a
            href="/resume/Hemanth%20Sai%20Resume_____.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg border border-violet-400 hover:bg-violet-700 transition font-medium shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
