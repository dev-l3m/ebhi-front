<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Candidatures</h1>
    </div>

    <!-- Filters -->
    <v-card class="mb-6" elevation="2" rounded="xl">
      <v-card-text class="pa-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="filters.search"
              label="Rechercher"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              density="compact"
              clearable
              @update:model-value="loadApplications"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="filters.status"
              label="Statut"
              :items="statusOptions"
              variant="outlined"
              density="compact"
              clearable
              @update:model-value="loadApplications"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="filters.categoryId"
              label="Catégorie"
              :items="categories"
              item-title="title"
              item-value="id"
              variant="outlined"
              density="compact"
              clearable
              @update:model-value="loadApplications"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card elevation="4" rounded="xl">
      <v-card-title class="pa-6">
        <v-icon color="primary" class="mr-2">mdi-file-document</v-icon>
        Liste des candidatures ({{ pagination.total }})
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="applications"
        :loading="loading"
        :items-per-page="pagination.limit"
        :page="pagination.page"
        @update:page="handlePageChange"
        class="elevation-0"
      >
        <template v-slot:item.name="{ item }">
          {{ item.firstName }} {{ item.lastName }}
        </template>
        <template v-slot:item.category="{ item }">
          {{ item.category?.title || 'N/A' }}
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" variant="flat" size="small">
            {{ getStatusLabel(item.status) }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon size="small" variant="text" @click="viewApplication(item)">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon size="small" variant="text" v-bind="props">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="status in statusOptions"
                :key="status.value"
                @click="updateStatus(item.id, status.value)"
              >
                <v-list-item-title>{{ status.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn icon size="small" variant="text" color="error" @click="confirmDelete(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <v-divider></v-divider>
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-pagination
          v-model="pagination.page"
          :length="pagination.totalPages"
          :total-visible="7"
          @update:model-value="handlePageChange"
        ></v-pagination>
      </v-card-actions>
    </v-card>

    <!-- View Dialog -->
    <v-dialog v-model="viewDialog" max-width="800" scrollable>
      <v-card rounded="xl" v-if="selectedApplication">
        <v-card-title class="pa-6">
          Candidature de {{ selectedApplication.firstName }} {{ selectedApplication.lastName }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-6">
          <v-row>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Email</div>
              <div class="text-body-1 mb-4">{{ selectedApplication.email }}</div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Téléphone</div>
              <div class="text-body-1 mb-4">{{ selectedApplication.phone }}</div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Catégorie</div>
              <div class="text-body-1 mb-4">{{ selectedApplication.category?.title || 'N/A' }}</div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Statut</div>
              <v-chip :color="getStatusColor(selectedApplication.status)" variant="flat" size="small">
                {{ getStatusLabel(selectedApplication.status) }}
              </v-chip>
            </v-col>
            <v-col cols="12">
              <div class="text-body-2 text-grey-darken-1 mb-1">Lettre de motivation</div>
              <div class="text-body-1 mb-4">{{ selectedApplication.coverLetter || 'Aucune' }}</div>
            </v-col>
            <v-col cols="12" v-if="selectedApplication.resume">
              <v-btn color="primary" :href="selectedApplication.resume" target="_blank" prepend-icon="mdi-download">
                Télécharger le CV
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="viewDialog = false" rounded="lg">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../../services/api.js'

const loading = ref(false)
const viewDialog = ref(false)
const applications = ref([])
const selectedApplication = ref(null)
const categories = ref([])

const filters = ref({
  search: '',
  status: null,
  categoryId: null
})

const pagination = ref({
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0
})

const headers = [
  { title: 'Nom', key: 'name', sortable: true },
  { title: 'Email', key: 'email', sortable: true },
  { title: 'Catégorie', key: 'category', sortable: true },
  { title: 'Statut', key: 'status', sortable: true },
  { title: 'Date', key: 'createdAt', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end' }
]

const statusOptions = [
  { title: 'En attente', value: 'pending' },
  { title: 'Consulté', value: 'reviewed' },
  { title: 'Accepté', value: 'accepted' },
  { title: 'Rejeté', value: 'rejected' }
]

const getStatusColor = (status) => {
  const colors = {
    pending: 'warning',
    reviewed: 'info',
    accepted: 'success',
    rejected: 'error'
  }
  return colors[status] || 'grey'
}

const getStatusLabel = (status) => {
  const option = statusOptions.find(s => s.value === status)
  return option?.title || status
}

const loadApplications = async () => {
  loading.value = true
  try {
    const params = {
      page: pagination.value.page,
      limit: pagination.value.limit
    }
    if (filters.value.search) params.search = filters.value.search
    if (filters.value.status) params.status = filters.value.status
    if (filters.value.categoryId) params.categoryId = filters.value.categoryId

    const response = await api.getJobApplications(params)
    applications.value = response.data || []
    pagination.value = {
      ...pagination.value,
      total: response.meta?.total || 0,
      totalPages: response.meta?.totalPages || 0
    }
  } catch (error) {
    console.error('Error loading applications:', error)
  } finally {
    loading.value = false
  }
}

const loadCategories = async () => {
  try {
    const response = await api.getJobCategories()
    categories.value = response.data || []
  } catch (error) {
    console.error('Error loading categories:', error)
  }
}

const handlePageChange = (page) => {
  pagination.value.page = page
  loadApplications()
}

const viewApplication = async (item) => {
  try {
    selectedApplication.value = await api.getJobApplication(item.id)
    viewDialog.value = true
  } catch (error) {
    console.error('Error loading application:', error)
  }
}

const updateStatus = async (id, status) => {
  try {
    await api.updateJobApplicationStatus(id, status)
    loadApplications()
  } catch (error) {
    console.error('Error updating status:', error)
  }
}

const confirmDelete = async (item) => {
  if (confirm(`Supprimer la candidature de ${item.firstName} ${item.lastName} ?`)) {
    try {
      await api.deleteJobApplication(item.id)
      loadApplications()
    } catch (error) {
      console.error('Error deleting application:', error)
    }
  }
}

onMounted(() => {
  loadApplications()
  loadCategories()
})
</script>
