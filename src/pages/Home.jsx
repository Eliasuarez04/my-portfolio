import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Home = () => {
  const { translations } = useLanguage()

  return (
    <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-800 to-blue-500 text-white animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">{translations.home.title}</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{translations.home.description}</p>

      <div className="flex justify-center gap-6 flex-wrap mb-8">
        <a href="https://unitechn-my.sharepoint.com/:b:/g/personal/eliasuarez04_unitec_edu/EdK97pPoHI1CqKBJeY9ni-EB5_w4T1oytHZGPMn9wKEeew?e=lnE44V" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 hover:scale-105 transition duration-300">
          {translations.home.viewCV}
        </a>
        <Link to="/projects" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 hover:bg-yellow-300 transition duration-300">
          {translations.home.viewProjects}
        </Link>
      </div>

      <div className="flex justify-center gap-6 text-3xl">
        <a href="https://github.com/Eliasuarez04" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/elias-suarez-dev/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:eliassuarezramos@gmail.com" className="hover:text-gray-300 transition">
          <FaEnvelope />
        </a>
      </div>
    </section>
  )
}

export default Home
