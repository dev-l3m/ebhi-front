<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Témoignages</h1>
      <v-btn color="primary" prepend-icon="mdi-plus" @click="openCreateDialog" rounded="lg">
        Nouveau témoignage
      </v-btn>
    </div>

    <v-card elevation="4" rounded="xl">
      <v-card-title class="pa-6">
        <v-icon color="primary" class="mr-2">mdi-format-quote-open</v-icon>
        Liste des témoignages ({{ testimonials.length }})
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table :headers="headers" :items="testimonials" :loading="loading" class="elevation-0">
        <template v-slot:item.name="{ item }">
          <div class="d-flex align-center">
            <v-avatar :color="item.color" size="40" class="mr-3">
              <span class="text-white font-weight-bold">{{ item.initials }}</span>
            </v-avatar>
            <div>
              <div class="font-weight-medium">{{ item.name }}</div>
              <div class="text-caption text-grey-darken-1">{{ item.role }}</div>
            </div>
          </div>
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
        <v-card-title class="pa-6">{{ editing ? 'Modifier le témoignage' : 'Nouveau témoignage' }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-6">
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="formData.name" label="Nom *" variant="outlined" class="mb-4"></v-text-field>
            <v-text-field v-model="formData.role" label="Rôle/Entreprise *" variant="outlined" class="mb-4"></v-text-field>
            <v-textarea v-model="formData.text" label="Témoignage *" variant="outlined" rows="5" class="mb-4"></v-textarea>
            <v-text-field v-model="formData.initials" label="Initiales *" variant="outlined" maxlength="2" class="mb-4"></v-text-field>
            <v-select v-model="formData.color" label="Couleur *" :items="colorOptions" variant="outlined" class="mb-4"></v-select>
            <v-text-field v-model.number="formData.order" label="Ordre" type="number" variant="outlined"></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false" rounded="lg">Annuler</v-btn>
          <v-btn color="primary" @click="saveTestimonial" :loading="saving" :disabled="!valid" rounded="lg">
            {{ editing ? 'Modifier' : 'Créer' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../../services/api.js'

const loading = ref(false)
const saving = ref(false)
const dialog = ref(false)
const valid = ref(false)
const editing = ref(false)
const testimonials = ref([])

const formData = ref({
  name: '',
  role: '',
  text: '',
  initials: '',
  color: 'primary',
  order: 0
})

const headers = [
  { title: 'Auteur', key: 'name', sortable: true },
  { title: 'Témoignage', key: 'text', sortable: false },
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

const loadTestimonials = async () => {
  loading.value = true
  try {
    const response = await api.getTestimonials()
    testimonials.value = response.data || []
  } catch (error) {
    console.error('Error loading testimonials:', error)
  } finally {
    loading.value = false
  }
}

const openCreateDialog = () => {
  editing.value = false
  formData.value = { name: '', role: '', text: '', initials: '', color: 'primary', order: 0 }
  dialog.value = true
}

const openEditDialog = (item) => {
  editing.value = true
  formData.value = { ...item }
  dialog.value = true
}

const saveTestimonial = async () => {
  saving.value = true
  try {
    if (editing.value) {
      await api.updateTestimonial(formData.value.id, formData.value)
    } else {
      await api.createTestimonial(formData.value)
    }
    dialog.value = false
    loadTestimonials()
  } catch (error) {
    console.error('Error saving testimonial:', error)
  } finally {
    saving.value = false
  }
}

const confirmDelete = async (item) => {
  if (confirm(`Supprimer le témoignage de ${item.name} ?`)) {
    try {
      await api.deleteTestimonial(item.id)
      loadTestimonials()
    } catch (error) {
      console.error('Error deleting testimonial:', error)
    }
  }
}

onMounted(() => {
  loadTestimonials()
})
</script>
