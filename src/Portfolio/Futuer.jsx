
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiClock, FiCode } from "react-icons/fi";

function Futuer({ img, title, desc, status = "Coming Soon" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={reduceMotion ? {} : { y: -6 }}
      className="group relative flex h-full flex-col"
    >
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-cyan-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900 transition-colors duration-300 group-hover:border-cyan-400/50">

        {/* Editor Header */}
        <div className="flex items-center justify-between border-b border-slate-700 bg-[#0B1220] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <span className="font-mono text-[11px] text-slate-400">
            roadmap.jsx
          </span>

          <FiCode className="text-cyan-400" />
        </div>

        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-slate-950">
          <img
            src={img}
            alt={`${title} concept`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <span className="absolute right-4 top-4 rounded-full border border-amber-400/30 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />
            {status}
          </span>

          <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Future Concept
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
              {title}
            </h3>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-400">
              <FiArrowUpRight />
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            {desc}
          </p>

          <div className="mt-auto pt-6">
            <div className="mb-4 h-px bg-slate-700/70" />

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <FiClock className="text-cyan-400" />
              Development Roadmap
            </div>
          </div>
        </div>

        <div className="h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </motion.article>
  );
}

export default Futuer;
