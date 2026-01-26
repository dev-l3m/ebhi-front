<template>
  <v-card
    v-if="showConsent"
    :elevation="24"
    class="cookie-consent"
    rounded="xl"
  >
    <v-card-item class="pa-6">
      <div class="d-flex align-start mb-4">
        <div class="cookie-icon-wrapper mr-4">
          <v-icon color="primary" size="32">mdi-cookie</v-icon>
        </div>
        <div class="flex-grow-1">
          <v-card-title class="text-h6 mb-2 pa-0">
            Gérer le consentement
          </v-card-title>
          <v-card-text class="text-body-2 text-grey-darken-1 pa-0" style="line-height: 1.6;">
            Pour offrir les meilleures expériences, nous utilisons des technologies telles que les cookies 
            pour stocker et/ou accéder aux informations des appareils. Le fait de consentir à ces technologies 
            nous permettra de traiter des données telles que le comportement de navigation ou les ID uniques 
            sur ce site. Le fait de ne pas consentir ou de retirer son consentement peut avoir un effet 
            négatif sur certaines caractéristiques et fonctions.
          </v-card-text>
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
              <div class="d-flex align-center justify-space-between mb-2">
                <div class="d-flex align-center">
                  <v-icon :color="category.color" size="24" class="mr-3">{{ category.icon }}</v-icon>
                  <div>
                    <div class="text-body-1 font-weight-bold">{{ category.name }}</div>
                    <div class="text-caption text-grey-darken-1">{{ category.status }}</div>
                  </div>
                </div>
                <v-switch
                  v-model="category.enabled"
                  :color="category.color"
                  density="compact"
                  hide-details
                  :disabled="category.required"
                ></v-switch>
              </div>
              <p class="text-caption text-grey-darken-1 ml-9" style="line-height: 1.5;">
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

      <div class="d-flex flex-column flex-sm-row gap-2 mt-4">
        <v-btn
          color="primary"
          variant="elevated"
          rounded="lg"
          size="small"
          class="cookie-btn"
          @click="acceptAll"
        >
          <v-icon start size="18">mdi-check-circle</v-icon>
          Accepter
        </v-btn>
        <v-btn
          variant="outlined"
          rounded="lg"
          size="small"
          class="cookie-btn"
          @click="showDetails = !showDetails"
        >
          <v-icon start size="18">mdi-cog</v-icon>
          Voir les préférences
        </v-btn>
        <v-btn
          variant="text"
          rounded="lg"
          size="small"
          class="cookie-btn"
          @click="rejectAll"
        >
          Refuser
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

@media (max-width: 600px) {
  .cookie-consent {
    bottom: 0;
    right: 0;
    left: 0;
    max-width: 100%;
    border-radius: 24px 24px 0 0 !important;
  }

  .cookie-details {
    max-height: 300px;
  }
}
</style>
