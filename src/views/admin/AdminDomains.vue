<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Domaines</h1>
      <v-btn color="primary" prepend-icon="mdi-plus" @click="openCreateDialog" rounded="lg">
        Nouveau domaine
      </v-btn>
    </div>

    <v-card elevation="4" rounded="xl">
      <v-card-title class="pa-6">
        <v-icon color="primary" class="mr-2">mdi-domain</v-icon>
        Liste des domaines ({{ domains.length }})
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table :headers="headers" :items="domains" :loading="loading" class="elevation-0">
        <template v-slot:item.icon="{ item }">
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
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
    <v-dialog v-model="dialog" max-width="600" persistent>
      <v-card rounded="xl">
        <v-card-title class="pa-6">{{
          editing ? 'Modifier le domaine' : 'Nouveau domaine'
        }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-6">
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="formData.name"
              label="Nom *"
              variant="outlined"
              class="mb-4"
            ></v-text-field>
            <v-text-field
              v-model="formData.icon"
              label="Icône (MDI) *"
              variant="outlined"
              class="mb-4"
            ></v-text-field>
            <v-select
              v-model="formData.color"
              label="Couleur *"
              :items="colorOptions"
              variant="outlined"
              class="mb-4"
            ></v-select>
            <v-text-field
              v-model.number="formData.order"
              label="Ordre"
              type="number"
              variant="outlined"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false" rounded="lg">Annuler</v-btn>
          <v-btn
            color="primary"
            @click="saveDomain"
            :loading="saving"
            :disabled="!valid"
            rounded="lg"
          >
            {{ editing ? 'Modifier' : 'Créer' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <DeleteDialog
      v-model="deleteDialog"
      :item-name="itemToDelete?.name"
      :deleting="deleting"
      @confirm="handleDelete"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../../services/api.js'
import DeleteDialog from '../../components/admin/DeleteDialog.vue'

const loading = ref(false)
const saving = ref(false)
const deleting = ref(false)
const dialog = ref(false)
const deleteDialog = ref(false)
const valid = ref(false)
const editing = ref(false)
const domains = ref([])
const itemToDelete = ref(null)

const formData = ref({
  name: '',
  icon: '',
  color: 'primary',
  order: 0
})

const headers = [
  { title: 'Icône', key: 'icon', sortable: false },
  { title: 'Nom', key: 'name', sortable: true },
  { title: 'Couleur', key: 'color', sortable: true },
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

const loadDomains = async () => {
  loading.value = true
  try {
    const response = await api.getDomains()
    domains.value = response.data || []
  } catch (error) {
    console.error('Error loading domains:', error)
  } finally {
    loading.value = false
  }
}

const openCreateDialog = () => {
  editing.value = false
  formData.value = { name: '', icon: '', color: 'primary', order: 0 }
  dialog.value = true
}

const openEditDialog = item => {
  editing.value = true
  formData.value = { ...item }
  dialog.value = true
}

const saveDomain = async () => {
  saving.value = true
  try {
    if (editing.value) {
      await api.updateDomain(formData.value.id, formData.value)
    } else {
      await api.createDomain(formData.value)
    }
    dialog.value = false
    loadDomains()
  } catch (error) {
    console.error('Error saving domain:', error)
  } finally {
    saving.value = false
  }
}

const confirmDelete = item => {
  itemToDelete.value = item
  deleteDialog.value = true
}

const handleDelete = async () => {
  if (!itemToDelete.value) return
  deleting.value = true
  try {
    await api.deleteDomain(itemToDelete.value.id)
    deleteDialog.value = false
    itemToDelete.value = null
    loadDomains()
  } catch (error) {
    console.error('Error deleting domain:', error)
  } finally {
    deleting.value = false
  }
}

onMounted(() => {
  loadDomains()
})
</script>
