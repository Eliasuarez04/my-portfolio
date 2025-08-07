import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { translations } = useLanguage()

  return (
    <section className="max-w-2xl mx-auto px-6 py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">{translations.contact.title}</h2>
      <p className="text-lg text-gray-700 text-center">{translations.contact.paragraph}</p>
      {/* Aquí puedes añadir un formulario de contacto si quieres */}
    </section>
  )
}

export default Contact
