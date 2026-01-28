import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)

const updateDocumentTitle = () => {
  if (typeof document === 'undefined') return
  document.title = `EBHI - ${i18n.global.t('common.title')}`
}

// Set initial title + react to locale changes
updateDocumentTitle()
watch(i18n.global.locale, updateDocumentTitle)

app.mount('#app')
