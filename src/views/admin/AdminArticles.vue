<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Articles</h1>
      <v-btn color="primary" prepend-icon="mdi-plus" @click="openCreateDialog" rounded="lg">
        Nouvel article
      </v-btn>
    </div>

    <!-- Filters -->
    <FilterBar>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="filters.search"
            label="Rechercher"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            density="compact"
            clearable
            @update:model-value="handleFilterChange"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="filters.category"
            label="Catégorie"
            :items="categories"
            variant="outlined"
            density="compact"
            clearable
            @update:model-value="handleFilterChange"
          ></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="filters.published"
            label="Statut"
            :items="statusOptions"
            variant="outlined"
            density="compact"
            clearable
            @update:model-value="handleFilterChange"
          ></v-select>
        </v-col>
      </v-row>
    </FilterBar>

    <!-- Articles Table -->
    <DataTable
      title="Liste des articles"
      icon="mdi-newspaper"
      :headers="headers"
      :items="articles"
      :loading="loading"
      :total="pagination.total"
      :pagination="pagination"
      @page-change="handlePageChange"
    >
      <template v-slot:item.image="{ item }">
        <v-avatar size="60" rounded>
          <v-img :src="item.image" :alt="item.title"></v-img>
        </v-avatar>
      </template>
      <template v-slot:item.title="{ item }">
        <div class="text-body-2 font-weight-medium">{{ item.title }}</div>
      </template>
      <template v-slot:item.date="{ item }">
        <div class="text-body-2">{{ formatDate(item.date) }}</div>
      </template>
      <template v-slot:item.published="{ item }">
        <v-chip :color="item.published ? 'success' : 'warning'" variant="flat" size="small">
          {{ item.published ? 'Publié' : 'Brouillon' }}
        </v-chip>
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

    <!-- Create/Edit Dialog -->
    <FormDialog
      v-model="dialog"
      :editing="editing"
      :saving="saving"
      create-title="Nouvel article"
      edit-title="Modifier l'article"
      :initial-data="formData"
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
          v-model="fd.excerpt"
          label="Extrait *"
          :rules="[v => !!v || 'L\'extrait est requis']"
          variant="outlined"
          rows="3"
          class="mb-4"
        ></v-textarea>
        <v-textarea
          v-model="fd.fullContent"
          label="Contenu complet *"
          :rules="[v => !!v || 'Le contenu est requis']"
          variant="outlined"
          rows="8"
          class="mb-4"
        ></v-textarea>
        <v-text-field
          v-model="fd.slug"
          label="Slug *"
          :rules="[v => !!v || 'Le slug est requis']"
          variant="outlined"
          hint="URL-friendly version du titre"
          class="mb-4"
        ></v-text-field>
        <v-row>
          <v-col cols="12" md="6">
            <v-select
              v-model="fd.category"
              label="Catégorie *"
              :items="categories"
              :rules="[v => !!v || 'La catégorie est requise']"
              variant="outlined"
              class="mb-4"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="fd.categoryColor"
              label="Couleur de catégorie *"
              :items="colorOptions"
              :rules="[v => !!v || 'La couleur est requise']"
              variant="outlined"
              class="mb-4"
            ></v-select>
          </v-col>
        </v-row>
        <v-text-field
          v-model="fd.image"
          label="URL de l'image *"
          :rules="[v => !!v || 'L\'URL de l\'image est requise']"
          variant="outlined"
          class="mb-4"
        ></v-text-field>
        <v-text-field
          v-model="fd.date"
          label="Date *"
          type="date"
          :rules="[v => !!v || 'La date est requise']"
          variant="outlined"
          class="mb-4"
        ></v-text-field>
        <v-switch v-model="fd.published" label="Publié" color="success" class="mb-4"></v-switch>
      </template>
    </FormDialog>

    <!-- Delete Confirmation Dialog -->
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
import { useArticles } from '../../composables/admin/useArticles.js'
import DataTable from '../../components/admin/DataTable.vue'
import FilterBar from '../../components/admin/FilterBar.vue'
import FormDialog from '../../components/admin/FormDialog.vue'
import DeleteDialog from '../../components/admin/DeleteDialog.vue'

const {
  articles,
  loading,
  saving,
  deleting,
  pagination,
  loadArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  setPage
} = useArticles()

const dialog = ref(false)
const deleteDialog = ref(false)
const editing = ref(false)
const itemToDelete = ref(null)

const filters = ref({
  search: '',
  category: null,
  published: null
})

const formData = ref({
  title: '',
  excerpt: '',
  fullContent: '',
  slug: '',
  category: '',
  categoryColor: 'primary',
  image: '',
  date: new Date().toISOString().split('T')[0],
  published: false
})

const headers = [
  { title: 'Image', key: 'image', sortable: false },
  { title: 'Titre', key: 'title', sortable: true },
  { title: 'Catégorie', key: 'category', sortable: true },
  { title: 'Date', key: 'date', sortable: true },
  { title: 'Statut', key: 'published', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end' }
]

const categories = ['Externalisation', 'Recrutement', 'Technologie', 'Ressources Humaines']
const colorOptions = [
  { title: 'Primary', value: 'primary' },
  { title: 'Secondary', value: 'secondary' },
  { title: 'Success', value: 'success' },
  { title: 'Info', value: 'info' },
  { title: 'Warning', value: 'warning' },
  { title: 'Error', value: 'error' }
]

const statusOptions = [
  { title: 'Publié', value: true },
  { title: 'Brouillon', value: false }
]

const formatDate = dateString => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const handleFilterChange = () => {
  loadArticles(filters.value)
}

const handlePageChange = page => {
  setPage(page)
  loadArticles(filters.value)
}

const openCreateDialog = () => {
  editing.value = false
  formData.value = {
    title: '',
    excerpt: '',
    fullContent: '',
    slug: '',
    category: '',
    categoryColor: 'primary',
    image: '',
    date: new Date().toISOString().split('T')[0],
    published: false
  }
  dialog.value = true
}

const openEditDialog = item => {
  editing.value = true
  formData.value = {
    ...item,
    date: item.date ? item.date.split('T')[0] : new Date().toISOString().split('T')[0]
  }
  dialog.value = true
}

const handleSave = async data => {
  try {
    if (editing.value) {
      await updateArticle(formData.value.id, data)
    } else {
      await createArticle(data)
    }
    dialog.value = false
  } catch (error) {
    console.error('Error saving article:', error)
  }
}

const handleCancel = () => {
  dialog.value = false
}

const confirmDelete = item => {
  itemToDelete.value = item
  deleteDialog.value = true
}

const handleDelete = async () => {
  if (!itemToDelete.value) return
  try {
    await deleteArticle(itemToDelete.value.id)
    deleteDialog.value = false
    itemToDelete.value = null
  } catch (error) {
    console.error('Error deleting article:', error)
  }
}

onMounted(() => {
  loadArticles()
})
</script>
