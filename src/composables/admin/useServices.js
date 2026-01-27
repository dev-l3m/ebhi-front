import { ref } from 'vue'
import api from '../../services/api.js'

export function useServices() {
  const services = ref([])
  const loading = ref(false)
  const saving = ref(false)
  const deleting = ref(false)

  const loadServices = async () => {
    loading.value = true
    try {
      const response = await api.getServices()
      services.value = response.data || []
      return response
    } catch (error) {
      console.error('Error loading services:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const createService = async (serviceData) => {
    saving.value = true
    try {
      const response = await api.createService(serviceData)
      await loadServices()
      return response
    } catch (error) {
      console.error('Error creating service:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const updateService = async (id, serviceData) => {
    saving.value = true
    try {
      const response = await api.updateService(id, serviceData)
      await loadServices()
      return response
    } catch (error) {
      console.error('Error updating service:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const deleteService = async (id) => {
    deleting.value = true
    try {
      const response = await api.deleteService(id)
      await loadServices()
      return response
    } catch (error) {
      console.error('Error deleting service:', error)
      throw error
    } finally {
      deleting.value = false
    }
  }

  const getService = async (id) => {
    try {
      return await api.getService(id)
    } catch (error) {
      console.error('Error getting service:', error)
      throw error
    }
  }

  return {
    services,
    loading,
    saving,
    deleting,
    loadServices,
    createService,
    updateService,
    deleteService,
    getService
  }
}
