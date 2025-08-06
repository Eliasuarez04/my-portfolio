import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">EliasDev</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/about" className="hover:underline">Sobre mí</Link>
          <Link to="/projects" className="hover:underline">Proyectos</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
