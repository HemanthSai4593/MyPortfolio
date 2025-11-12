// import React, { useState } from "react";
// import { motion } from "framer-motion";

// /**
//  * Upgraded Portfolio.jsx
//  * - Inspired by your uploaded site video (transitions, pacing, hover effects).
//  * - Requires: framer-motion + Tailwind CSS.
//  */

// const nameChars = "Ravipati Hemanth Sai".split("");

// const skillList = [
//   { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 92 },
//   { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 88 },
//   { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
//   { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
//   { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 82 },
//   { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 78 },
//   { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", level: 75 },
//   { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", level: 70 },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
// };

// export default function Portfolio() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div className={`${dark ? "bg-slate-900 text-slate-100" : "bg-gradient-to-b from-white to-gray-50 text-slate-900"} transition-colors duration-700`}>
//       {/* NAV / HEADER */}
//       <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
//         <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
//           {/* Animated name (letter-by-letter) */}
//           <motion.div
//             className="flex items-center gap-2 text-lg md:text-xl font-bold select-none"
//             initial="hidden"
//             animate="show"
//             variants={staggerContainer}
//           >
//             {nameChars.map((ch, i) => (
//               <motion.span key={i} variants={fadeUp} className="inline-block">
//                 {ch === " " ? "\u00A0" : ch}
//               </motion.span>
//             ))}
//           </motion.div>

//           {/* NAV + TOGGLE */}
//           <div className="flex items-center gap-4">
//             <nav className="hidden md:flex gap-6 text-sm md:text-base">
//               <a href="#about" className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition">About</a>
//               <a href="#skills" className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition">Skills</a>
//               <a href="#projects" className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition">Professional Work</a>
//               <a href="#contact" className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition">Contact</a>
//             </nav>

//             <button
//               aria-label="Toggle dark mode"
//               onClick={() => setDark(v => !v)}
//               className="rounded-md px-3 py-1 border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:scale-105 transition"
//             >
//               {dark ? "☀️" : "🌙"}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* HERO */}
//       <main className="max-w-6xl mx-auto px-6">
//         <section className="grid md:grid-cols-3 gap-8 items-center py-14">
//           <motion.div
//             className="md:col-span-2"
//             initial={{ opacity: 0, x: -18 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//               Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">dynamic</span>{" "}
//               web & ML experiences that matter.
//             </h1>

//             <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
//               I’m Ravipati Hemanth Sai — a computer science engineer focused on end-to-end product development:
//               frontend polish, scalable backends, and machine learning models that deliver value. Below are
//               selected works, technical skills, and how to reach me.
//             </p>

//             <div className="mt-8 flex gap-4">
//               <a
//                 href="/resume/Hemanth%20Sai%20Resume_____.pdf"
//                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
//               >
//                 Download Resume
//               </a>
//               <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition">
//                 Contact
//               </a>
//             </div>

//             {/* Quick stats row to reduce "spacy" feel */}
//             <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
//               <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-800/60 shadow-sm">
//                 <div className="text-xs text-slate-500">Location</div>
//                 <div className="font-semibold">India</div>
//               </div>
//               <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-800/60 shadow-sm">
//                 <div className="text-xs text-slate-500">Experience</div>
//                 <div className="font-semibold">Internships & Projects</div>
//               </div>
//               <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-800/60 shadow-sm">
//                 <div className="text-xs text-slate-500">Email</div>
//                 <div className="font-semibold">hemanthsairavipati@gmail.com</div>
//               </div>
//               <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-800/60 shadow-sm">
//                 <div className="text-xs text-slate-500">Education</div>
//                 <div className="font-semibold">B.Tech CSE</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Profile with glow and subtle parallax */}
//           <motion.div
//             className="flex justify-center md:justify-end"
//             initial={{ opacity: 0, scale: 0.92 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.9, delay: 0.12 }}
//           >
//             <div className="relative">
//               {/* animated glow shape */}
//               <motion.div
//                 className="absolute -inset-2 rounded-full"
//                 animate={{ scale: [1, 1.04, 1], opacity: [0.85, 0.65, 0.85] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                 style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.12))", filter: "blur(22px)" }}
//               />
//               <div className="relative w-64 h-64 rounded-full overflow-hidden ring-8 ring-white dark:ring-slate-800 shadow-2xl">
//                 <img
//                   src="/images/Gemini_Generated_Image_m602fhm602fhm602.png"
//                   alt="Hemanth Sai"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* ABOUT */}
//         <section id="about" className="py-8">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
//             <motion.h2 variants={fadeUp} className="text-2xl font-semibold mb-3">About Me</motion.h2>
//             <motion.p variants={fadeUp} className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
//               I build full-stack apps and ML solutions, focusing on a pragmatic approach to ship reliable, maintainable products — from polished UI to the model deployment pipeline.
//             </motion.p>
//           </motion.div>
//         </section>

//         {/* SKILLS */}
//         <section id="skills" className="py-8">
//           <motion.h3 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">Technical Skills</motion.h3>
//           <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//             {skillList.map(skill => (
//               <motion.div
//                 key={skill.name}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 12 }}
//                 viewport={{ once: true }}
//                 className="p-4 rounded-xl shadow-md flex flex-col items-center gap-3 text-center bg-white/80 dark:bg-slate-800/60"
//               >
//                 <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
//                 <div className="font-semibold">{skill.name}</div>

//                 {/* progress bar */}
//                 <div className="w-full mt-2 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1.1, ease: "easeOut" }}
//                     className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects" className="py-8">
//           <motion.h3 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">Professional Work</motion.h3>

//           <div className="grid gap-6 md:grid-cols-2">
//             {/* Project card template */}
//             <motion.article
//               whileHover={{ scale: 1.02, translateY: -6 }}
//               className="relative overflow-hidden rounded-2xl p-6 bg-white/80 dark:bg-slate-800/60 shadow-lg"
//             >
//               <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 to-transparent opacity-40" />
//               <h4 className="font-semibold text-lg">Sports Image Classification (CNN)</h4>
//               <p className="text-slate-600 dark:text-slate-300 mt-2">
//                 Developed a robust CNN in TensorFlow & Keras achieving 98.7% accuracy after augmentation and tuning.
//               </p>
//               <div className="mt-4 flex items-center gap-3">
//                 <a href="https://github.com/HemanthSai4593/SIC" target="_blank" rel="noreferrer" className="text-indigo-600 underline">View Repo</a>
//                 <span className="text-xs text-slate-500">•</span>
//                 <span className="text-xs text-slate-500">CV, Data Augmentation, Real-time inference</span>
//               </div>
//             </motion.article>

//             <motion.article
//               whileHover={{ scale: 1.02, translateY: -6 }}
//               className="relative overflow-hidden rounded-2xl p-6 bg-white/80 dark:bg-slate-800/60 shadow-lg"
//             >
//               <h4 className="font-semibold text-lg">Customer Feedback Analysis (ML)</h4>
//               <p className="text-slate-600 dark:text-slate-300 mt-2">
//                 NLP pipeline with XGBoost and NLTK processing 10k+ feedbacks achieving 97.3% accuracy; dashboards for insights.
//               </p>
//               <div className="mt-4 flex items-center gap-3">
//                 <a href="https://github.com/HemanthSai4593/CFA" target="_blank" rel="noreferrer" className="text-indigo-600 underline">View Repo</a>
//                 <span className="text-xs text-slate-500">•</span>
//                 <span className="text-xs text-slate-500">NLP, Feature Engineering, Model Interpretability</span>
//               </div>
//             </motion.article>
//           </div>
//         </section>

//         {/* CONTACT */}
//         <section id="contact" className="py-12">
//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.form
//               onSubmit={(e) => { e.preventDefault(); alert("Configure EmailJS to enable sending"); }}
//               className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/60 shadow-md"
//             >
//               <h4 className="text-xl font-semibold">Get in touch</h4>
//               <input className="w-full mt-3 p-2 rounded border dark:bg-slate-900" placeholder="Your name" />
//               <input className="w-full mt-3 p-2 rounded border dark:bg-slate-900" placeholder="Your email" />
//               <textarea className="w-full mt-3 p-2 rounded border dark:bg-slate-900 h-28" placeholder="Message"></textarea>
//               <button className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white hover:scale-105 transition">Send Message</button>
//             </motion.form>

//             <motion.div className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/60 shadow-md">
//               <h4 className="font-semibold">Contact</h4>
//               <a className="text-indigo-500 underline break-words mt-2 block" href="mailto:hemanthsairavipati@gmail.com">hemanthsairavipati@gmail.com</a>
//               <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Based in India • Available for Full-time / Remote roles</p>
//               <div className="mt-6 text-xs text-slate-400">© 2025 Ravipati Hemanth Sai</div>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="font-sans bg-[#0f0a24] text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Scroll-Triggered Fade Transition Between Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

