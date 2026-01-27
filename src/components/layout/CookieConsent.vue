<template>
  <v-card
    v-if="showConsent"
    :elevation="24"
    class="cookie-consent"
    rounded="xl"
  >
    <v-card-item class="cookie-consent-content">
      <div class="cookie-header">
        <div class="cookie-header-main">
          <div class="cookie-icon-wrapper">
            <v-icon color="primary" size="32" class="cookie-icon">mdi-cookie</v-icon>
          </div>
          <div class="cookie-text-content">
            <v-card-title class="cookie-title mb-2 pa-0">
              Gérer le consentement
            </v-card-title>
            <v-card-text class="cookie-description text-grey-darken-1 pa-0">
              Pour offrir les meilleures expériences, nous utilisons des technologies telles que les cookies 
              pour stocker et/ou accéder aux informations des appareils. Le fait de consentir à ces technologies 
              nous permettra de traiter des données telles que le comportement de navigation ou les ID uniques 
              sur ce site. Le fait de ne pas consentir ou de retirer son consentement peut avoir un effet 
              négatif sur certaines caractéristiques et fonctions.
            </v-card-text>
          </div>
        </div>
        <v-btn
          icon
          variant="text"
          size="small"
          @click="showConsent = false"
          class="close-btn"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-expand-transition>
        <div v-if="showDetails" class="cookie-details mt-4">
          <v-divider class="mb-4"></v-divider>
          
          <div class="cookie-categories">
            <div
              v-for="(category, index) in cookieCategories"
              :key="index"
              class="cookie-category mb-4"
            >
              <div class="cookie-category-header">
                <div class="cookie-category-info">
                  <v-icon :color="category.color" size="24" class="category-icon">{{ category.icon }}</v-icon>
                  <div class="category-text">
                    <div class="category-name">{{ category.name }}</div>
                    <div class="category-status">{{ category.status }}</div>
                  </div>
                </div>
                <v-switch
                  v-model="category.enabled"
                  :color="category.color"
                  density="compact"
                  hide-details
                  :disabled="category.required"
                  class="category-switch"
                ></v-switch>
              </div>
              <p class="category-description text-grey-darken-1">
                {{ category.description }}
              </p>
            </div>
          </div>

          <div class="mt-4">
            <v-btn
              variant="text"
              size="small"
              class="text-primary"
              @click="showDetails = false"
            >
              <v-icon start>mdi-chevron-up</v-icon>
              Réduire
            </v-btn>
          </div>
        </div>
      </v-expand-transition>

      <div class="cookie-actions">
        <v-btn
          color="primary"
          variant="elevated"
          rounded="lg"
          size="small"
          class="cookie-btn cookie-btn-primary"
          @click="acceptAll"
        >
          <v-icon start size="18" class="btn-icon">mdi-check-circle</v-icon>
          <span class="btn-text">Accepter</span>
        </v-btn>
        <v-btn
          variant="outlined"
          rounded="lg"
          size="small"
          class="cookie-btn cookie-btn-secondary"
          @click="showDetails = !showDetails"
        >
          <v-icon start size="18" class="btn-icon">mdi-cog</v-icon>
          <span class="btn-text">Voir les préférences</span>
        </v-btn>
        <v-btn
          variant="text"
          rounded="lg"
          size="small"
          class="cookie-btn cookie-btn-text"
          @click="rejectAll"
        >
          <span class="btn-text">Refuser</span>
        </v-btn>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showConsent = ref(false)
const showDetails = ref(false)

const cookieCategories = ref([
  {
    name: 'Fonctionnel',
    status: 'Toujours activé',
    description: 'L\'accès ou le stockage technique est strictement nécessaire dans la finalité d\'intérêt légitime de permettre l\'utilisation d\'un service spécifique explicitement demandé par l\'abonné ou l\'utilisateur, ou dans le seul but d\'effectuer la transmission d\'une communication sur un réseau de communications électroniques.',
    icon: 'mdi-cog',
    color: 'primary',
    enabled: true,
    required: true
  },
  {
    name: 'Préférences',
    status: 'Optionnel',
    description: 'L\'accès ou le stockage technique est nécessaire dans la finalité d\'intérêt légitime de stocker des préférences qui ne sont pas demandées par l\'abonné ou l\'internaute.',
    icon: 'mdi-settings',
    color: 'secondary',
    enabled: false,
    required: false
  },
  {
    name: 'Statistiques',
    status: 'Optionnel',
    description: 'Le stockage ou l\'accès technique qui est utilisé exclusivement à des fins statistiques. Le stockage ou l\'accès technique qui est utilisé exclusivement dans des finalités statistiques anonymes. En l\'absence d\'une assignation à comparaître, d\'une conformité volontaire de la part de votre fournisseur d\'accès à internet ou d\'enregistrements supplémentaires provenant d\'une tierce partie, les informations stockées ou extraites à cette seule fin ne peuvent généralement pas être utilisées pour vous identifier.',
    icon: 'mdi-chart-bar',
    color: 'info',
    enabled: false,
    required: false
  },
  {
    name: 'Marketing',
    status: 'Optionnel',
    description: 'L\'accès ou le stockage technique est nécessaire pour créer des profils d\'internautes afin d\'envoyer des publicités, ou pour suivre l\'utilisateur sur un site web ou sur plusieurs sites web ayant des finalités marketing similaires.',
    icon: 'mdi-bullhorn',
    color: 'warning',
    enabled: false,
    required: false
  }
])

onMounted(() => {
  // Vérifier si le consentement a déjà été donné
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    // Afficher après un court délai pour une meilleure UX
    setTimeout(() => {
      showConsent.value = true
    }, 1000)
  }
})

const acceptAll = () => {
  cookieCategories.value.forEach(category => {
    category.enabled = true
  })
  saveConsent()
  showConsent.value = false
}

const rejectAll = () => {
  cookieCategories.value.forEach(category => {
    if (!category.required) {
      category.enabled = false
    }
  })
  saveConsent()
  showConsent.value = false
}

const saveConsent = () => {
  const consent = {
    functional: cookieCategories.value[0].enabled,
    preferences: cookieCategories.value[1].enabled,
    statistics: cookieCategories.value[2].enabled,
    marketing: cookieCategories.value[3].enabled,
    timestamp: new Date().toISOString()
  }
  localStorage.setItem('cookieConsent', JSON.stringify(consent))
}
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 24px;
  right: 24px;
  max-width: 600px;
  z-index: 9999;
  background: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
  animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.cookie-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.close-btn {
  transition: all 0.3s ease;
  color: rgba(0, 0, 0, 0.7) !important;
}

.close-btn:hover {
  transform: rotate(90deg);
  background-color: rgba(0, 0, 0, 0.05) !important;
}

.cookie-details {
  max-height: 400px;
  overflow-y: auto;
}

.cookie-category {
  padding: 12px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.cookie-category:hover {
  background: rgba(0, 0, 0, 0.04);
}

.cookie-btn {
  margin-right: 10px;
  min-width: auto !important;
  padding: 8px 16px !important;
  font-size: 0.875rem !important;
  height: auto !important;
}

/* Header Styles */
.cookie-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 12px;
}

.cookie-header-main {
  display: flex;
  align-items: flex-start;
  flex: 1;
  gap: 16px;
  min-width: 0;
}

.cookie-text-content {
  flex: 1;
  min-width: 0;
}

.cookie-title {
  font-weight: 700;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.cookie-description {
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Category Styles */
.cookie-category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 12px;
}

.cookie-category-info {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 12px;
}

.category-text {
  flex: 1;
  min-width: 0;
}

.category-name {
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.4;
  word-wrap: break-word;
}

.category-status {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 2px;
}

.category-description {
  font-size: 0.75rem;
  line-height: 1.5;
  margin-left: 36px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.category-switch {
  flex-shrink: 0;
}

/* Actions Styles */
.cookie-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.cookie-btn {
  width: 100%;
  min-height: 44px !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  white-space: normal;
  word-wrap: break-word;
}

.btn-icon {
  flex-shrink: 0;
  margin-right: 8px;
}

.btn-text {
  white-space: normal;
  line-height: 1.3;
}

@media (min-width: 600px) {
  .cookie-actions {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .cookie-btn {
    width: auto;
    flex: 1;
    min-width: 120px;
  }
  
  .cookie-btn-text {
    flex: 0 0 auto;
  }
}

@media (max-width: 960px) {
  .cookie-consent-content {
    padding: 20px !important;
  }
  
  .cookie-icon-wrapper {
    width: 48px;
    height: 48px;
  }
  
  .cookie-icon {
    font-size: 28px !important;
  }
  
  .cookie-title {
    font-size: 1.125rem !important;
  }
  
  .cookie-description {
    font-size: 0.8125rem !important;
  }
}

@media (max-width: 600px) {
  .cookie-consent {
    bottom: 0;
    right: 0;
    left: 0;
    max-width: 100%;
    border-radius: 24px 24px 0 0 !important;
    margin: 0;
  }

  .cookie-consent-content {
    padding: 16px !important;
  }
  
  .cookie-header {
    margin-bottom: 12px;
    gap: 8px;
  }
  
  .cookie-header-main {
    gap: 12px;
  }
  
  .cookie-icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }
  
  .cookie-icon {
    font-size: 24px !important;
  }
  
  .cookie-title {
    font-size: 1rem !important;
    margin-bottom: 8px !important;
  }
  
  .cookie-description {
    font-size: 0.75rem !important;
    line-height: 1.5;
  }
  
  .close-btn {
    min-width: 40px !important;
    min-height: 40px !important;
  }
  
  .cookie-details {
    max-height: 300px;
    margin-top: 12px !important;
  }
  
  .cookie-category {
    padding: 10px;
    margin-bottom: 12px !important;
  }
  
  .cookie-category-header {
    gap: 8px;
    margin-bottom: 6px;
  }
  
  .cookie-category-info {
    gap: 8px;
  }
  
  .category-icon {
    font-size: 20px !important;
  }
  
  .category-name {
    font-size: 0.875rem !important;
  }
  
  .category-status {
    font-size: 0.6875rem !important;
  }
  
  .category-description {
    font-size: 0.6875rem !important;
    margin-left: 28px;
    line-height: 1.4;
  }
  
  .cookie-actions {
    margin-top: 12px;
    gap: 8px;
  }
  
  .cookie-btn {
    min-height: 44px !important;
    font-size: 0.8125rem !important;
    padding: 12px 16px !important;
  }
  
  .btn-icon {
    font-size: 16px !important;
    margin-right: 6px !important;
  }
}
</style>
