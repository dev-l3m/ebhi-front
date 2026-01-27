import { ref } from 'vue'
import api from '../../services/api.js'

export function useTestimonials() {
  const testimonials = ref([])
  const loading = ref(false)
  const saving = ref(false)
  const deleting = ref(false)

  const loadTestimonials = async () => {
    loading.value = true
    try {
      const response = await api.getTestimonials()
      testimonials.value = response.data || []
      return response
    } catch (error) {
      console.error('Error loading testimonials:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  const createTestimonial = async (testimonialData) => {
    saving.value = true
    try {
      const response = await api.createTestimonial(testimonialData)
      await loadTestimonials()
      return response
    } catch (error) {
      console.error('Error creating testimonial:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const updateTestimonial = async (id, testimonialData) => {
    saving.value = true
    try {
      const response = await api.updateTestimonial(id, testimonialData)
      await loadTestimonials()
      return response
    } catch (error) {
      console.error('Error updating testimonial:', error)
      throw error
    } finally {
      saving.value = false
    }
  }

  const deleteTestimonial = async (id) => {
    deleting.value = true
    try {
      const response = await api.deleteTestimonial(id)
      await loadTestimonials()
      return response
    } catch (error) {
      console.error('Error deleting testimonial:', error)
      throw error
    } finally {
      deleting.value = false
    }
  }

  return {
    testimonials,
    loading,
    saving,
    deleting,
    loadTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
  }
}
