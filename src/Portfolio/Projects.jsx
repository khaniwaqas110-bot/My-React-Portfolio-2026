import { motion } from "motion/react"
function Projects(props) {
    return (

        <>
            <div className="
    justify-center group bg-slate-900 rounded-2xl 
overflow-hidden  border  border-slate-700 hover:-translate-y-3
transition duration-500  mt-10 scrool-mt-30">

                <div>
                    <img
                        src={props.img}
                        className="w-full h-62 object-cover  group-hover:scale-110 transition
 duration-600 "/>
                </div>

                <div className="p-6">

                    <h2 className=" text-2xl font-bold text-white ">
                        {props.tittle}
                    </h2>

                    <p className=" text-gray-400 mt-3 ">
                        {props.desc}
                    </p>


                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.10 }}
                        transition={{ duration: 0.2 }}
                    >


                        <button className=" mt-5 px-5 py-2 rounded-full bg-blue-500 text-white 
                     hover:bg-blue-600 ">
                            {props.btn}
                        </button>
                    </motion.div>

                </div>

            </div>
        </>

    )

}

export default Projects