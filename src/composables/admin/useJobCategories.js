import { ref } from 'vue'
import api from '../../services/api.js'

export function useJobCategories() {
  const categories = ref([])
  const loading = ref(false)
  const saving = ref(false)
  const deleting = ref(false)

  const loadCategories = async () => {
    loading.value = true
    try {
      const response = await api.getJobCategories()
      categories.value = response.data || []
      return response
    } catch (error) {
      console.error('Error loading categories:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const createCategory = async categoryData => {
    saving.value = true
    try {
      const response = await api.createJobCategory(categoryData)
      await loadCategories()
      return response
    } catch (error) {
      console.error('Error creating category:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const updateCategory = async (id, categoryData) => {
    saving.value = true
    try {
      const response = await api.updateJobCategory(id, categoryData)
      await loadCategories()
      return response
    } catch (error) {
      console.error('Error updating category:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const deleteCategory = async id => {
    deleting.value = true
    try {
      const response = await api.deleteJobCategory(id)
      await loadCategories()
      return response
    } catch (error) {
      console.error('Error deleting category:', error)
      throw error
    } finally {
      deleting.value = false
    }
  }

  return {
    categories,
    loading,
    saving,
    deleting,
    loadCategories,
    createCategory,
    updateCategory,
    deleteCategory
  }
}
