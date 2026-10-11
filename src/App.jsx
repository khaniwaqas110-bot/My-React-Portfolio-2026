import { useState } from 'react'
import Navbar from './Portfolio/Navbar'
import Hero from './Portfolio/Hero'
import About from './Portfolio/About'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Futuer from './Portfolio/Futuer'
import Contact from './Portfolio/Contact'
import Ai from './assets/AI.jpg'
import car from './assets/car.jpg'
import crypto from './assets/Crypto.jpg'
import Ecommerce from './assets/Ecommerce.jpg'
import Fitness from './assets/Fitness.jpg'
import Travel from './assets/Travel.jpg'
import planeb from './assets/airoplane-travel.jpg'
import food from './assets/food-delivry.jpg'
import music from './assets/music.jpg'
import propertey from './assets/propertey.jpg'
import smarthome from './assets/smart ur home.jpg'
import chatbot from './assets/chat-bot.jpg'
import { motion } from "motion/react"




import './App.css'

function App() {

  return (
    <>
      <div className='min-h-screen overflow-x-hidden bg-gray-700 max-w-7xl mx-auto px-2 mt-0'>

        <Navbar />

        <Hero />

        <About />
        <Skills />


        <div id="projects" className=" scrool-mt-32 pt-20 text-center my-10">
          <p className="text-gray-300 uppercase tracking-widest text-sm mt-5">
            MY RECENT WORK
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-5">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent tracking-widest">
              Projects
            </span>
          </h2>
          <div className="w-40 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>



    {/* PROJECTS */}

        <div className='flex flex-wrap gap-1 justify-center md:gap-3'>
          {/* 1 */}
       <motion.div
initial={{opacity:0, y:120}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.3}}
transition={{duration:0.6,}}>
          <Projects
            project-title="Projects"
            img={Ai}
            tittle="AI Analytics Dashboard"
            desc='A modern AI powered dashboard interface...'
            btn='View Project' />
            </motion.div>

{/* 2 */}
    <motion.div
initial={{opacity:0, y:120}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.3}}
transition={{duration:0.6, delay:0.2}}>
          <Projects
            img={car}
            tittle='Luxury Car Experience'
            desc='A premium 3D car showcase...'
            btn='View Project' />
            </motion.div>

{/* 3 */}
 <motion.div
initial={{opacity:0, y:120}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.3}}
transition={{duration:0.6, delay:0.4}}>
          <Projects
            img={crypto}
            tittle='Crypto Trading Dashboard'
            desc='A professional crypto dashboard...'
            btn='View Project' />
            </motion.div>

            {/* 4 */}
<motion.div
initial={{opacity:0, y:120}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.2}}
transition={{duration:0.6,}}>

          <Projects
            img={Ecommerce}
            tittle='Modern E-Commerce Store'
            desc='A responsive online shopping platform...'
            btn='View Project' />
            </motion.div>
{/* 5 */}

<motion.div
initial={{opacity:0, y:120}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.2}}
transition={{duration:0.6, delay:0.2}}>
          <Projects
            img={Fitness}
            tittle='Fitness AI Coach App'
            desc='A smart fitness tracking app...'
            btn='View Project' />
            </motion.div>
{/* 6 */}
<motion.div
initial={{opacity:0, y:120}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.2}}
transition={{duration:0.6, delay:0.4}}>
          <Projects
            img={Travel}
            tittle='Travel Booking Platform'
            desc='A modern travel booking website...'
            btn='View Project' />
            </motion.div>
        </div>


        {/* feature projects */}

        <div id="future" className=" scrool-mt-32 pt-20 text-center my-10">
          <p className="text-gray-300 uppercase tracking-widest text-sm mt-5">
            Coming Soon
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-5"> FUture
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent tracking-widest">
              Projects
            </span>
          </h2>
          <div className="w-40 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className='flex flex-wrap gap-1 justify-center md:gap-3'>

          {/* 1 */}
          <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:false, amount:0.3}}
          transition={{duration:0.5}}>
          <Futuer
            img={planeb}
            title="Travel Booking"
            desc="Book your dream trip with ease."
            status="Coming Soon"
            />
            </motion.div>


          {/* 2 */}
           <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:false, amount:0.3}}
          transition={{duration:0.5, delay:0.2}}>
          <Futuer img={food}
            title="Food Delivery App"
            desc="Fast and easy online food ordering."
            status="Coming Soon" />
          </motion.div>



          {/* 3 */}
           <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:false, amount:0.3}}
          transition={{duration:0.5, delay:0.4}}>
          <Futuer img={music}
            title="Music Streaming App"
            desc="Enjoy music with a modern interface."
            status="Coming Soon"
          />
          </motion.div>



          {/* 4 */}
           <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:false, amount:0.7}}
          transition={{duration:0.5}}>
          <Futuer img={propertey}
            title="Real Estate Platform"
            desc="A modern property listing website."
            status="Coming Soon"
          />
          </motion.div>




          {/* 5 */}
           <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:false, amount:0.7}}
          transition={{duration:0.5, delay:0.2}}>
          <Futuer img={smarthome}
            title="Smart Home System"
            desc="Control your home from anywhere."
            status="Coming Soon"
          />
          </motion.div>




          {/* 6 */}
           <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:false, amount:0.7}}
          transition={{duration:0.5, delay:0.4}}>
          <Futuer img={chatbot}
            title="AI Chatbot Assistant"
            desc="A smart AI assistant for businesses."
            status="Coming Soon"
          />
          </motion.div>
        </div>

        <Contact />

      </div>



    </>
  )
}

export default App
