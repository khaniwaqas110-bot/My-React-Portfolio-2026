function Navbar() {
  return (

    <div className="md:w-[1000px] flex flex-col md:flex-row font-bold items-center
   p-4 rounded-none md:rounded-full mx-auto text-white justify-between 
   fixed top-2 left-4 right-4 z-9 
   bg-transparent md:bg-slate-900/75
    md:backdrop-blur-lg">

      <div className="flex items-center gap-4">

        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 
            to-cyan-400 flex items-center justify-center font-bold">
          MW
        </div>

        <h1 className="text-white text-2xl flex-wrap">
          Waqas.dev</h1></div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <a className=" hover:text-blue-400 duration-300 hover:underline" href="#home">Home</a>
        <a className=" hover:text-blue-400 duration-300 hover:underline" href="#About">About</a>
        <a className=" hover:text-blue-400 duration-300 hover:underline" href="#skills">Skills</a>
        <a className=" hover:text-blue-400 duration-300 hover:underline" href="#projects">Projects</a>
        <a className=" hover:text-blue-400 duration-300 hover:underline" href="#future">Future</a>
        <a className=" hover:text-blue-400 duration-300 hover:underline" href="#contact">Contact</a>
      </div>
      <a href="#contact">
      <button className="text-black bg-yellow-500 w-[90px] rounded-full h-10 flex-wrap md:mt-0">
        Hire me
      </button></a>
    </div>

  );
}
export default Navbar