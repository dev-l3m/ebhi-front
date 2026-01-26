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
          <img
            src="/assets/logo.png"
            alt="EBHI Logo"
            class="logo-header"
            style="height: 50px; max-width: 150px; object-fit: contain;"
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

      <!-- Menu déroulant Ressources -->
      <v-menu
        location="bottom"
        class="d-none d-md-block"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            text
            class="mx-2"
            color="primary"
            v-bind="props"
          >
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

      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
    >
      <v-list>
        <v-list-item
          v-for="item in simpleMenuItems"
          :key="item.title"
          :to="item.to.startsWith('#') ? undefined : item.to"
          @click="item.to.startsWith('#') ? scrollToSection(item.to.substring(1)) : (drawer = false)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        
        <!-- Ressources avec sous-menu dans le drawer -->
        <v-list-group value="Ressources">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Ressources"></v-list-item>
          </template>
          <v-list-item
            v-for="resource in resourcesItems"
            :key="resource.title"
            :to="resource.to"
            @click="handleResourceClick(resource)"
          >
            <v-list-item-title>{{ resource.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item @click="scrollToContact">
          <v-list-item-title class="primary--text font-weight-bold">
            LANCEZ-VOUS
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const scrolled = ref(false)

const simpleMenuItems = [
  { title: 'Accueil', to: '/' },
  { title: 'Nos services', to: '/nos-services' }
]

const resourcesItems = [
  { title: 'POURQUOI EXTERNALISER ?', to: '/pourquoi-externaliser' },
  { title: 'À PROPOS D\'EBHI', to: '/a-propos' },
  { title: 'NOUS REJOINDRE', to: '/nous-rejoindre' },
  { title: 'NOS IMPLANTATIONS STRATÉGIQUES', to: '/nos-implantations-strategiques' },
  { title: 'BLOG', to: '/blog' }
]

const handleResourceClick = (resource) => {
  if (resource.to.startsWith('#')) {
    scrollToSection(resource.to.substring(1))
  }
  drawer.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  drawer.value = false
}

const scrollToContact = () => {
  scrollToSection('contact')
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
</style>
