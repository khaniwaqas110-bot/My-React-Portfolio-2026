
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "0333 1622996",
      href: "https://wa.me/923331622996",
      color: "whatsapp",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "khaniwaqas110@gmail.com",
      href: "mailto:khaniwaqas110@gmail.com",
      color: "email",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Pakistan",
      href: null,
      color: "location",
    },
  ];

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailto = `mailto:khaniwaqas110@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#080F20] px-6 py-24 text-white md:px-12 lg:px-16"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <FaPaperPlane />
            Let's Connect
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Have an Idea?{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Talk.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Have a project in mind, a question, or just want
            to say hello? I'd love to hear from you.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
          />
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT SIDE */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Get in Touch
              </p>

              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Let's Build Something{" "}
                <span className="text-cyan-400">
                  Amazing Together.
                </span>
              </h3>

              <p className="mt-5 max-w-lg leading-8 text-slate-400">
                Whether you're looking for a frontend developer
                or want to discuss a creative idea, I'm always
                happy to connect and explore new opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const isWhatsApp = item.color === "whatsapp";

                const content = (
                  <>
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-xl transition-all duration-300 ${
                        isWhatsApp
                          ? "border-green-500/30 bg-green-500/10 text-green-400 group-hover:bg-green-500/20"
                          : "border-cyan-400/20 bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20"
                      }`}
                    >
                      <Icon />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {item.title}
                      </p>

                      <p className="mt-1 break-all text-sm font-semibold text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <FaArrowRight
                        className={`shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 ${
                          isWhatsApp
                            ? "group-hover:text-green-400"
                            : "group-hover:text-cyan-400"
                        }`}
                      />
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -30,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: reduceMotion ? 0 : index * 0.12,
                      duration: 0.5,
                    }}
                    whileHover={
                      reduceMotion ? {} : { x: 5 }
                    }
                    className="group"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={isWhatsApp ? "_blank" : undefined}
                        rel={isWhatsApp ? "noopener noreferrer" : undefined}
                        className={`flex items-center gap-4 rounded-2xl border bg-[#111B30]/90 p-5 transition-all duration-300 ${
                          isWhatsApp
                            ? "border-slate-700/60 hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.08)]"
                            : "border-slate-700/60 hover:border-cyan-400/40"
                        }`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-[#111B30]/90 p-5">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              whileHover={
                reduceMotion ? {} : { y: -3 }
              }
              className="mt-7 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-4"
            >
              <motion.span
                animate={
                  reduceMotion
                    ? {}
                    : { opacity: [1, 0.4, 1] }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400"
              />

              <div>
                <p className="text-sm font-semibold text-emerald-300">
                  Open to Opportunities
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Feel free to reach out and start a conversation.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-[#111B30]/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.2)] sm:p-9"
          >
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-[70px]" />

            <div className="relative">

              {/* Form Header */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <FaPaperPlane className="text-xl text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Send Me a Message
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Tell me about your project
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={
                    reduceMotion
                      ? {}
                      : { scale: 1.02, y: -2 }
                  }
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-shadow duration-300 hover:shadow-blue-500/40"
                >
                  Send Message
                  <FaPaperPlane />
                </motion.button>

                <p className="text-center text-xs leading-relaxed text-slate-500">
                  This will open your email app with
                  your message ready to send.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-center text-sm text-slate-400 md:text-left">
                © 2026{" "}
                <span className="font-semibold text-white">
                  M Waqas
                </span>
                . All Rights Reserved.
              </p>

              <p className="mt-2 text-center text-xs text-slate-500 md:text-left">
                Designed & Built with React and Tailwind CSS.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/khaniwaqas110-bot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/60 text-lg text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="#home"
                className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
