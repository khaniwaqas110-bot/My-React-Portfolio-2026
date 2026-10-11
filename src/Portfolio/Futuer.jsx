function Futuer(props) {
  return (

    <div className="
    justify-center group bg-slate-900 rounded-2xl 
overflow-hidden  border  border-slate-700 hover:-translate-y-3
transition duration-500  mt-10 scrool-mt-30 ">


      {/* Image */}
      <div className="relative">
        <img
          src={props.img}
          className="w-full h-56 object-cover group-hover:scale-110
     transition duration-500"

        />

        {/* Status Badge */}
        <span className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-semibold 
        px-3 py-1 rounded-full">
          {props.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {props.title}
        </h3>

        <p className="text-gray-400 mt-3">
          {props.desc}
        </p>

        <button className="mt-6 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700
         text-white transition">
          Explore Idea →
        </button>
      </div>

    </div>




  )
}

export default Futuer