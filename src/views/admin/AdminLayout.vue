<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :temporary="$vuetify.display.mobile"
      permanent
      class="admin-sidebar"
    >
      <v-list>
        <v-list-item class="admin-logo mb-4">
          <v-list-item-title class="text-h6 font-weight-bold">
            <v-icon color="primary" class="mr-2">mdi-shield-lock</v-icon>
            EBHI Admin
          </v-list-item-title>
        </v-list-item>
        <v-divider class="mb-4"></v-divider>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          :active="isActive(item.to.name)"
          class="mb-2 menu-item"
          rounded="lg"
          variant="text"
        ></v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Déconnexion"
            @click="handleLogout"
            class="mb-2"
            rounded="lg"
          ></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="white" elevation="2" class="admin-header">
      <v-app-bar-nav-icon
        v-if="$vuetify.display.mobile"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-h6 font-weight-bold">
        {{ currentPageTitle }}
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-chip color="primary" variant="flat" prepend-icon="mdi-account">
        {{ currentUser?.name || 'Admin' }}
      </v-chip>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-6">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '../../services/api.js'

const router = useRouter()
const route = useRoute()
const drawer = ref(true)
const currentUser = ref(null)

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: { name: 'AdminDashboard' } },
  { title: 'Articles', icon: 'mdi-newspaper', to: { name: 'AdminArticles' } },
  { title: 'Services', icon: 'mdi-briefcase', to: { name: 'AdminServices' } },
  { title: 'Domaines', icon: 'mdi-domain', to: { name: 'AdminDomains' } },
  {
    title: 'Catégories de postes',
    icon: 'mdi-briefcase-variant',
    to: { name: 'AdminJobCategories' }
  },
  { title: 'Candidatures', icon: 'mdi-file-document', to: { name: 'AdminJobApplications' } },
  { title: 'Témoignages', icon: 'mdi-format-quote-open', to: { name: 'AdminTestimonials' } },
  { title: 'Statistiques', icon: 'mdi-chart-line', to: { name: 'AdminStats' } },
  { title: 'Contacts', icon: 'mdi-email', to: { name: 'AdminContacts' } },
  { title: 'Utilisateurs', icon: 'mdi-account-group', to: { name: 'AdminUsers' } }
]

const pageTitles = {
  AdminDashboard: 'Dashboard',
  AdminArticles: 'Gestion des Articles',
  AdminServices: 'Gestion des Services',
  AdminDomains: 'Gestion des Domaines',
  AdminJobCategories: 'Gestion des Catégories de Postes',
  AdminJobApplications: 'Gestion des Candidatures',
  AdminTestimonials: 'Gestion des Témoignages',
  AdminStats: 'Gestion des Statistiques',
  AdminContacts: 'Gestion des Contacts',
  AdminUsers: 'Gestion des Utilisateurs'
}

const currentPageTitle = computed(() => {
  return pageTitles[route.name] || 'Backoffice'
})

const isActive = routeName => {
  return route.name === routeName
}

const handleLogout = async () => {
  await api.logout()
  router.push({ name: 'AdminLogin' })
}

onMounted(async () => {
  try {
    currentUser.value = await api.getCurrentUser()
  } catch (error) {
    console.error('Error fetching current user:', error)
  }
})
</script>

<style scoped>
.admin-sidebar {
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
}

.admin-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.menu-item {
  transition: all 0.3s ease;
}

.menu-item:hover {
  background-color: rgba(26, 35, 126, 0.05);
}

.menu-item.v-list-item--active {
  background-color: rgba(26, 35, 126, 0.1) !important;
  color: #1a237e !important;
  font-weight: 600;
}

.menu-item.v-list-item--active :deep(.v-icon) {
  color: #1a237e !important;
}
</style>
