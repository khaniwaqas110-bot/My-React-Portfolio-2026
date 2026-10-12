
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";

function Projects({
  img,
  tittle,
  title,
  desc,
  btn = "Live Preview",
  link,
  github,
  technologies = [],
  index = 0,
}) {
  const reduceMotion = useReducedMotion();
  const projectTitle = title || tittle || "Project";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 35,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? {} : { y: -6 }}
      className="group relative flex h-full flex-col"
    >
      {/* Soft Glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-cyan-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Main Card */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-700/70 bg-slate-900 transition-colors duration-300 group-hover:border-cyan-400/50">

        {/* Browser Header */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-700 bg-[#0B1220] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <span className="max-w-[65%] truncate rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 font-mono text-[10px] text-slate-400">
            {projectTitle.toLowerCase().replace(/\s+/g, "-")}.jsx
          </span>

          <FiCode className="text-cyan-400" />
        </div>

        {/* Project Image */}
        <div className="relative h-52 overflow-hidden bg-slate-950 sm:h-60">
          <img
            src={img}
            alt={`${projectTitle} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <span className="absolute bottom-4 left-4 rounded-full border border-cyan-400/30 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-cyan-300 backdrop-blur-sm">
            FEATURED PROJECT
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
              {projectTitle}
            </h3>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-400">
              <FiArrowUpRight />
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            {desc}
          </p>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-auto flex items-center gap-3 pt-7">
            {link ? (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={
                  reduceMotion
                    ? {}
                    : { scale: 1.05, y: -3 }
                }
                whileTap={
                  reduceMotion ? {} : { scale: 0.97 }
                }
                className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
              >
                {/* Premium Gradient Hover */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />

                {/* Button Text & Icon */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiExternalLink className="transition-transform duration-300 group-hover/btn:rotate-12" />
                  {btn}
                </span>
              </motion.a>
            ) : (
              
<span className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />

  <span className="relative z-10 flex items-center gap-2">
    <FiExternalLink />
    {btn}
  </span>
</span>

            )}

            {/* GitHub Button */}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${projectTitle} source code`}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-xl text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <FiGithub />
              </a>
            )}
          </div>
        </div>

        {/* Accent Line */}
        <div className="h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </motion.article>
  );
}

export default Projects;
