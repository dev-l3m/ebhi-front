<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Services</h1>
      <v-btn
        color="primary"
        prepend-icon="mdi-plus"
        @click="openCreateDialog"
        rounded="lg"
      >
        Nouveau service
      </v-btn>
    </div>

    <DataTable
      title="Liste des services"
      icon="mdi-briefcase"
      :headers="headers"
      :items="services"
      :loading="loading"
      :total="services.length"
      :show-pagination="false"
    >
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
    </DataTable>

    <FormDialog
      v-model="dialog"
      :editing="editing"
      :saving="saving"
      create-title="Nouveau service"
      edit-title="Modifier le service"
      :initial-data="formData"
      max-width="800"
      @save="handleSave"
      @cancel="handleCancel"
    >
      <template v-slot:form="{ formData: fd }">
        <v-text-field
          v-model="fd.title"
          label="Titre *"
          :rules="[v => !!v || 'Le titre est requis']"
          variant="outlined"
          class="mb-4"
        ></v-text-field>
        <v-textarea
          v-model="fd.description"
          label="Description *"
          :rules="[v => !!v || 'La description est requise']"
          variant="outlined"
          rows="3"
          class="mb-4"
        ></v-textarea>
        <v-textarea
          v-model="fd.detailedDescription"
          label="Description détaillée *"
          :rules="[v => !!v || 'La description détaillée est requise']"
          variant="outlined"
          rows="5"
          class="mb-4"
        ></v-textarea>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="fd.icon"
              label="Icône (MDI) *"
              :rules="[v => !!v || 'L\'icône est requise']"
              variant="outlined"
              hint="Ex: mdi-account-group"
              class="mb-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="fd.color"
              label="Couleur *"
              :items="colorOptions"
              :rules="[v => !!v || 'La couleur est requise']"
              variant="outlined"
              class="mb-4"
            ></v-select>
          </v-col>
        </v-row>
        <v-text-field
          v-model.number="fd.order"
          label="Ordre d'affichage"
          type="number"
          variant="outlined"
        ></v-text-field>
      </template>
    </FormDialog>

    <DeleteDialog
      v-model="deleteDialog"
      :item-name="itemToDelete?.title"
      :deleting="deleting"
      @confirm="handleDelete"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useServices } from '../../composables/admin/useServices.js'
import DataTable from '../../components/admin/DataTable.vue'
import FormDialog from '../../components/admin/FormDialog.vue'
import DeleteDialog from '../../components/admin/DeleteDialog.vue'

const {
  services,
  loading,
  saving,
  deleting,
  loadServices,
  createService,
  updateService,
  deleteService
} = useServices()

const dialog = ref(false)
const deleteDialog = ref(false)
const editing = ref(false)
const itemToDelete = ref(null)

const formData = ref({
  title: '',
  description: '',
  detailedDescription: '',
  icon: '',
  color: 'primary',
  features: [],
  benefits: [],
  order: 0
})

const headers = [
  { title: 'Icône', key: 'icon', sortable: false },
  { title: 'Titre', key: 'title', sortable: true },
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

const openCreateDialog = () => {
  editing.value = false
  formData.value = {
    title: '',
    description: '',
    detailedDescription: '',
    icon: '',
    color: 'primary',
    features: [],
    benefits: [],
    order: 0
  }
  dialog.value = true
}

const openEditDialog = (item) => {
  editing.value = true
  formData.value = { ...item }
  dialog.value = true
}

const handleSave = async (data) => {
  try {
    if (editing.value) {
      await updateService(formData.value.id, data)
    } else {
      await createService(data)
    }
    dialog.value = false
  } catch (error) {
    console.error('Error saving service:', error)
  }
}

const handleCancel = () => {
  dialog.value = false
}

const confirmDelete = (item) => {
  itemToDelete.value = item
  deleteDialog.value = true
}

const handleDelete = async () => {
  if (!itemToDelete.value) return
  try {
    await deleteService(itemToDelete.value.id)
    deleteDialog.value = false
    itemToDelete.value = null
  } catch (error) {
    console.error('Error deleting service:', error)
  }
}

onMounted(() => {
  loadServices()
})
</script>
