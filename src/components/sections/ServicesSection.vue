<template>
  <section id="services" class="services-section section-padding">
    <div class="services-bg">
      <div class="services-shapes" aria-hidden="true">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container>
      <div class="section-header text-center mb-16 fade-in-up">
        <v-chip color="primary" variant="flat" size="large" class="mb-6 section-chip">
          <v-icon start>mdi-star-circle</v-icon>
          {{ $t('services.title') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('services.sectionTitle')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <v-row class="services-grid">
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="service-col"
          :style="{ '--card-index': index }"
        >
          <v-card
            :class="['service-card', { 'service-card-hovered': hovered === index }]"
            :elevation="hovered === index ? 12 : 4"
            @mouseenter="hovered = index"
            @mouseleave="hovered = null"
          >
            <div class="service-icon-wrapper">
              <div class="service-icon-bg" :style="{ background: getColorGradient(service.color) }">
                <v-icon :color="service.color" size="48">{{ service.icon }}</v-icon>
              </div>
            </div>
            <v-card-item class="pa-6 pt-0">
              <v-card-title class="text-h5 mb-3 service-title service-card-title">
                {{ service.title }}
              </v-card-title>
              <v-card-text class="pa-0">
                <p class="text-body-1 text-grey-darken-1 service-description">
                  {{ service.description }}
                </p>
              </v-card-text>
            </v-card-item>
            <v-card-actions class="pa-6 pt-0">
              <v-btn
                :color="service.color"
                variant="text"
                class="service-btn"
                @click="openServiceDialog(service)"
              >
                {{ $t('services.learnMore') }}
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Service Details Dialog -->
      <v-dialog v-model="serviceDialog" max-width="900" scrollable persistent>
        <v-card rounded="xl" v-if="selectedService">
          <v-card-title
            class="d-flex align-center justify-space-between pa-6 dialog-header"
            :style="{ background: getColorGradient(selectedService.color) }"
          >
            <div class="d-flex align-center">
              <div class="dialog-icon-wrapper mr-4">
                <v-icon :color="selectedService.color" size="40">{{ selectedService.icon }}</v-icon>
              </div>
              <span class="text-h5 font-weight-bold dialog-title-text">{{
                selectedService.title
              }}</span>
            </div>
            <v-btn
              icon
              variant="text"
              size="small"
              @click="serviceDialog = false"
              class="close-btn"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-6">
            <div class="service-details-content">
              <p class="text-h6 mb-6 service-intro dialog-intro-text">
                {{ selectedService.detailedDescription }}
              </p>

              <div class="service-features mb-6">
                <h3 class="text-h6 mb-4 font-weight-bold dialog-section-title">
                  {{ $t('services.ourServices') }}
                </h3>
                <v-row>
                  <v-col
                    v-for="(feature, index) in selectedService.features"
                    :key="index"
                    cols="12"
                    md="6"
                    class="feature-col"
                  >
                    <div class="feature-item d-flex align-start mb-3">
                      <v-icon :color="selectedService.color" size="24" class="mr-3 mt-1"
                        >mdi-check-circle</v-icon
                      >
                      <span class="text-body-1">{{ feature }}</span>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <v-divider class="my-6"></v-divider>

              <div class="service-benefits">
                <h3 class="text-h6 mb-4 font-weight-bold dialog-section-title">
                  {{ $t('services.advantages') }}
                </h3>
                <v-row>
                  <v-col
                    v-for="(benefit, index) in selectedService.benefits"
                    :key="index"
                    cols="12"
                    sm="6"
                    md="4"
                    class="benefit-col"
                  >
                    <v-card :elevation="2" class="benefit-card" rounded="lg">
                      <v-card-item class="pa-4">
                        <div class="d-flex align-center">
                          <v-icon :color="selectedService.color" size="28" class="mr-3">{{
                            benefit.icon
                          }}</v-icon>
                          <div>
                            <div class="text-body-2 font-weight-bold mb-1">{{ benefit.title }}</div>
                            <div class="text-caption text-grey-darken-1">
                              {{ benefit.description }}
                            </div>
                          </div>
                        </div>
                      </v-card-item>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-6">
            <v-spacer></v-spacer>
            <v-btn
              :color="selectedService.color"
              variant="elevated"
              rounded="lg"
              size="large"
              @click="scrollToContact"
            >
              <v-icon start>mdi-email</v-icon>
              {{ $t('services.contactUs') }}
            </v-btn>
            <v-btn
              variant="outlined"
              rounded="lg"
              size="large"
              class="ml-3"
              @click="serviceDialog = false"
            >
              {{ $t('services.close') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const hovered = ref(null)
const serviceDialog = ref(false)
const selectedService = ref(null)

const services = computed(() => [
  {
    title: t('services.serviceList.hr.title'),
    description: t('services.serviceList.hr.description'),
    detailedDescription: t('services.serviceList.hr.detailedDescription'),
    icon: 'mdi-account-group',
    color: 'primary',
    features: [
      t('services.serviceList.hr.features.0'),
      t('services.serviceList.hr.features.1'),
      t('services.serviceList.hr.features.2'),
      t('services.serviceList.hr.features.3'),
      t('services.serviceList.hr.features.4'),
      t('services.serviceList.hr.features.5')
    ],
    benefits: [
      {
        icon: 'mdi-account-multiple',
        title: t('services.serviceList.hr.benefits.qualifiedTeams.title'),
        description: t('services.serviceList.hr.benefits.qualifiedTeams.description')
      },
      {
        icon: 'mdi-chart-line',
        title: t('services.serviceList.hr.benefits.optimizedPerformance.title'),
        description: t('services.serviceList.hr.benefits.optimizedPerformance.description')
      },
      {
        icon: 'mdi-shield-check',
        title: t('services.serviceList.hr.benefits.guaranteedCompliance.title'),
        description: t('services.serviceList.hr.benefits.guaranteedCompliance.description')
      }
    ]
  },
  {
    title: t('services.serviceList.engineering.title'),
    description: t('services.serviceList.engineering.description'),
    detailedDescription: t('services.serviceList.engineering.detailedDescription'),
    icon: 'mdi-cog',
    color: 'secondary',
    features: [
      t('services.serviceList.engineering.features.0'),
      t('services.serviceList.engineering.features.1'),
      t('services.serviceList.engineering.features.2'),
      t('services.serviceList.engineering.features.3'),
      t('services.serviceList.engineering.features.4'),
      t('services.serviceList.engineering.features.5')
    ],
    benefits: [
      {
        icon: 'mdi-lightbulb-on',
        title: t('services.serviceList.engineering.benefits.innovation.title'),
        description: t('services.serviceList.engineering.benefits.innovation.description')
      },
      {
        icon: 'mdi-speedometer',
        title: t('services.serviceList.engineering.benefits.speed.title'),
        description: t('services.serviceList.engineering.benefits.speed.description')
      },
      {
        icon: 'mdi-cog',
        title: t('services.serviceList.engineering.benefits.expertise.title'),
        description: t('services.serviceList.engineering.benefits.expertise.description')
      }
    ]
  },
  {
    title: t('services.serviceList.chemistry.title'),
    description: t('services.serviceList.chemistry.description'),
    detailedDescription: t('services.serviceList.chemistry.detailedDescription'),
    icon: 'mdi-flask',
    color: 'success',
    features: [
      t('services.serviceList.chemistry.features.0'),
      t('services.serviceList.chemistry.features.1'),
      t('services.serviceList.chemistry.features.2'),
      t('services.serviceList.chemistry.features.3'),
      t('services.serviceList.chemistry.features.4'),
      t('services.serviceList.chemistry.features.5')
    ],
    benefits: [
      {
        icon: 'mdi-flask-outline',
        title: t('services.serviceList.chemistry.benefits.scientificExpertise.title'),
        description: t('services.serviceList.chemistry.benefits.scientificExpertise.description')
      },
      {
        icon: 'mdi-shield-check',
        title: t('services.serviceList.chemistry.benefits.safety.title'),
        description: t('services.serviceList.chemistry.benefits.safety.description')
      },
      {
        icon: 'mdi-chart-bar',
        title: t('services.serviceList.chemistry.benefits.quality.title'),
        description: t('services.serviceList.chemistry.benefits.quality.description')
      }
    ]
  },
  {
    title: t('services.serviceList.marketing.title'),
    description: t('services.serviceList.marketing.description'),
    detailedDescription: t('services.serviceList.marketing.detailedDescription'),
    icon: 'mdi-bullhorn',
    color: 'info',
    features: [
      t('services.serviceList.marketing.features.0'),
      t('services.serviceList.marketing.features.1'),
      t('services.serviceList.marketing.features.2'),
      t('services.serviceList.marketing.features.3'),
      t('services.serviceList.marketing.features.4'),
      t('services.serviceList.marketing.features.5')
    ],
    benefits: [
      {
        icon: 'mdi-trending-up',
        title: t('services.serviceList.marketing.benefits.growth.title'),
        description: t('services.serviceList.marketing.benefits.growth.description')
      },
      {
        icon: 'mdi-palette',
        title: t('services.serviceList.marketing.benefits.creativity.title'),
        description: t('services.serviceList.marketing.benefits.creativity.description')
      },
      {
        icon: 'mdi-chart-line',
        title: t('services.serviceList.marketing.benefits.measurableROI.title'),
        description: t('services.serviceList.marketing.benefits.measurableROI.description')
      }
    ]
  },
  {
    title: t('services.serviceList.technicalSupport.title'),
    description: t('services.serviceList.technicalSupport.description'),
    detailedDescription: t('services.serviceList.technicalSupport.detailedDescription'),
    icon: 'mdi-headset',
    color: 'warning',
    features: [
      t('services.serviceList.technicalSupport.features.0'),
      t('services.serviceList.technicalSupport.features.1'),
      t('services.serviceList.technicalSupport.features.2'),
      t('services.serviceList.technicalSupport.features.3'),
      t('services.serviceList.technicalSupport.features.4'),
      t('services.serviceList.technicalSupport.features.5')
    ],
    benefits: [
      {
        icon: 'mdi-clock-outline',
        title: t('services.serviceList.technicalSupport.benefits.availability.title'),
        description: t('services.serviceList.technicalSupport.benefits.availability.description')
      },
      {
        icon: 'mdi-speedometer',
        title: t('services.serviceList.technicalSupport.benefits.reactivity.title'),
        description: t('services.serviceList.technicalSupport.benefits.reactivity.description')
      },
      {
        icon: 'mdi-account-group',
        title: t('services.serviceList.technicalSupport.benefits.expertise.title'),
        description: t('services.serviceList.technicalSupport.benefits.expertise.description')
      }
    ]
  },
  {
    title: t('services.serviceList.aftersales.title'),
    description: t('services.serviceList.aftersales.description'),
    detailedDescription: t('services.serviceList.aftersales.detailedDescription'),
    icon: 'mdi-handshake',
    color: 'error',
    features: [
      t('services.serviceList.aftersales.features.0'),
      t('services.serviceList.aftersales.features.1'),
      t('services.serviceList.aftersales.features.2'),
      t('services.serviceList.aftersales.features.3'),
      t('services.serviceList.aftersales.features.4'),
      t('services.serviceList.aftersales.features.5')
    ],
    benefits: [
      {
        icon: 'mdi-heart',
        title: t('services.serviceList.aftersales.benefits.satisfaction.title'),
        description: t('services.serviceList.aftersales.benefits.satisfaction.description')
      },
      {
        icon: 'mdi-chart-line',
        title: t('services.serviceList.aftersales.benefits.performance.title'),
        description: t('services.serviceList.aftersales.benefits.performance.description')
      },
      {
        icon: 'mdi-account-group',
        title: t('services.serviceList.aftersales.benefits.relationship.title'),
        description: t('services.serviceList.aftersales.benefits.relationship.description')
      }
    ]
  }
])

const getColorGradient = color => {
  const gradients = {
    primary: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    secondary: 'linear-gradient(135deg, rgba(40, 53, 147, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    success: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.1) 100%)',
    info: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(100, 181, 246, 0.1) 100%)',
    warning: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 224, 130, 0.1) 100%)',
    error: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1) 0%, rgba(255, 138, 101, 0.1) 100%)'
  }
  return gradients[color] || gradients.primary
}

const openServiceDialog = service => {
  selectedService.value = service
  serviceDialog.value = true
}

const scrollToContact = () => {
  serviceDialog.value = false
  setTimeout(() => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }, 300)
}
</script>

<style scoped>
.services-section {
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.services-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.services-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
}

.services-shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
  animation: float 18s ease-in-out infinite;
  opacity: 0.7;
}

.shape-1 {
  width: 240px;
  height: 240px;
  top: 6%;
  left: -60px;
  animation-delay: 0s;
}

.shape-2 {
  width: 180px;
  height: 180px;
  top: 22%;
  right: -50px;
  animation-delay: 4s;
}

.shape-3 {
  width: 120px;
  height: 120px;
  bottom: 18%;
  left: 8%;
  animation-delay: 8s;
}

.shape-4 {
  width: 140px;
  height: 140px;
  bottom: 6%;
  right: 10%;
  animation-delay: 12s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(14px, -18px) scale(1.03);
  }
}

.section-header {
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #616161;
  max-width: 700px;
  line-height: 1.6;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-chip {
  box-shadow: 0 10px 28px rgba(26, 35, 126, 0.18);
}

.services-grid {
  margin-top: 40px;
}

.service-col {
  margin-bottom: 32px;
}

.service-card {
  border-radius: 24px !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform: translateY(0);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: calc(var(--card-index, 0) * 70ms);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a237e, #3f51b5);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 10%, rgba(26, 35, 126, 0.06) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.service-card-hovered::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.service-card:hover::after {
  opacity: 1;
}

.service-icon-wrapper {
  position: relative;
  padding: 32px 32px 0;
  display: flex;
  justify-content: center;
}

.service-icon-bg {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-card:hover .service-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.service-icon-bg::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .service-icon-bg::after {
  opacity: 1;
}

.service-title {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3;
}

.service-description {
  line-height: 1.7;
  min-height: 60px;
}

.service-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.service-btn:hover {
  transform: translateX(4px);
}

/* Dialog Styles */
.dialog-header {
  position: relative;
  overflow: hidden;
}

.dialog-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.close-btn {
  transition: all 0.3s ease;
  color: rgba(0, 0, 0, 0.7) !important;
}

.close-btn:hover {
  transform: rotate(90deg);
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.service-details-content {
  max-width: 100%;
}

.service-intro {
  color: #424242;
  line-height: 1.8;
  font-weight: 500;
}

.service-features {
  margin-top: 32px;
}

.feature-col {
  margin-bottom: 8px;
}

.feature-item {
  line-height: 1.6;
}

.service-benefits {
  margin-top: 32px;
}

.benefit-col {
  margin-bottom: 16px;
}

.benefit-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }

  .service-card {
    margin-bottom: 24px;
  }

  .dialog-header {
    padding: 20px !important;
  }

  .dialog-header .text-h5 {
    font-size: 1.25rem;
  }

  .dialog-icon-wrapper {
    width: 48px;
    height: 48px;
  }

  .dialog-icon-wrapper .v-icon {
    font-size: 24px !important;
  }
}

@media (max-width: 600px) {
  .shape {
    display: none;
  }

  .services-grid {
    justify-content: center;
  }

  .service-col {
    display: flex;
    justify-content: center;
  }

  .service-card {
    width: 100%;
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;
  }

  .service-card-title {
    text-align: center;
  }

  .service-description {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .service-btn {
    width: 100%;
    justify-content: center;
  }

  .service-card-title {
    font-size: 1.125rem !important;
    line-height: 1.3 !important;
  }

  .service-description {
    font-size: 0.875rem !important;
  }

  .dialog-header {
    padding: 16px !important;
    flex-wrap: wrap;
  }

  .dialog-title-text {
    font-size: 1.125rem !important;
    line-height: 1.3 !important;
    word-wrap: break-word;
  }

  .dialog-icon-wrapper {
    width: 40px !important;
    height: 40px !important;
    margin-right: 12px !important;
  }

  .dialog-icon-wrapper .v-icon {
    font-size: 20px !important;
  }

  .dialog-intro-text {
    font-size: 0.9375rem !important;
    line-height: 1.6 !important;
  }

  .dialog-section-title {
    font-size: 1rem !important;
    margin-bottom: 16px !important;
  }

  .service-details-content {
    padding: 0 !important;
  }

  .v-card-text {
    padding: 16px !important;
  }

  .v-card-actions {
    padding: 16px !important;
    flex-wrap: wrap;
    gap: 8px;
  }

  .v-card-actions .v-btn {
    font-size: 0.875rem !important;
    min-width: auto !important;
    flex: 1 1 auto;
  }
}
</style>
