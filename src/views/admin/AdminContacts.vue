<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Contacts</h1>
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
              @update:model-value="loadContacts"
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
              @update:model-value="loadContacts"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card elevation="4" rounded="xl">
      <v-card-title class="pa-6">
        <v-icon color="primary" class="mr-2">mdi-email</v-icon>
        Liste des contacts ({{ pagination.total }})
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="contacts"
        :loading="loading"
        :items-per-page="pagination.limit"
        :page="pagination.page"
        @update:page="handlePageChange"
        class="elevation-0"
      >
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" variant="flat" size="small">
            {{ getStatusLabel(item.status) }}
          </v-chip>
        </template>
        <template v-slot:item.createdAt="{ item }">
          {{ formatDate(item.createdAt) }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon size="small" variant="text" @click="viewContact(item)">
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
    <v-dialog v-model="viewDialog" max-width="700" scrollable>
      <v-card rounded="xl" v-if="selectedContact">
        <v-card-title class="pa-6"> Contact de {{ selectedContact.name }} </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-6">
          <v-row>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Nom</div>
              <div class="text-body-1 mb-4">{{ selectedContact.name }}</div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Email</div>
              <div class="text-body-1 mb-4">{{ selectedContact.email }}</div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Téléphone</div>
              <div class="text-body-1 mb-4">{{ selectedContact.phone || 'N/A' }}</div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-body-2 text-grey-darken-1 mb-1">Entreprise</div>
              <div class="text-body-1 mb-4">{{ selectedContact.company || 'N/A' }}</div>
            </v-col>
            <v-col cols="12">
              <div class="text-body-2 text-grey-darken-1 mb-1">Sujet</div>
              <div class="text-body-1 mb-4">{{ selectedContact.subject }}</div>
            </v-col>
            <v-col cols="12">
              <div class="text-body-2 text-grey-darken-1 mb-1">Message</div>
              <div class="text-body-1 mb-4">{{ selectedContact.message }}</div>
            </v-col>
            <v-col cols="12">
              <div class="text-body-2 text-grey-darken-1 mb-1">Statut</div>
              <v-chip :color="getStatusColor(selectedContact.status)" variant="flat" size="small">
                {{ getStatusLabel(selectedContact.status) }}
              </v-chip>
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

    <!-- Delete Confirmation Dialog -->
    <DeleteDialog
      v-model="deleteDialog"
      :item-name="itemToDelete?.name ? `le contact de ${itemToDelete.name}` : ''"
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
const viewDialog = ref(false)
const deleteDialog = ref(false)
const deleting = ref(false)
const contacts = ref([])
const selectedContact = ref(null)
const itemToDelete = ref(null)
const formatDate = dateString => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const filters = ref({
  search: '',
  status: null
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
  { title: 'Sujet', key: 'subject', sortable: true },
  { title: 'Statut', key: 'status', sortable: true },
  { title: 'Date', key: 'createdAt', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end' }
]

const statusOptions = [
  { title: 'Nouveau', value: 'new' },
  { title: 'Lu', value: 'read' },
  { title: 'Répondu', value: 'replied' },
  { title: 'Archivé', value: 'archived' }
]

const getStatusColor = status => {
  const colors = {
    new: 'primary',
    read: 'info',
    replied: 'success',
    archived: 'grey'
  }
  return colors[status] || 'grey'
}

const getStatusLabel = status => {
  const option = statusOptions.find(s => s.value === status)
  return option?.title || status
}

const loadContacts = async () => {
  loading.value = true
  try {
    const params = {
      page: pagination.value.page,
      limit: pagination.value.limit
    }
    if (filters.value.search) params.search = filters.value.search
    if (filters.value.status) params.status = filters.value.status

    const response = await api.getContacts(params)
    contacts.value = response.data || []
    pagination.value = {
      ...pagination.value,
      total: response.meta?.total || 0,
      totalPages: response.meta?.totalPages || 0
    }
  } catch (error) {
    console.error('Error loading contacts:', error)
  } finally {
    loading.value = false
  }
}

const handlePageChange = page => {
  pagination.value.page = page
  loadContacts()
}

const viewContact = async item => {
  try {
    selectedContact.value = await api.getContact(item.id)
    viewDialog.value = true
  } catch (error) {
    console.error('Error loading contact:', error)
  }
}

const updateStatus = async (id, status) => {
  try {
    await api.updateContactStatus(id, status)
    loadContacts()
  } catch (error) {
    console.error('Error updating status:', error)
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
    await api.deleteContact(itemToDelete.value.id)
    deleteDialog.value = false
    itemToDelete.value = null
    loadContacts()
  } catch (error) {
    console.error('Error deleting contact:', error)
  } finally {
    deleting.value = false
  }
}

onMounted(() => {
  loadContacts()
})
</script>
