
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiMapPin,
  FiTerminal,
  FiCheckCircle,
} from "react-icons/fi";

function About() {
  const reduceMotion = useReducedMotion();

  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
  ];

  return (
    <section
      id="About"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Me.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            A little about who I am and what I love building.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden rounded-[28px] border border-cyan-400/20 bg-slate-900 shadow-[0_20px_70px_rgba(6,182,212,0.06)] lg:grid-cols-2"
        >

          {/* LEFT - About Content */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                <FiCode />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Frontend Developer
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
              Turning ideas into{" "}
              <span className="text-cyan-400">
                digital experiences.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
              I'm M Waqas, a frontend developer passionate
              about building modern, responsive, and
              user-friendly websites using React,
              JavaScript, and Tailwind CSS.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              I enjoy learning new technologies and turning
              creative ideas into clean, functional designs.
            </p>

            {/* Skill Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <motion.a
                href="#projects"
                whileHover={
                  reduceMotion ? {} : { y: -3 }
                }
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
              >
                View My Work
                <FiArrowUpRight />
              </motion.a>

              <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                <FiMapPin className="text-cyan-400" />
                Pakistan
              </span>
            </div>
          </div>

          {/* RIGHT - Coding Window */}
          <div className="relative flex items-center bg-slate-950/50 p-6 sm:p-10">

            {/* Soft Glow */}
            <div className="pointer-events-none absolute inset-10 rounded-full bg-cyan-500/10 blur-[70px]" />

            <motion.div
              whileHover={
                reduceMotion ? {} : { y: -5 }
              }
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 20,
              }}
              className="relative w-full overflow-hidden rounded-2xl border border-slate-700 bg-[#0B1220] shadow-2xl"
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/70 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <span className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <FiTerminal />
                  about.js
                </span>
              </div>

              {/* Editor Content */}
              <div className="space-y-3 overflow-x-auto p-5 font-mono text-xs leading-6 sm:p-7 sm:text-sm">
                <p>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-cyan-300">
                    developer
                  </span>{" "}
                  <span className="text-white">
                    = {"{"}
                  </span>
                </p>

                <p className="pl-4">
                  <span className="text-blue-300">
                    name:
                  </span>{" "}
                  <span className="text-green-400">
                    "M Waqas",
                  </span>
                </p>

                <p className="pl-4">
                  <span className="text-blue-300">
                    role:
                  </span>{" "}
                  <span className="text-green-400">
                    "Frontend Developer",
                  </span>
                </p>

                <p className="pl-4">
                  <span className="text-blue-300">
                    stack:
                  </span>{" "}
                  <span className="text-green-400">
                    ["React", "Tailwind"],
                  </span>
                </p>

                <p className="pl-4">
                  <span className="text-blue-300">
                    mindset:
                  </span>{" "}
                  <span className="text-green-400">
                    "Always Learning"
                  </span>
                </p>

                <p className="text-white">
                  {"};"}
                </p>
              </div>

              {/* Editor Footer */}
              <div className="flex items-center gap-2 border-t border-slate-700 px-5 py-3">
                <FiCheckCircle className="text-green-400" />
                <span className="text-xs text-green-400">
                  Ready to create something amazing.
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
