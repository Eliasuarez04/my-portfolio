import { FaCode, FaLaptopCode, FaLightbulb, FaUsers } from 'react-icons/fa'

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Sobre mí</h2>

      <p className="text-lg mb-6 text-gray-700 text-center">
        Soy Elias Suárez, estudiante de Ingeniería en Informática con experiencia en soporte técnico,
        desarrollo web y tecnologías modernas como React, Vue, Node.js, entre otras.
        Me apasiona crear soluciones funcionales, creativas y escalables.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white p-6 rounded-lg shadow border">
          <FaCode className="text-blue-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Stack principal</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>JavaScript (ES6+)</li>
            <li>React, Vue, Angular</li>
            <li>HTML5, CSS3, TailwindCSS, Bootstrap</li>
            <li>Node.js, PHP</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <FaLaptopCode className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Experiencia práctica</h3>
          <p className="text-gray-600">
            He trabajado en soporte técnico en la Universidad UNITEC, brindando asistencia en hardware, software y redes.
            También tengo experiencia desarrollando aplicaciones y manejando inventarios con tecnologías web modernas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <FaUsers className="text-purple-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Habilidades blandas</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Trabajo en equipo</li>
            <li>Comunicación efectiva</li>
            <li>Adaptabilidad</li>
            <li>Aprendizaje continuo</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <FaLightbulb className="text-yellow-500 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Formación y Certificaciones</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ingeniería en Informática (CEUTEC)</li>
            <li>Scrum, Python, Excel, Inglés B1</li>
            <li>Soporte de Sistemas, Microsoft Office</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
