const Projects = () => {
  const projects = [
    {
      title: 'To-Do App',
      description: 'Aplicación para gestionar tareas con React y localStorage.',
      tech: ['React', 'TailwindCSS', 'localStorage'],
      github: 'https://github.com/Eliasuarez04/todo-app',
      demo: 'https://todo-app-kappa-two-36.vercel.app/',
    },
     {
    title: 'Weather App',
    description: 'Consulta del clima por ciudad o geolocalización usando la API de OpenWeather.',
    tech: ['React', 'TailwindCSS', 'API', 'Geolocalización'],
    github: 'https://github.com/Eliasuarez04/weather-app',
    demo: 'https://weather-app-one-weld-42.vercel.app/',
  },
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Ver Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              >
                Ver Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
