import { motion } from "motion/react"

function About() {
  return (


    <div id="About" className=" text-white py-20 px-6 md:px-16 mt-20 rounded-2xl bg-gray-800">

      <div className="text-center  rounded-2xl flex flex-col
       justify-center  items-center pt-3">
        <h2 className="text-center text-gray-300 uppercase">Discover My Story</h2>
        <h1 className="text-4xl md:text-6xl font-bold">
          Who is <span className=" bg-gradient-to-r from-blue-600 to-cyan-500 
          bg-clip-text text-transparent">M Waqas?</span>
        </h1>

        <div className="w-30 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto 
        rounded-full mt-4"></div>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 mt-16">

        {/* Left Card */}
        <motion.div
        className="w-full md:w-2/3"
        initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full bg-[#0d0229] border border-transparent 
        hover:border-gray-400 
        duration-300 rounded-3xl p-8">

            <h2 className="text-2xl md:text-3xl text-center font-bold mb-6">
              Passionate Frontend Engineer
            </h2>

            <p className="text-gray-300 leading-8">
              I specialize in creating modern, responsive, and interactive web
              applications using React and Tailwind CSS. My goal is to build
              beautiful user interfaces that provide excellent user experiences.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              I enjoy turning ideas into responsive digital products with clean
              code, smooth animations, and professional UI design. Every project
              I build focuses on performance, accessibility, and modern design.
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 border-t
           border-gray-700 pt-8">

              <div>
                <h4 className="text-gray-300 uppercase text-sm">Location</h4>
                <p className="font-semibold mt-2 text-sm">Pakistan</p>
              </div>

              <div>
                <h4 className="text-gray-300 uppercase text-sm">Role</h4>
                <p className="font-semibold mt-2 text-sm">Frontend Developer</p>
              </div>

              <div>
                <h4 className="text-gray-300 uppercase text-sm">Education</h4>
                <p className="font-semibold mt-2 text-sm">Computer Science</p>
              </div>

              <div>
                <h4 className="text-gray-300 uppercase text-sm">Motto</h4>
                <p className=" font-semibold mt-2 text-sm">
                  Clean Code
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
  className="w-full md:w-1/3"
  initial={{ opacity: 0, y: 140 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
  >
        <div className="w-full h-116 bg-[#0d0229] border border-transparent
         hover:border-gray-400 duration-400 rounded-3xl p-8 flex flex-col justify-between">


          <div>

            <h2 className="text-3xl font-bold mt-8">
              My Mission
            </h2>

            <p className="text-gray-400 italic leading-8 mt-6">
              "Good design is not just what it looks like and feels like.
              Design is how it works. I bring interfaces to life through code,
              ensuring every interaction feels natural and smooth."
            </p>

          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 
            to-cyan-400 flex items-center justify-center font-bold">
              MW
            </div>

            <div>
              <h3 className="font-bold text-lg">
                M Waqas
              </h3>

              <p className="text-gray-400 text-sm">
                Frontend Developer
              </p>
            </div>

          </div>

        </div>
        </motion.div>

      </div>

    </div>
  );
}
export default About