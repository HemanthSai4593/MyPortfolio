import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Sports Image Classification using CNN",
    description:
      "A deep learning project using Convolutional Neural Networks to classify sports images across multiple categories with 98.7% accuracy. Implemented using TensorFlow and Keras with a custom-trained model.",
    image: "images/projects/Sports.png", // ✅ Correct Vite path (no public/, no backslashes)
    link: "https://github.com/HemanthSai4593/SIC",
    tech: ["Python", "CNN", "Keras", "Matplotlib"],
  },
  {
    title: "Customer Feedback Analysis using ML",
    description:
      "Processed 10,000+ feedback entries using NLP and XGBoost to extract sentiment insights and visualize customer satisfaction trends. Built a complete pipeline with preprocessing, vectorization, and model optimization.",
    image: "/images/projects/Customer.png", // ✅ Correct Vite path
    link: "https://github.com/HemanthSai4593/CFA",
    tech: ["Python", "NLTK", "XGBoost", "Seaborn"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[rgb(29,1,55)] text-white py-20 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-700/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-700/20 blur-[150px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-violet-300 relative z-10"
      >
        Professional Work
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <Tilt key={index} glareEnable={true} glareMaxOpacity={0.2} scale={1.03}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.1)] bg-gradient-to-b from-violet-950/60 to-violet-900/30 hover:shadow-[0_0_45px_rgba(167,139,250,0.6)] transition-all duration-500 hover:scale-[1.02]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover border-b border-violet-900/50"
                loading="lazy"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-violet-200">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-violet-700/30 text-violet-300 border border-violet-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-violet-400 hover:text-violet-300 underline"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
