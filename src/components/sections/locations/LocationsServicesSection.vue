<template>
  <section class="locations-services-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-cog</v-icon>
          {{ $t('locationsPage.services.chip') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('locationsPage.services.title')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('locationsPage.services.subtitle') }}
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="service-col"
        >
          <v-card :elevation="8" class="service-card h-100 text-center" rounded="xl">
            <v-card-item class="pa-6">
              <div class="service-icon-wrapper mb-4">
                <div
                  class="service-icon-bg"
                  :style="{ background: getServiceGradient(service.color) }"
                >
                  <v-icon :color="service.color" size="48">{{ service.icon }}</v-icon>
                </div>
              </div>
              <v-card-title class="text-h6 mb-3 pa-0 service-title">
                {{ service.title }}
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 service-description">
                {{ service.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const services = computed(() => {
  const servicesData = tm('locationsPage.services.services') || []
  const icons = ['mdi-headset', 'mdi-drawing', 'mdi-bullhorn', 'mdi-file-document']
  const colors = ['primary', 'secondary', 'success', 'info']
  return servicesData.map((service, index) => ({
    title: service.title,
    description: service.description,
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})

const getServiceGradient = color => {
  const gradients = {
    primary: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    secondary: 'linear-gradient(135deg, rgba(40, 53, 147, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    success: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.1) 100%)',
    info: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(100, 181, 246, 0.1) 100%)'
  }
  return gradients[color] || gradients.primary
}
</script>

<style scoped>
.locations-services-section {
  background: white;
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

.service-col {
  margin-bottom: 32px;
}

.service-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.service-icon-wrapper {
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
}

.service-card:hover .service-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.service-title {
  font-weight: 700;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
}

.service-description {
  min-height: 60px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .service-card {
    margin-bottom: 24px;
  }
}
</style>
