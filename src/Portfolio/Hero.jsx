
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import heroimg from "../assets/waqasdev.jpeg";

function Hero() {
  const [showCode, setShowCode] = useState(false);
  const reduceMotion = useReducedMotion();

  const skills = ["React", "JavaScript", "Tailwind CSS"];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 px-6 pt-32 pb-16 text-white md:px-12 lg:px-16 lg:pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[110px]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row lg:gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[55%]"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-xl font-medium text-cyan-400 md:text-2xl"
          >
            Hey 👋 I'm
          </motion.p>

          <h1 className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            M Waqas
          </h1>

          <h2 className="mt-5 text-2xl font-bold md:text-4xl">
            And I'm a{" "}
            <span className="text-cyan-400">
              Web Developer
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-400 md:text-lg">
            I build modern, responsive websites with clean
            design, smooth performance, and exceptional
            user experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold shadow-lg shadow-blue-500/20 transition-shadow hover:shadow-blue-500/40"
            >
              Explore Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border border-cyan-500/40 bg-cyan-500/5 px-8 py-3 font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/15"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 sm:gap-12">
            {[
              ["2+", "Years Experience"],
              ["12+", "Projects Completed"],
              ["99%", "Client Rating"],
            ].map(([number, label]) => (
              <div key={label}>
                <h3 className="text-2xl font-bold text-white">
                  {number}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex w-full justify-center lg:w-[45%]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-8 rounded-full bg-cyan-500/20 blur-[75px]" />

          {/* Floating Wrapper */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { y: [0, -10, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[350px]"
          >
            {/* Photo Card */}
            <motion.div
              onHoverStart={() => setShowCode(true)}
              onHoverEnd={() => setShowCode(false)}
              onFocusCapture={() => setShowCode(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setShowCode(false);
                }
              }}
              className="group relative h-[390px] w-full overflow-hidden rounded-[30px] border border-cyan-400/40 bg-slate-900 shadow-[0_25px_80px_rgba(6,182,212,0.18)] sm:h-[430px]"
            >
              {/* Image */}
              <motion.img
                src={heroimg}
                alt="M Waqas - Frontend Developer"
                className="absolute inset-0 h-full w-full object-cover object-center"
                animate={{
                  scale: showCode && !reduceMotion ? 1.08 : 1,
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

              {/* Normal Image Text */}
              <motion.div
                animate={{
                  opacity: showCode ? 0 : 1,
                  y: showCode ? 15 : 0,
                }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-0 left-0 w-full p-6"
              >
                <p className="text-2xl font-bold">
                  M Waqas
                </p>
                <p className="mt-1 text-sm text-cyan-300">
                  Frontend Web Developer
                </p>
              </motion.div>

              {/* Hover Code Overlay */}
              <AnimatePresence>
                {showCode && (
                  <motion.div
                    key="code-overlay"
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md sm:p-5"
                  >
                    {/* Code Editor */}
                    <div className="w-full overflow-hidden rounded-2xl border border-slate-600/60 bg-[#0B1220] shadow-2xl">

                      {/* Editor Header */}
                      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/70 px-4 py-3">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        </div>

                        <span className="font-mono text-[11px] text-slate-400">
                          developer.jsx
                        </span>
                      </div>

                      {/* Code Lines */}
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: reduceMotion ? 0 : 0.08,
                            },
                          },
                        }}
                        className="space-y-2 p-4 font-mono text-[11px] leading-6 sm:text-xs"
                      >
                        {[
                          <><span className="text-purple-400">const</span> <span className="text-cyan-300">Developer</span> = {"{"}</>,
                          <><span className="text-blue-300">Name:</span> <span className="text-green-400">"M Waqas Khan"</span>,</>,
                          <><span className="text-blue-300">Role:</span> <span className="text-green-400">"Frontend Dev"</span>,</>,
                          <><span className="text-blue-300">Skills:</span> [</>,
                          ...skills.map((skill, i) => (
                            <span className="text-green-400" key={skill}>
                              "{skill}"{i < skills.length - 1 ? "," : ""}
                            </span>
                          )),
                          <>],</>,
                          <><span className="text-blue-300">passion:</span> <span className="text-green-400">"Web Development"</span></>,
                          <>{"};"}</>,
                        ].map((line, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: {
                                opacity: 0,
                                y: reduceMotion ? 0 : 8,
                              },
                              visible: {
                                opacity: 1,
                                y: 0,
                              },
                            }}
                            className="break-words text-slate-200"
                          >
                            {line}
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Status */}
                      <div className="flex items-center gap-2 border-t border-slate-700 px-4 py-3">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-emerald-400">
                          Ready to build something amazing
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Toggle */}
              <button
                type="button"
                onClick={() => setShowCode((prev) => !prev)}
                aria-label="Show developer information"
                aria-expanded={showCode}
                className="absolute inset-0 z-20 cursor-pointer rounded-[30px] focus-visible:outline-2 focus-visible:outline-cyan-400 lg:hidden"
              />
            </motion.div>

            {/* Bottom Badge */}
            <div className="pointer-events-none absolute -bottom-5 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-xl border border-cyan-400/30 bg-slate-900 px-5 py-3 text-sm font-semibold text-cyan-300 shadow-xl">
              &lt;/&gt; Frontend Developer
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
