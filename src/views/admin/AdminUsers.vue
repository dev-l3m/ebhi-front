<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold">Gestion des Utilisateurs</h1>
      <v-btn color="primary" prepend-icon="mdi-plus" @click="openCreateDialog" rounded="lg">
        Nouvel utilisateur
      </v-btn>
    </div>

    <v-card elevation="4" rounded="xl">
      <v-card-title class="pa-6">
        <v-icon color="primary" class="mr-2">mdi-account-group</v-icon>
        Liste des utilisateurs ({{ users.length }})
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table :headers="headers" :items="users" :loading="loading" class="elevation-0">
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
          editing ? "Modifier l'utilisateur" : 'Nouvel utilisateur'
        }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-6">
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="formData.email"
              label="Email *"
              type="email"
              :rules="emailRules"
              variant="outlined"
              class="mb-4"
            ></v-text-field>
            <v-text-field
              v-model="formData.name"
              label="Nom *"
              variant="outlined"
              class="mb-4"
            ></v-text-field>
            <v-text-field
              v-model="formData.password"
              label="Mot de passe *"
              type="password"
              :rules="passwordRules"
              variant="outlined"
              class="mb-4"
              :hint="editing ? 'Laisser vide pour ne pas modifier' : ''"
            ></v-text-field>
            <v-select
              v-model="formData.role"
              label="Rôle *"
              :items="roleOptions"
              variant="outlined"
              class="mb-4"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false" rounded="lg">Annuler</v-btn>
          <v-btn
            color="primary"
            @click="saveUser"
            :loading="saving"
            :disabled="!valid"
            rounded="lg"
          >
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
const users = ref([])

const formData = ref({
  email: '',
  name: '',
  password: '',
  role: 'admin'
})

const headers = [
  { title: 'Email', key: 'email', sortable: true },
  { title: 'Nom', key: 'name', sortable: true },
  { title: 'Rôle', key: 'role', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end' }
]

const roleOptions = [
  { title: 'Administrateur', value: 'admin' },
  { title: 'Éditeur', value: 'editor' }
]

const emailRules = [
  v => !!v || "L'email est requis",
  v => /.+@.+\..+/.test(v) || "L'email doit être valide"
]

const passwordRules = [
  v => !editing.value || !!v || 'Le mot de passe est requis pour la création',
  v => !v || (v && v.length >= 6) || 'Le mot de passe doit contenir au moins 6 caractères'
]

const loadUsers = async () => {
  loading.value = true
  try {
    const response = await api.getUsers()
    users.value = response.data || []
  } catch (error) {
    console.error('Error loading users:', error)
  } finally {
    loading.value = false
  }
}

const openCreateDialog = () => {
  editing.value = false
  formData.value = { email: '', name: '', password: '', role: 'admin' }
  dialog.value = true
}

const openEditDialog = item => {
  editing.value = true
  formData.value = { ...item, password: '' }
  dialog.value = true
}

const saveUser = async () => {
  saving.value = true
  try {
    const data = { ...formData.value }
    if (editing.value && !data.password) {
      delete data.password
    }
    if (editing.value) {
      await api.updateUser(formData.value.id, data)
    } else {
      await api.createUser(data)
    }
    dialog.value = false
    loadUsers()
  } catch (error) {
    console.error('Error saving user:', error)
  } finally {
    saving.value = false
  }
}

const confirmDelete = async item => {
  if (confirm(`Supprimer l'utilisateur "${item.email}" ?`)) {
    try {
      await api.deleteUser(item.id)
      loadUsers()
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }
}

onMounted(() => {
  loadUsers()
})
</script>
