import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const { toggleLanguage, translations, language } = useLanguage()

  return (
    <nav className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">EliasDev</Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:underline">{translations.navbar.home}</Link>
          <Link to="/about" className="hover:underline">{translations.navbar.about}</Link>
          <Link to="/projects" className="hover:underline">{translations.navbar.projects}</Link>
          <Link to="/blog" className="hover:underline">{translations.navbar.blog}</Link>
          <Link to="/contact" className="hover:underline">{translations.navbar.contact}</Link>
          <button onClick={toggleLanguage} className="bg-white text-blue-700 px-2 py-1 rounded hover:bg-gray-200 transition text-sm">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
