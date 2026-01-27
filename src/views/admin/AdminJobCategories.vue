<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Catégories de Postes</h1>
      <v-btn color="primary" prepend-icon="mdi-plus" @click="openCreateDialog" rounded="lg">
        Nouvelle catégorie
      </v-btn>
    </div>

    <v-card elevation="4" rounded="xl">
      <v-card-title class="pa-6">
        <v-icon color="primary" class="mr-2">mdi-briefcase-variant</v-icon>
        Liste des catégories ({{ categories.length }})
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table :headers="headers" :items="categories" :loading="loading" class="elevation-0">
        <template v-slot:item.icon="{ item }">
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </template>
        <template v-slot:item.jobs="{ item }">
          <v-chip size="small" variant="flat">{{ item.jobs?.length || 0 }} postes</v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon size="small" variant="text" @click="openEditDialog(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon size="small" variant="text" color="error" @click="confirmDelete(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Create/Edit Dialog -->
    <v-dialog v-model="dialog" max-width="700" scrollable persistent>
      <v-card rounded="xl">
        <v-card-title class="pa-6">{{ editing ? 'Modifier la catégorie' : 'Nouvelle catégorie' }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-6">
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="formData.title" label="Titre *" variant="outlined" class="mb-4"></v-text-field>
            <v-text-field v-model="formData.icon" label="Icône (MDI) *" variant="outlined" class="mb-4"></v-text-field>
            <v-select v-model="formData.color" label="Couleur *" :items="colorOptions" variant="outlined" class="mb-4"></v-select>
            <v-textarea
              v-model="jobsText"
              label="Postes (un par ligne) *"
              variant="outlined"
              rows="5"
              hint="Entrez un poste par ligne"
              class="mb-4"
            ></v-textarea>
            <v-text-field v-model.number="formData.order" label="Ordre" type="number" variant="outlined"></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false" rounded="lg">Annuler</v-btn>
          <v-btn color="primary" @click="saveCategory" :loading="saving" :disabled="!valid" rounded="lg">
            {{ editing ? 'Modifier' : 'Créer' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import api from '../../services/api.js'

const loading = ref(false)
const saving = ref(false)
const dialog = ref(false)
const valid = ref(false)
const editing = ref(false)
const categories = ref([])

const formData = ref({
  title: '',
  icon: '',
  color: 'primary',
  jobs: [],
  order: 0
})

const jobsText = computed({
  get: () => formData.value.jobs?.join('\n') || '',
  set: (value) => {
    formData.value.jobs = value.split('\n').filter(job => job.trim())
  }
})

const headers = [
  { title: 'Icône', key: 'icon', sortable: false },
  { title: 'Titre', key: 'title', sortable: true },
  { title: 'Postes', key: 'jobs', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end' }
]

const colorOptions = [
  { title: 'Primary', value: 'primary' },
  { title: 'Secondary', value: 'secondary' },
  { title: 'Success', value: 'success' },
  { title: 'Info', value: 'info' },
  { title: 'Warning', value: 'warning' },
  { title: 'Error', value: 'error' }
]

const loadCategories = async () => {
  loading.value = true
  try {
    const response = await api.getJobCategories()
    categories.value = response.data || []
  } catch (error) {
    console.error('Error loading categories:', error)
  } finally {
    loading.value = false
  }
}

const openCreateDialog = () => {
  editing.value = false
  formData.value = { title: '', icon: '', color: 'primary', jobs: [], order: 0 }
  dialog.value = true
}

const openEditDialog = (item) => {
  editing.value = true
  formData.value = { ...item }
  dialog.value = true
}

const saveCategory = async () => {
  saving.value = true
  try {
    if (editing.value) {
      await api.updateJobCategory(formData.value.id, formData.value)
    } else {
      await api.createJobCategory(formData.value)
    }
    dialog.value = false
    loadCategories()
  } catch (error) {
    console.error('Error saving category:', error)
  } finally {
    saving.value = false
  }
}

const confirmDelete = async (item) => {
  if (confirm(`Supprimer la catégorie "${item.title}" ?`)) {
    try {
      await api.deleteJobCategory(item.id)
      loadCategories()
    } catch (error) {
      console.error('Error deleting category:', error)
    }
  }
}

onMounted(() => {
  loadCategories()
})
</script>
