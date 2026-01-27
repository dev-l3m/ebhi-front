import { ref } from 'vue'
import api from '../../services/api.js'

export function useDomains() {
  const domains = ref([])
  const loading = ref(false)
  const saving = ref(false)
  const deleting = ref(false)

  const loadDomains = async () => {
    loading.value = true
    try {
      const response = await api.getDomains()
      domains.value = response.data || []
      return response
    } catch (error) {
      console.error('Error loading domains:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const createDomain = async domainData => {
    saving.value = true
    try {
      const response = await api.createDomain(domainData)
      await loadDomains()
      return response
    } catch (error) {
      console.error('Error creating domain:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const updateDomain = async (id, domainData) => {
    saving.value = true
    try {
      const response = await api.updateDomain(id, domainData)
      await loadDomains()
      return response
    } catch (error) {
      console.error('Error updating domain:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const deleteDomain = async id => {
    deleting.value = true
    try {
      const response = await api.deleteDomain(id)
      await loadDomains()
      return response
    } catch (error) {
      console.error('Error deleting domain:', error)
      throw error
    } finally {
      deleting.value = false
    }
  }

  return {
    domains,
    loading,
    saving,
    deleting,
    loadDomains,
    createDomain,
    updateDomain,
    deleteDomain
  }
}
