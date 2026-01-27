import { ref } from 'vue'
import api from '../../services/api.js'

export function useUsers() {
  const users = ref([])
  const loading = ref(false)
  const saving = ref(false)
  const deleting = ref(false)

  const loadUsers = async () => {
    loading.value = true
    try {
      const response = await api.getUsers()
      users.value = response.data || []
      return response
    } catch (error) {
      console.error('Error loading users:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const createUser = async userData => {
    saving.value = true
    try {
      const response = await api.createUser(userData)
      await loadUsers()
      return response
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const updateUser = async (id, userData) => {
    saving.value = true
    try {
      const response = await api.updateUser(id, userData)
      await loadUsers()
      return response
    } catch (error) {
      console.error('Error updating user:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const deleteUser = async id => {
    deleting.value = true
    try {
      const response = await api.deleteUser(id)
      await loadUsers()
      return response
    } catch (error) {
      console.error('Error deleting user:', error)
      throw error
    } finally {
      deleting.value = false
    }
  }

  return {
    users,
    loading,
    saving,
    deleting,
    loadUsers,
    createUser,
    updateUser,
    deleteUser
  }
}
