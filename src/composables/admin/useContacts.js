import { ref } from 'vue'
import api from '../../services/api.js'

export function useContacts() {
  const contacts = ref([])
  const loading = ref(false)
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })

  const loadContacts = async (params = {}) => {
    loading.value = true
    try {
      const queryParams = {
        page: pagination.value.page,
        limit: pagination.value.limit,
        ...params
      }
      const response = await api.getContacts(queryParams)
      contacts.value = response.data || []
      pagination.value = {
        ...pagination.value,
        total: response.meta?.total || 0,
        totalPages: response.meta?.totalPages || 0
      }
      return response
    } catch (error) {
      console.error('Error loading contacts:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const getContact = async id => {
    try {
      return await api.getContact(id)
    } catch (error) {
      console.error('Error getting contact:', error)
      throw error
    }
  }

  const updateStatus = async (id, status) => {
    try {
      const response = await api.updateContactStatus(id, status)
      await loadContacts()
      return response
    } catch (error) {
      console.error('Error updating status:', error)
      throw error
    }
  }

  const deleteContact = async id => {
    try {
      const response = await api.deleteContact(id)
      await loadContacts()
      return response
    } catch (error) {
      console.error('Error deleting contact:', error)
      throw error
    }
  }

  const setPage = page => {
    pagination.value.page = page
  }

  return {
    contacts,
    loading,
    pagination,
    loadContacts,
    getContact,
    updateStatus,
    deleteContact,
    setPage
  }
}
