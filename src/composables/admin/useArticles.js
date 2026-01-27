import { ref } from 'vue'
import api from '../../services/api.js'

export function useArticles() {
  const articles = ref([])
  const loading = ref(false)
  const saving = ref(false)
  const deleting = ref(false)
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })

  const loadArticles = async (params = {}) => {
    loading.value = true
    try {
      const queryParams = {
        page: pagination.value.page,
        limit: pagination.value.limit,
        ...params
      }
      const response = await api.getArticles(queryParams)
      articles.value = response.data || []
      pagination.value = {
        ...pagination.value,
        total: response.meta?.total || 0,
        totalPages: response.meta?.totalPages || 0
      }
      return response
    } catch (error) {
      console.error('Error loading articles:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const createArticle = async (articleData) => {
    saving.value = true
    try {
      const response = await api.createArticle(articleData)
      await loadArticles()
      return response
    } catch (error) {
      console.error('Error creating article:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const updateArticle = async (id, articleData) => {
    saving.value = true
    try {
      const response = await api.updateArticle(id, articleData)
      await loadArticles()
      return response
    } catch (error) {
      console.error('Error updating article:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const deleteArticle = async (id) => {
    deleting.value = true
    try {
      const response = await api.deleteArticle(id)
      await loadArticles()
      return response
    } catch (error) {
      console.error('Error deleting article:', error)
      throw error
    } finally {
      deleting.value = false
    }
  }

  const getArticle = async (id) => {
    try {
      return await api.getArticle(id)
    } catch (error) {
      console.error('Error getting article:', error)
      throw error
    }
  }

  const setPage = (page) => {
    pagination.value.page = page
  }

  return {
    articles,
    loading,
    saving,
    deleting,
    pagination,
    loadArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticle,
    setPage
  }
}
