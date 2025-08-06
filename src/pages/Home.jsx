import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-800 to-blue-500 text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Hola, soy Elias 👨‍💻</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
        Desarrollador frontend apasionado por crear interfaces modernas, creativas y funcionales.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <a 
          href="https://unitechn-my.sharepoint.com/:b:/g/personal/eliasuarez04_unitec_edu/ET7WGmisEg5Cl405rlhOJGoByigKesooLLA5bgsvOwC_bw?e=4eWIUR" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
        >
          Ver CV
        </a>
        <Link 
          to="/projects" 
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
        >
          Ver Proyectos
        </Link>
      </div>
    </section>
  )
}

export default Home
