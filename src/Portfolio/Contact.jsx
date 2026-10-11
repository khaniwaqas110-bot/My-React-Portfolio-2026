import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "motion/react"


function Contact() {
  return (
    <div id="contact" className="py-20 px-10 mt-10 scroll-mt-5">
      {/* <div className="max-w-6xl mx-auto "> */}
        <div className="text-center  rounded-2xl flex flex-col
       justify-center  items-center pt-3">

          <h1 className="text-4xl md:text-6xl font-bold text-white ">
            Contact <span className=" bg-gradient-to-r from-blue-600 to-cyan-500 
          bg-clip-text text-transparent tracking-widest ">Me</span>
          </h1>


          <div className="w-30 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto 
        rounded-full mt-4 "></div>
        </div>


        {/* Parent Div */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mt-20 ">

          {/*Left Side*/}

          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay:0.2}}

          >


            <div id="contact" className="w-full space-y-8 pt-24">

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                  Let's Work Together
                </h2>

                <p className="text-gray-400 mt-5 leading-7 max-w-md">
                  Have a project in mind or want to work together? Feel free to contact me.
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 p-4 rounded-xl">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-400">0333 1622996</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 p-4 rounded-xl">
                    <FaEnvelope className="text-white text-xl" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">khaniwaqas110@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 p-4 rounded-xl">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">Address</h3>
                    <p className="text-gray-400">Bannu, Pakistan</p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/*Right Side */}

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >



            <div className="w-full bg-slate-800 p-8 rounded-2xl border border-slate-700">

              <h2 className="text-3xl font-bold text-white mb-6">
                Send Me a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-slate-900 text-white border
       border-slate-700 outline-none focus:border-blue-500" />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 outline-none focus:border-blue-500"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl bg-slate-900 text-white border
                   border-slate-700 outline-none focus:border-blue-500 resize-none"
                ></textarea>

                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      {/* </div> */}

      {/* Futer */}

      <footer className="mt-25">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between
         items-center gap-4">

          <p className="text-gray-300 text-sm">
            © 2026 <span className="text-white font-semibold">M Waqas</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Terms of Service
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </div>

        </div>
      </footer>
    </div>



  )
}

export default Contact