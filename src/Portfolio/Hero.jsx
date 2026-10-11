import heroimg from '../assets/waqasdev.jpeg'
import { motion } from "motion/react"
function Hero() {
    return (
        <div id="home" className="min-h-screen flex justify-center items-center flex-col
         md:flex-row px-6 md:px-16 gap-10 pt-60 md:pt-10 ">
            <motion.div
                className='w-full md:w-3/5' 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="text-white text-4xl mt-24 items-center w-full">
                    <div className="text-white text-2xl md:text-4xl font-bold animate-bounce">
                        Hey👋 I m
                    </div>

                    <div className=" text-4xl md:text-8xl font-bold 
                bg-gradient-to-r from-blue-600 to-cyan-500 
          bg-clip-text text-transparent tracking-widest ">
                        M Waqas
                    </div>

                    <div className="text-white text-2xl md:text-4xl mt-2 font-semibold
                ">
                        And I m a Web Developer
                    </div>
                    <div className="text-gray-300 text-lg leading-relaxed mt-3 max-w-[500px]">
                        <p>
                            I build modern, responsive websites with clean design,
                            smooth performance, and exceptional user experiences.</p>
                    </div>

                   


                    
                    <div className="flex flex-col md:flex-row mt-5 gap-4">
                         <motion.div
                    whileHover={{scale:1.05}}
                    whileTap={{scale:1.08}}
                    >
                        <a href="#projects">
                        <button className="py-2 px-1 text-lg md:py-3 md:px-4 
                    bg-gradient-to-r from-blue-600 md:w-60 to-cyan-500 hover:from-blue-700
                     hover:to-cyan-600
                    rounded-lg font-bold">
                            Explore Projects
                        </button>
                        </a>
                        </motion.div>


                          <motion.div
                    whileHover={{scale:1.05}}
                    whileTap={{scale:1.08}}>
                        <button className="py-2 px-1 text-lg md:py-3 md:px-6 
                        bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600
                        rounded-lg font-bold">
                            Hire me
                        </button>
                        </motion.div>
                    </div>
                    <div className='flex gap-18 mt-6 text-xl md:text-2xl'>
                        <h1 className='font-bold'>
                            2+
                            <p className='text-sm text-gray-400'>
                                Years <br /> Experience
                            </p>
                        </h1>
                        <h1 className='font-bold'>
                            12+
                            <p className='text-sm text-gray-400'>
                                Projects <br /> Completed
                            </p>
                        </h1>
                        <h1 className='font-bold'>
                            99%
                            <p className='text-sm text-gray-400'>
                                Client <br /> Rating
                            </p>
                        </h1>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.7, }}
            >


                <div className='mt-20'>
                    <img src={heroimg} alt="" className='w-120 border-6 rounded-full object-cover
                 border border-gray-500' />
                </div>
            </motion.div>

        </div>
    )
}
export default Hero