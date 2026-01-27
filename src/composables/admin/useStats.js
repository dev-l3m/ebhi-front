import { ref } from 'vue'
import api from '../../services/api.js'

export function useStats() {
  const stats = ref([])
  const loading = ref(false)
  const saving = ref(false)
  const deleting = ref(false)

  const loadStats = async () => {
    loading.value = true
    try {
      const response = await api.getStats()
      stats.value = response.data || []
      return response
    } catch (error) {
      console.error('Error loading stats:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const createStat = async (statData) => {
    saving.value = true
    try {
      const response = await api.createStat(statData)
      await loadStats()
      return response
    } catch (error) {
      console.error('Error creating stat:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const updateStat = async (id, statData) => {
    saving.value = true
    try {
      const response = await api.updateStat(id, statData)
      await loadStats()
      return response
    } catch (error) {
      console.error('Error updating stat:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const deleteStat = async (id) => {
    deleting.value = true
    try {
      const response = await api.deleteStat(id)
      await loadStats()
      return response
    } catch (error) {
      console.error('Error deleting stat:', error)
      throw error
    } finally {
      deleting.value = false
    }
  }

  return {
    stats,
    loading,
    saving,
    deleting,
    loadStats,
    createStat,
    updateStat,
    deleteStat
  }
}
