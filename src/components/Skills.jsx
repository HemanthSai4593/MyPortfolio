import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    level: 55,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "SQL",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Python",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Machine Learning",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[rgb(29,1,55)] text-white py-20 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Soft background effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-700/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-700/20 blur-[150px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-violet-300 z-10 relative"
      >
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-violet-950/40 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain rounded-md"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            {/* Progress bar */}
            <div className="h-3 w-full bg-violet-900/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-3 bg-gradient-to-r from-violet-500 via-violet-400 to-pink-400 rounded-full"
              />
            </div>

            {/* Label */}
            <div className="text-right text-sm mt-1 text-violet-300">
              {skill.level}%
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
