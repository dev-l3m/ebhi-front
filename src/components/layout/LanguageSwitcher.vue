<template>
  <v-menu location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn
        icon
        variant="text"
        v-bind="props"
        class="language-switcher-btn"
        :title="$t('common.language')"
        @click="handleActivatorClick"
      >
        <span class="fi" :class="currentFlag"></span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        :class="{ 'bg-primary-lighten-5': currentLocale === lang.code }"
      >
        <template v-slot:prepend>
          <span class="fi mr-2" :class="lang.flag"></span>
        </template>
        <v-list-item-title>{{ lang.name }}</v-list-item-title>
        <template v-slot:append v-if="currentLocale === lang.code">
          <v-icon color="primary" size="small">mdi-check</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const languages = [
  { code: 'fr', name: t('common.french'), flag: 'fi fi-fr' },
  { code: 'en', name: t('common.english'), flag: 'fi fi-gb' }
]

const currentLocale = computed(() => locale.value)

const currentFlag = computed(() => {
  return currentLocale.value === 'fr' ? 'fi fi-fr' : 'fi fi-gb'
})

const toggleLanguage = () => {
  const next = currentLocale.value === 'fr' ? 'en' : 'fr'
  changeLanguage(next)
}

const handleActivatorClick = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    toggleLanguage()
  }
}

const changeLanguage = langCode => {
  locale.value = langCode
  localStorage.setItem('locale', langCode)
  // Mettre à jour l'attribut lang du HTML
  if (typeof document !== 'undefined') {
    document.documentElement.lang = langCode
  }
}
</script>

<style scoped>
.language-switcher-btn {
  min-width: 40px;
}

.fi {
  font-size: 20px;
  line-height: 1;
}
</style>
