import { ref } from 'vue'
import api from '../../services/api.js'

export function useJobApplications() {
  const applications = ref([])
  const loading = ref(false)
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })

  const loadApplications = async (params = {}) => {
    loading.value = true
    try {
      const queryParams = {
        page: pagination.value.page,
        limit: pagination.value.limit,
        ...params
      }
      const response = await api.getJobApplications(queryParams)
      applications.value = response.data || []
      pagination.value = {
        ...pagination.value,
        total: response.meta?.total || 0,
        totalPages: response.meta?.totalPages || 0
      }
      return response
    } catch (error) {
      console.error('Error loading applications:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const getApplication = async (id) => {
    try {
      return await api.getJobApplication(id)
    } catch (error) {
      console.error('Error getting application:', error)
      throw error
    }
  }

  const updateStatus = async (id, status) => {
    try {
      const response = await api.updateJobApplicationStatus(id, status)
      await loadApplications()
      return response
    } catch (error) {
      console.error('Error updating status:', error)
      throw error
    }
  }

  const deleteApplication = async (id) => {
    try {
      const response = await api.deleteJobApplication(id)
      await loadApplications()
      return response
    } catch (error) {
      console.error('Error deleting application:', error)
      throw error
    }
  }

  const setPage = (page) => {
    pagination.value.page = page
  }

  return {
    applications,
    loading,
    pagination,
    loadApplications,
    getApplication,
    updateStatus,
    deleteApplication,
    setPage
  }
}
