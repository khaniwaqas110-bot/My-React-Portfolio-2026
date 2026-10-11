import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { motion } from "motion/react"

function Skills() {
    return (
        <div id="skills" className=" text-white py-20 px-6 md:px-16 scrool-mt-30 rounded-2xl">

            <div className="text-center flex flex-col justify-center  items-center mb-6 pt-3">
                <h2 className="text-center text-gray-300 uppercase">Capabilities Toolkit</h2>
                <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
                    My <span className=" bg-gradient-to-r from-blue-600 to-cyan-500 
          bg-clip-text text-transparent tracking-widest">Skills</span>
                </h1>
                <div className="w-30 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center  gap-10 pt-10">

{/* 1 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration:1 }}>
                    <div className="border border-transparent hover:border-blue-300 
                duration-300 h-[200px] rounded-2xl p-5">

                        <div className="flex justify-center">
                            <FaReact className="text-5xl" />
                        </div>

                        <h1 className="text-2xl font-bold mt-8">React</h1>
                        <p className="text-gray-400">Core Libraries</p>
                        <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
                    </div></motion.div>

{/* 2 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration: 1, delay:0.2 }}>
                <div className="border border-transparent
       hover:border-blue-300 duration-300 h-[200px] rounded-2xl p-5 items-center">
                    <div className="flex justify-center">
                        <FaJs className="text-5xl" />

                    </div>
                    <h1 className="text-2xl font-bold mt-8">JavaScript</h1>
                    <p className="text-gray-400">Languages</p>
                    <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
                </div>
                </motion.div>

{/* 3 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration: 1, delay:0.4 }}>
                <div className="border border-transparent
       hover:border-blue-300 duration-300 h-[200px] rounded-2xl p-5">
                    <div className="flex justify-center">
                        <RiTailwindCssFill className="text-5xl" />

                    </div>
                    <h1 className="text-2xl font-bold mt-8">Tailwind CSS</h1>
                    <p className="text-gray-400">Styling Frameworks</p>
                    <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
                </div>
                </motion.div>

{/* 4 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration: 1, delay:0.6 }}>
                <div className="border border-transparent
       hover:border-blue-300 duration-300 h-[200px] rounded-2xl p-5">
                    <div className="flex justify-center">
                        <FaHtml5 className="text-5xl" />

                    </div>

                    <h1 className="text-2xl font-bold mt-8">HTML</h1>
                    <p className="text-gray-400">Web Basic</p>
                    <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
                </div>
                </motion.div>

{/* 5 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration: 1,}}>
                <div className="border border-transparent
       hover:border-blue-300 duration-300 h-[200px] rounded-2xl p-5">
                    <div className="flex justify-center">
                        <FaCss3Alt className="text-5xl" />

                    </div>
                    <h1 className="text-2xl font-bold mt-8">CSS</h1>
                    <p className="text-gray-400">Web Basics</p>
                    <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
                </div>
                </motion.div>

{/* 6 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration: 1, delay:0.2 }}>
                <div className="border border-transparent
       hover:border-blue-300 duration-300 h-[200px] rounded-2xl p-5">
                    <div className="flex justify-center">
                        <FaGithub className="text-5xl" />

                    </div>
                    <h1 className="text-2xl font-bold mt-8">Git & GitHub</h1>
                    <p className="text-gray-400">Workflow Tools</p>
                    <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
                </div>
                </motion.div>

{/* 7 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration: 1, delay:0.4 }}>
                <div className="border border-transparent
       hover:border-blue-300 duration-300 h-[200px] rounded-2xl p-5">
                    <div className="flex justify-center">
                        <FaFigma className="text-5xl" />

                    </div>
                    <h1 className="text-2xl font-bold mt-8">UI Design</h1>
                    <p className="text-gray-400">Creative Methodologies</p>
                    <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto
          rounded-full mt-4"></div>
                </div>
                </motion.div>

            </div>



        </div>
    )
}
export default Skills