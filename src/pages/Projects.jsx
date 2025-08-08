import { useLanguage } from '../context/LanguageContext'

const projectLinks = [
  {
    github: 'https://github.com/Eliasuarez04/todo-app',
    demo: 'https://todo-app-kappa-two-36.vercel.app/',
  },
  {
    github: 'https://github.com/Eliasuarez04/weather-app',
    demo: 'https://weather-app-one-weld-42.vercel.app/',
  },
  {
    github: 'https://github.com/Eliasuarez04/ecommerce-app',
    demo: 'https://ecommerce-app-dusky-gamma.vercel.app/',
  },
  {
    github: 'https://github.com/Eliasuarez04/dashboard-app',
    demo: 'https://dashboard-app-omega-murex.vercel.app/',
  }
]


const Projects = () => {
  const { translations } = useLanguage()
  const projects = translations.projects.items

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
        {translations.projects.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={projectLinks[index].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {project.demo}
              </a>
              <a
                href={projectLinks[index].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              >
                {project.code}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
