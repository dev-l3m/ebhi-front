<template>
  <v-app-bar
    :elevation="scrolled ? 4 : 0"
    :color="scrolled ? 'white' : 'transparent'"
    fixed
    class="transition-all"
    style="transition: all 0.3s ease"
  >
    <v-container class="d-flex align-center">
      <v-app-bar-title class="pa-0">
        <router-link to="/" class="d-flex align-center text-decoration-none">
          <!-- Logo Desktop -->
          <img
            src="/assets/logo.png"
            alt="EBHI Logo"
            class="logo-header logo-desktop d-none d-md-block"
            style="height: 50px; max-width: 150px; object-fit: contain"
          />
          <!-- Logo Mobile -->
          <img
            src="/assets/logo-mobile.png"
            alt="EBHI Logo"
            class="logo-header logo-mobile d-block d-md-none"
            style="height: 40px; max-width: 40px; object-fit: contain"
          />
        </router-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-for="item in simpleMenuItems"
        :key="item.title"
        :to="item.to.startsWith('#') ? undefined : item.to"
        text
        class="mx-2 d-none d-md-flex"
        color="primary"
        @click="item.to.startsWith('#') ? scrollToSection(item.to.substring(1)) : null"
      >
        {{ item.title }}
      </v-btn>

      <!-- Menu déroulant Ressources - Desktop uniquement -->
      <v-menu location="bottom" class="d-none d-md-block">
        <template v-slot:activator="{ props }">
          <v-btn text class="mx-2 d-none d-md-flex" color="primary" v-bind="props">
            Ressources
            <v-icon end>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="resource in resourcesItems"
            :key="resource.title"
            :to="resource.to"
            @click="handleResourceClick(resource)"
          >
            <v-list-item-title>{{ resource.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        color="primary"
        variant="elevated"
        class="ml-4 d-none d-md-flex"
        @click="scrollToContact"
      >
        LANCEZ-VOUS
      </v-btn>

      <v-btn
        icon
        variant="text"
        class="d-md-none burger-menu-btn"
        color="primary"
        @click.stop="toggleDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    width="320"
    class="mobile-drawer"
  >
    <div class="drawer-header">
      <v-btn icon variant="text" size="small" class="drawer-close-btn" @click="drawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-divider></v-divider>

    <v-list class="drawer-list" nav>
      <v-list-item
        v-for="item in simpleMenuItems"
        :key="item.title"
        :to="item.to.startsWith('#') ? undefined : item.to"
        class="drawer-menu-item"
        @click="item.to.startsWith('#') ? scrollToSection(item.to.substring(1)) : (drawer = false)"
      >
        <template v-slot:prepend>
          <v-icon class="menu-item-icon">{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title class="menu-item-title">{{ item.title }}</v-list-item-title>
      </v-list-item>

      <!-- Ressources avec sous-menu dans le drawer -->
      <v-list-group v-model="resourcesExpanded" class="drawer-menu-group">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" class="drawer-menu-item">
            <template v-slot:prepend>
              <v-icon class="menu-item-icon">mdi-folder-multiple</v-icon>
            </template>
            <v-list-item-title class="menu-item-title">Ressources</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="resource in resourcesItems"
          :key="resource.title"
          :to="resource.to"
          class="drawer-submenu-item"
          @click="handleResourceClick(resource)"
        >
          <v-list-item-title class="submenu-item-title">{{ resource.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-divider class="drawer-divider"></v-divider>

    <div class="drawer-footer">
      <v-btn
        color="primary"
        variant="elevated"
        size="large"
        block
        class="drawer-cta-btn"
        rounded="lg"
        @click="scrollToContact"
      >
        <v-icon start>mdi-rocket-launch</v-icon>
        LANCEZ-VOUS
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const scrolled = ref(false)
const resourcesExpanded = ref(false)
let isToggling = false

const simpleMenuItems = [
  { title: 'Accueil', to: '/', icon: 'mdi-home' },
  { title: 'Nos services', to: '/nos-services', icon: 'mdi-briefcase' }
]

const resourcesItems = [
  { title: 'POURQUOI EXTERNALISER ?', to: '/pourquoi-externaliser' },
  { title: "À PROPOS D'EBHI", to: '/a-propos' },
  { title: 'NOUS REJOINDRE', to: '/nous-rejoindre' },
  { title: 'NOS IMPLANTATIONS STRATÉGIQUES', to: '/nos-implantations-strategiques' },
  { title: 'BLOG', to: '/blog' }
]

const handleResourceClick = resource => {
  if (resource.to.startsWith('#')) {
    scrollToSection(resource.to.substring(1))
  }
  resourcesExpanded.value = false
  drawer.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const scrollToSection = id => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  drawer.value = false
}

const scrollToContact = () => {
  scrollToSection('contact')
}

const toggleDrawer = event => {
  if (event) {
    event.stopPropagation()
    event.preventDefault()
  }

  // Éviter les doubles appels
  if (isToggling) {
    return
  }

  isToggling = true
  const newValue = !drawer.value
  drawer.value = newValue

  console.log('Toggle drawer - new value:', newValue)

  // Réinitialiser le flag après un court délai
  setTimeout(() => {
    isToggling = false
  }, 300)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}

.logo-header {
  transition: all 0.3s ease;
  cursor: pointer;
}

.logo-header:hover {
  opacity: 0.8;
}

.burger-menu-btn {
  z-index: 1000 !important;
  position: relative !important;
  cursor: pointer !important;
  pointer-events: auto !important;
  touch-action: manipulation !important;
  -webkit-tap-highlight-color: transparent;
}

.burger-menu-btn:hover {
  opacity: 0.8;
}

.burger-menu-btn:active {
  opacity: 0.6;
}

/* S'assurer que le drawer est au-dessus de tout */
.v-navigation-drawer,
.mobile-drawer {
  z-index: 2000 !important;
}

.v-navigation-drawer--temporary {
  z-index: 2000 !important;
}

.mobile-drawer {
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  height: 100vh !important;
  z-index: 2000 !important;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15) !important;
}

/* Header du drawer */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
}

.drawer-close-btn {
  color: white !important;
}

.drawer-close-btn:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* Liste du menu */
.drawer-list {
  padding: 16px 0 !important;
  background: white;
}

.drawer-menu-item {
  margin: 4px 16px !important;
  border-radius: 12px !important;
  min-height: 52px !important;
  transition: all 0.3s ease;
  padding-left: 16px !important;
  padding-right: 16px !important;
}

.drawer-menu-item:hover {
  background-color: rgba(26, 35, 126, 0.08) !important;
  transform: translateX(4px);
}

.drawer-menu-item.v-list-item--active {
  background-color: rgba(26, 35, 126, 0.12) !important;
  color: #1a237e !important;
}

.menu-item-icon {
  color: #1a237e !important;
  margin-right: 16px !important;
  flex-shrink: 0;
}

.menu-item-title {
  font-size: 1rem !important;
  font-weight: 500 !important;
  color: #212121 !important;
  text-align: left;
}

.drawer-menu-group {
  margin: 4px 16px !important;
}

.drawer-menu-group .v-list-item {
  border-radius: 12px !important;
  min-height: 52px !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
}

.drawer-submenu-item {
  margin-left: 32px !important;
  margin-right: 16px !important;
  margin-top: 2px !important;
  margin-bottom: 2px !important;
  border-radius: 8px !important;
  min-height: auto !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
  overflow: visible !important;
}

.drawer-submenu-item :deep(.v-list-item__content) {
  overflow: visible !important;
  min-width: 0 !important;
}

.drawer-submenu-item :deep(.v-list-item-title) {
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: normal !important;
}

.drawer-submenu-item:hover {
  background-color: rgba(26, 35, 126, 0.06) !important;
}

.submenu-item-title {
  font-size: 0.9375rem !important;
  font-weight: 400 !important;
  color: #616161 !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  line-height: 1.4 !important;
  max-width: 100% !important;
  width: 100% !important;
  display: block !important;
}

.drawer-divider {
  margin: 16px 0 !important;
}

/* Footer avec bouton CTA */
.drawer-footer {
  padding: 20px 16px;
  background: #fafafa;
  border-top: 1px solid #e0e0e0;
}

.drawer-cta-btn {
  font-weight: 700 !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  padding: 16px 24px !important;
  box-shadow: 0 4px 12px rgba(26, 35, 126, 0.3) !important;
  transition: all 0.3s ease !important;
}

.drawer-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(26, 35, 126, 0.4) !important;
}

.drawer-cta-btn:active {
  transform: translateY(0);
}

/* S'assurer que l'app-bar ne bloque pas les clics */
.v-app-bar {
  z-index: 1000 !important;
}

@media (max-width: 960px) {
  .burger-menu-btn {
    z-index: 1002 !important;
    pointer-events: auto !important;
    position: relative !important;
    min-width: 48px !important;
    min-height: 48px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
  }

  .burger-menu-btn .v-icon {
    font-size: 24px !important;
    pointer-events: none !important;
  }

  /* S'assurer que le v-btn n'est pas désactivé */
  .burger-menu-btn.v-btn {
    pointer-events: auto !important;
  }

  .burger-menu-btn.v-btn--disabled {
    pointer-events: none !important;
  }

  /* S'assurer que le menu Ressources est complètement caché sur mobile */
  .v-menu {
    display: none !important;
  }

  /* Cacher tous les éléments du menu desktop sur mobile */
  .v-app-bar .v-btn.d-none.d-md-flex,
  .v-app-bar .v-menu {
    display: none !important;
  }

  /* S'assurer qu'aucun élément ne bloque le burger menu */
  .v-app-bar .v-container {
    position: relative;
    overflow: visible !important;
  }

  .v-app-bar .v-spacer {
    pointer-events: none !important;
  }

  /* S'assurer que l'app-bar-title ne bloque pas */
  .v-app-bar-title {
    pointer-events: auto !important;
  }

  .drawer-submenu-item {
    margin-left: 24px !important;
    margin-right: 12px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    min-height: auto !important;
  }

  .submenu-item-title {
    font-size: 0.875rem !important;
    line-height: 1.4;
    padding: 8px 0;
  }
}

@media (max-width: 600px) {
  .drawer-submenu-item {
    margin-left: 20px !important;
    margin-right: 12px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .submenu-item-title {
    font-size: 0.8125rem !important;
    line-height: 1.4;
    padding: 6px 0;
    word-break: break-word;
    hyphens: auto;
  }

  .drawer-menu-item {
    min-height: 48px !important;
    margin: 4px 12px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .menu-item-title {
    font-size: 0.9375rem !important;
  }

  .menu-item-icon {
    margin-right: 12px !important;
    font-size: 20px !important;
  }

  .drawer-menu-group {
    margin: 4px 12px !important;
  }

  .drawer-menu-group .v-list-item {
    padding-left: 12px !important;
    padding-right: 12px !important;
    min-height: 48px !important;
  }

  .drawer-cta-btn {
    font-size: 0.875rem !important;
    padding: 14px 20px !important;
    min-height: 44px !important;
  }

  .drawer-cta-btn .v-icon {
    font-size: 20px !important;
  }
}
</style>
