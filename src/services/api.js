/**
 * Service API pour communiquer avec le backend NestJS
 * Base URL: process.env.VITE_API_URL || 'http://localhost:4001/api'
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4001/api'

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL
    this.token = localStorage.getItem('admin_token')
  }

  // Helper method to get headers
  getHeaders(includeAuth = true, isFormData = false) {
    const headers = {}
    if (!isFormData) {
      headers['Content-Type'] = 'application/json'
    }
    if (includeAuth && this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }
    return headers
  }

  // Helper method to handle requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const isFormData = options.body instanceof FormData
    const config = {
      ...options,
      headers: {
        ...this.getHeaders(options.includeAuth !== false, isFormData),
        ...options.headers
      }
    }

    try {
      const response = await fetch(url, config)

      // Gérer les réponses vides
      let data
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        const text = await response.text()
        data = text ? { message: text } : { message: 'Une erreur est survenue' }
      }

      if (!response.ok) {
        const errorMessage =
          data.message || data.error || `Erreur ${response.status}: ${response.statusText}`
        throw new Error(errorMessage)
      }

      return data
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  // ==================== AUTHENTICATION ====================
  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      includeAuth: false
    })
    if (data.token) {
      this.token = data.token
      localStorage.setItem('admin_token', data.token)
    }
    return data
  }

  async logout() {
    this.token = null
    localStorage.removeItem('admin_token')
  }

  async getCurrentUser() {
    return this.request('/auth/me')
  }

  // ==================== ARTICLES ====================
  async getArticles(params = {}) {
    const query = new URLSearchParams(params).toString()
    return this.request(`/articles${query ? `?${query}` : ''}`)
  }

  async getArticle(id) {
    return this.request(`/articles/${id}`)
  }

  async createArticle(article) {
    return this.request('/articles', {
      method: 'POST',
      body: JSON.stringify(article)
    })
  }

  async updateArticle(id, article) {
    return this.request(`/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(article)
    })
  }

  async deleteArticle(id) {
    return this.request(`/articles/${id}`, {
      method: 'DELETE'
    })
  }

  async uploadArticleImage(id, file) {
    const formData = new FormData()
    formData.append('image', file)
    return this.request(`/articles/${id}/image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`
      },
      body: formData
    })
  }

  // ==================== SERVICES ====================
  async getServices() {
    return this.request('/services')
  }

  async getService(id) {
    return this.request(`/services/${id}`)
  }

  async createService(service) {
    return this.request('/services', {
      method: 'POST',
      body: JSON.stringify(service)
    })
  }

  async updateService(id, service) {
    return this.request(`/services/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(service)
    })
  }

  async deleteService(id) {
    return this.request(`/services/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== DOMAINS ====================
  async getDomains() {
    return this.request('/domains')
  }

  async getDomain(id) {
    return this.request(`/domains/${id}`)
  }

  async createDomain(domain) {
    return this.request('/domains', {
      method: 'POST',
      body: JSON.stringify(domain)
    })
  }

  async updateDomain(id, domain) {
    return this.request(`/domains/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(domain)
    })
  }

  async deleteDomain(id) {
    return this.request(`/domains/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== JOB CATEGORIES ====================
  async getJobCategories() {
    return this.request('/job-categories')
  }

  async getJobCategory(id) {
    return this.request(`/job-categories/${id}`)
  }

  async createJobCategory(category) {
    return this.request('/job-categories', {
      method: 'POST',
      body: JSON.stringify(category)
    })
  }

  async updateJobCategory(id, category) {
    return this.request(`/job-categories/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(category)
    })
  }

  async deleteJobCategory(id) {
    return this.request(`/job-categories/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== JOB APPLICATIONS ====================
  async getJobApplications(params = {}) {
    const query = new URLSearchParams(params).toString()
    return this.request(`/job-applications${query ? `?${query}` : ''}`)
  }

  async getJobApplication(id) {
    return this.request(`/job-applications/${id}`)
  }

  async createJobApplication(applicationData) {
    const formData = new FormData()
    formData.append('firstName', applicationData.firstName)
    formData.append('lastName', applicationData.lastName)
    formData.append('email', applicationData.email)
    formData.append('phone', applicationData.phone)
    formData.append('position', applicationData.position)
    if (applicationData.categoryId) {
      formData.append('categoryId', applicationData.categoryId)
    }
    if (applicationData.message) {
      formData.append('coverLetter', applicationData.message)
    }
    if (applicationData.cv) {
      formData.append('resume', applicationData.cv)
    }

    return this.request('/job-applications', {
      method: 'POST',
      body: formData,
      includeAuth: false
    })
  }

  async updateJobApplicationStatus(id, status) {
    return this.request(`/job-applications/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    })
  }

  async deleteJobApplication(id) {
    return this.request(`/job-applications/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== TESTIMONIALS ====================
  async getTestimonials() {
    return this.request('/testimonials')
  }

  async getTestimonial(id) {
    return this.request(`/testimonials/${id}`)
  }

  async createTestimonial(testimonial) {
    return this.request('/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonial)
    })
  }

  async updateTestimonial(id, testimonial) {
    return this.request(`/testimonials/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(testimonial)
    })
  }

  async deleteTestimonial(id) {
    return this.request(`/testimonials/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== STATS ====================
  async getStats() {
    return this.request('/stats')
  }

  async getStat(id) {
    return this.request(`/stats/${id}`)
  }

  async createStat(stat) {
    return this.request('/stats', {
      method: 'POST',
      body: JSON.stringify(stat)
    })
  }

  async updateStat(id, stat) {
    return this.request(`/stats/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(stat)
    })
  }

  async deleteStat(id) {
    return this.request(`/stats/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== CONTACTS ====================
  async getContacts(params = {}) {
    const query = new URLSearchParams(params).toString()
    return this.request(`/contacts${query ? `?${query}` : ''}`)
  }

  async getContact(id) {
    return this.request(`/contacts/${id}`)
  }

  async createContact(contactData) {
    return this.request('/contacts', {
      method: 'POST',
      body: JSON.stringify({
        name: `${contactData.prenom} ${contactData.nom}`,
        email: contactData.email,
        phone: contactData.telephone || null,
        message: contactData.message
      }),
      includeAuth: false
    })
  }

  async updateContactStatus(id, status) {
    return this.request(`/contacts/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    })
  }

  async deleteContact(id) {
    return this.request(`/contacts/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== USERS (ADMINS) ====================
  async getUsers() {
    return this.request('/users')
  }

  async getUser(id) {
    return this.request(`/users/${id}`)
  }

  async createUser(user) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(user)
    })
  }

  async updateUser(id, user) {
    return this.request(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(user)
    })
  }

  async deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: 'DELETE'
    })
  }

  // ==================== DASHBOARD ====================
  async getDashboardStats() {
    return this.request('/dashboard/stats')
  }
}

export default new ApiService()
