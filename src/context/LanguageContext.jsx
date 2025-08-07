import { createContext, useState, useContext } from 'react'
import es from '../i18n/es'
import en from '../i18n/en'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'))
  }

  const translations = language === 'es' ? es : en

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}
