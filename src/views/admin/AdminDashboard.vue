<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Dashboard</h1>
      <v-chip color="primary" variant="flat" prepend-icon="mdi-calendar">
        {{ new Date().toLocaleDateString('fr-FR') }}
      </v-chip>
    </div>

    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
      </v-col>
    </v-row>

    <div v-else>
      <!-- Stats Cards -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card" elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-center">
                <v-icon color="primary" size="48" class="mr-4">mdi-newspaper</v-icon>
                <div>
                  <div class="text-h4 font-weight-bold">{{ stats.articles?.total || 0 }}</div>
                  <div class="text-body-2 text-grey-darken-1">Articles</div>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card" elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-center">
                <v-icon color="success" size="48" class="mr-4">mdi-email</v-icon>
                <div>
                  <div class="text-h4 font-weight-bold">{{ stats.contacts?.new || 0 }}</div>
                  <div class="text-body-2 text-grey-darken-1">Nouveaux contacts</div>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card" elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-center">
                <v-icon color="warning" size="48" class="mr-4">mdi-file-document</v-icon>
                <div>
                  <div class="text-h4 font-weight-bold">{{ stats.jobApplications?.pending || 0 }}</div>
                  <div class="text-body-2 text-grey-darken-1">Candidatures en attente</div>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card" elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-center">
                <v-icon color="info" size="48" class="mr-4">mdi-account-group</v-icon>
                <div>
                  <div class="text-h4 font-weight-bold">{{ stats.jobApplications?.total || 0 }}</div>
                  <div class="text-body-2 text-grey-darken-1">Total candidatures</div>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <!-- Recent Activity -->
      <v-row>
        <v-col cols="12" md="8">
          <v-card elevation="4" rounded="xl">
            <v-card-title class="pa-6">
              <v-icon color="primary" class="mr-2">mdi-clock-outline</v-icon>
              Activité récente
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-6">
              <v-timeline v-if="stats.recentActivity?.length" density="compact">
                <v-timeline-item
                  v-for="(activity, index) in stats.recentActivity"
                  :key="index"
                  :dot-color="getActivityColor(activity.type)"
                  size="small"
                >
                  <div class="text-body-1">{{ activity.message }}</div>
                  <div class="text-caption text-grey-darken-1">
                    {{ formatDate(activity.createdAt) }}
                  </div>
                </v-timeline-item>
              </v-timeline>
              <div v-else class="text-center text-grey-darken-1 py-8">
                Aucune activité récente
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="4" rounded="xl">
            <v-card-title class="pa-6">
              <v-icon color="primary" class="mr-2">mdi-chart-pie</v-icon>
              Statistiques Articles
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-6">
              <div class="mb-4">
                <div class="d-flex justify-space-between mb-2">
                  <span>Publiés</span>
                  <span class="font-weight-bold">{{ stats.articles?.published || 0 }}</span>
                </div>
                <v-progress-linear
                  :model-value="getPercentage(stats.articles?.published, stats.articles?.total)"
                  color="success"
                  height="8"
                  rounded
                ></v-progress-linear>
              </div>
              <div>
                <div class="d-flex justify-space-between mb-2">
                  <span>Brouillons</span>
                  <span class="font-weight-bold">{{ stats.articles?.draft || 0 }}</span>
                </div>
                <v-progress-linear
                  :model-value="getPercentage(stats.articles?.draft, stats.articles?.total)"
                  color="warning"
                  height="8"
                  rounded
                ></v-progress-linear>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../../services/api.js'

const loading = ref(true)
const stats = ref({
  articles: {},
  contacts: {},
  jobApplications: {},
  recentActivity: []
})

const getActivityColor = (type) => {
  const colors = {
    contact: 'primary',
    article: 'success',
    application: 'warning',
    testimonial: 'info'
  }
  return colors[type] || 'grey'
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getPercentage = (value, total) => {
  if (!total || total === 0) return 0
  return (value / total) * 100
}

onMounted(async () => {
  try {
    stats.value = await api.getDashboardStats()
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.stat-card {
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-4px);
}
</style>
