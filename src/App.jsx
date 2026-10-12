
import Navbar from "./Portfolio/Navbar";
import Hero from "./Portfolio/Hero";
import About from "./Portfolio/About";
import Skills from "./Portfolio/Skills";
import Projects from "./Portfolio/Projects";
import Futuer from "./Portfolio/Futuer";
import Contact from "./Portfolio/Contact";

import Ai from "./assets/AI.jpg";
import car from "./assets/car.jpg";
import crypto from "./assets/Crypto.jpg";
import Ecommerce from "./assets/Ecommerce.jpg";
import Fitness from "./assets/Fitness.jpg";
import Travel from "./assets/Travel.jpg";

import planeb from "./assets/airoplane-travel.jpg";
import food from "./assets/food-delivry.jpg";
import music from "./assets/music.jpg";
import propertey from "./assets/propertey.jpg";
import smarthome from "./assets/smart ur home.jpg";
import chatbot from "./assets/chat-bot.jpg";

import { motion } from "motion/react";

import "./App.css";

const projectsData = [
  {
    img: Ai,
    tittle: "AI Analytics Dashboard",
    desc: "A modern AI powered dashboard interface...",
    btn: "View Project",
  },
  {
    img: car,
    tittle: "Luxury Car Experience",
    desc: "A premium 3D car showcase...",
    btn: "View Project",
  },
  {
    img: crypto,
    tittle: "Crypto Trading Dashboard",
    desc: "A professional crypto dashboard...",
    btn: "View Project",
  },
  {
    img: Ecommerce,
    tittle: "Modern E-Commerce Store",
    desc: "A responsive online shopping platform...",
    btn: "View Project",
  },
  {
    img: Fitness,
    tittle: "Fitness AI Coach App",
    desc: "A smart fitness tracking app...",
    btn: "View Project",
  },
  {
    img: Travel,
    tittle: "Travel Booking Platform",
    desc: "A modern travel booking website...",
    btn: "View Project",
  },
];

const futureData = [
  {
    img: planeb,
    title: "Travel Booking",
    desc: "Book your dream trip with ease.",
    status: "Coming Soon",
  },
  {
    img: food,
    title: "Food Delivery App",
    desc: "Fast and easy online food ordering.",
    status: "Coming Soon",
  },
  {
    img: music,
    title: "Music Streaming App",
    desc: "Enjoy music with a modern interface.",
    status: "Coming Soon",
  },
  {
    img: propertey,
    title: "Real Estate Platform",
    desc: "A modern property listing website.",
    status: "Coming Soon",
  },
  {
    img: smarthome,
    title: "Smart Home System",
    desc: "Control your home from anywhere.",
    status: "Coming Soon",
  },
  {
    img: chatbot,
    title: "AI Chatbot Assistant",
    desc: "A smart AI assistant for businesses.",
    status: "Coming Soon",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HOME */}
      <div className="scroll-mt-28">
        <Hero />
      </div>


      {/* ABOUT */}
      <div className="scroll-mt-28">
        <About />
      </div>


      {/* SKILLS */}
      <div className="scroll-mt-28">
        <Skills />
      </div>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-28 bg-slate-950 px-4 py-20 md:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              MY RECENT WORK
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
              A collection of projects built with creativity,
              modern design, and clean code.
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.tittle}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                }}
                className="min-w-0"
              >
                <Projects {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section
        id="future"
        className="scroll-mt-28 bg-slate-950 px-4 py-20 md:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              COMING SOON
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Future{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
              Exploring new ideas and building exciting
              digital experiences for the future.
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {futureData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                }}
                className="min-w-0"
              >
                <Futuer {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      {/* CONTACT */}
      <div className="scroll-mt-28">
        <Contact />
      </div>

    </div>
  );
}

export default App;
