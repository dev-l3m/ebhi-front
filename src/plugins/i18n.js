import { createI18n } from 'vue-i18n'
import fr from '../locales/fr.json'
import en from '../locales/en.json'

const messages = {
  fr,
  en
}

// Récupérer la langue depuis localStorage ou utiliser le français par défaut
const savedLocale = localStorage.getItem('locale') || 'fr'

// Mettre à jour l'attribut lang du HTML
if (typeof document !== 'undefined') {
  document.documentElement.lang = savedLocale
}

const i18n = createI18n({
  legacy: false, // Utiliser la Composition API
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages,
  globalInjection: true // Permet d'utiliser $t dans les templates
})

export default i18n
