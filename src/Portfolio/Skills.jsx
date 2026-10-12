import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaCode,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    name: "React",
    category: "Frontend Library",
    icon: FaReact,
    color: "#61DAFB",
    description: "Building reusable and interactive UI components.",
    code: "<Component />",
    number: "01",
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: FaJs,
    color: "#F7DF1E",
    description: "Creating dynamic and interactive web experiences.",
    code: "const developer = true;",
    number: "02",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: RiTailwindCssFill,
    color: "#38BDF8",
    description: "Designing modern and responsive user interfaces.",
    code: 'className="flex gap-4"',
    number: "03",
  },
  {
    name: "HTML5",
    category: "Web Structure",
    icon: FaHtml5,
    color: "#E34F26",
    description: "Creating clean and semantic website structures.",
    code: "<main>Content</main>",
    number: "04",
  },
  {
    name: "CSS3",
    category: "Web Styling",
    icon: FaCss3Alt,
    color: "#1572B6",
    description: "Crafting layouts, animations, and visual designs.",
    code: "display: grid;",
    number: "05",
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    icon: FaGithub,
    color: "#F8FAFC",
    description: "Managing code versions and sharing projects.",
    code: "git push origin main",
    number: "06",
  },
  {
    name: "UI Design",
    category: "Design Tools",
    icon: FaFigma,
    color: "#F24E1E",
    description: "Designing user-friendly interfaces and layouts.",
    code: "design → develop",
    number: "07",
  },
];

function SkillCard({ skill, index, reduceMotion }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : (index % 4) * 0.1,
      }}
      whileHover={
        reduceMotion ? {} : { y: -8 }
      }
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      className="group h-full"
    >
      <div
        className="relative flex h-full min-h-[245px] flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-[#111B30]/90 p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
      >
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-10 blur-[55px] transition-opacity duration-300 group-hover:opacity-25"
          style={{ backgroundColor: skill.color }}
        />

        {/* Top */}
        <div className="relative flex items-start justify-between">
         <motion.div
  layout
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    opacity: { duration: 0.5 },
    y: { type: "spring", stiffness: 100, damping: 20 },
    layout: { type: "spring", stiffness: 120, damping: 22 },
  }}
  whileHover={{ y: -6 }}
  onHoverStart={() => setIsOpen(true)}
  onHoverEnd={() => setIsOpen(false)}
  className="group h-full"
>
          </motion.div>

          <span className="font-mono text-xs text-slate-500">
            /{skill.number}
          </span>
        </div>

        {/* Title */}
        <div className="relative mt-7">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white">
              {skill.name}
            </h3>

            <FiArrowUpRight className="text-sm text-slate-500 transition-colors group-hover:text-cyan-400" />
          </div>

          <p className="mt-2 text-sm text-slate-400">
            {skill.category}
          </p>
        </div>

        {/* Hover Details */}
        {/* Smooth Hover Details */}
<motion.div
  initial={false}
  animate={{
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
  }}
  transition={{
    height: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
    opacity: {
      duration: 0.25,
    },
  }}
  className="overflow-hidden"
>
  <div className="pt-5">
    <p className="text-xs leading-5 text-slate-300">
      {skill.description}
    </p>

    <div className="mt-3 overflow-x-auto rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2">
      <code className="whitespace-nowrap font-mono text-[11px] text-cyan-300">
        {skill.code}
      </code>
    </div>
  </div>
</motion.div>

{/* Animated Bottom Line */}
<div className="mt-auto pt-6">
  <div className="h-[2px] w-full overflow-hidden rounded-full bg-slate-700">
    <motion.div
      initial={false}
      animate={{ width: isOpen ? "100%" : "35%" }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
      className="h-full rounded-full"
      style={{ backgroundColor: skill.color }}
    />
  </div>
</div>

        {/* Mobile Details Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="relative mt-4 self-start text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300 md:hidden"
        >
          {isOpen ? "Show Less −" : "View Details +"}
        </button>
      </div>
    </motion.div>
  );
}

function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#080F20] px-6 py-24 text-white md:px-12 lg:px-16"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <FaCode />
            Capabilities Toolkit
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Tools &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Technologies.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            A collection of technologies and tools I use
            to turn creative ideas into modern web experiences.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-lg font-bold text-white">
              Always Learning. Always Building.
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Exploring new technologies and improving my skills
              with every project.
            </p>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-xs font-semibold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Growth Mindset
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
