import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Couleurs basées sur le logo EBHI
// - Primary: Bleu foncé (texte EBHI et quadrant top-left)
// - Success: Vert vif (quadrant top-right)
// - Error: Rouge-orange (quadrant bottom-left)
// - Warning: Jaune vif (quadrant bottom-right)
const customTheme = {
  dark: false,
  colors: {
    primary: '#1a237e',        // Bleu foncé du logo EBHI
    secondary: '#283593',       // Bleu foncé alternatif
    accent: '#3f51b5',          // Bleu moyen pour les accents
    error: '#ff5722',           // Rouge-orange du logo
    info: '#2196F3',            // Bleu info standard
    success: '#4caf50',         // Vert vif du logo
    warning: '#ffc107',         // Jaune vif du logo
    background: '#FAFAFA',
    surface: '#FFFFFF',
  }
}

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
})
