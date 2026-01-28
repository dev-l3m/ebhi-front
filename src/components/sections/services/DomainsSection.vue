<template>
  <section class="domains-section section-padding">
    <div class="domains-bg" aria-hidden="true">
      <div class="domains-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="domains-content">
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('servicesPage.domains.title')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('servicesPage.domains.subtitle') }}
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(domain, index) in domains"
          :key="index"
          cols="6"
          md="4"
          lg="3"
          class="domain-col"
        >
          <v-card :elevation="4" class="domain-card text-center" rounded="xl">
            <v-card-item class="pa-6">
              <div class="domain-icon-wrapper mb-4">
                <div
                  class="domain-icon-bg"
                  :style="{ background: getDomainGradient(domain.color) }"
                >
                  <v-icon :color="domain.color" size="40">{{ domain.icon }}</v-icon>
                </div>
              </div>
              <v-card-title class="domain-title text-body-1 font-weight-bold pa-0">
                {{ domain.name }}
              </v-card-title>
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

const domains = computed(() => {
  const domainNames = tm('servicesPage.domains.domains') || []
  const icons = [
    'mdi-laptop',
    'mdi-account-heart',
    'mdi-palette',
    'mdi-office-building',
    'mdi-headset',
    'mdi-cog',
    'mdi-cart',
    'mdi-currency-eur',
    'mdi-factory'
  ]
  const colors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error',
    'primary',
    'secondary',
    'success'
  ]
  return domainNames.map((name, index) => ({
    name,
    icon: icons[index] || 'mdi-circle',
    color: colors[index] || 'primary'
  }))
})

const getDomainGradient = color => {
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
</script>

<style scoped>
.domains-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.domains-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.domains-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: domainsBgDrift 26s ease-in-out infinite alternate;
}

.domains-content {
  position: relative;
  z-index: 1;
}

.domains-shapes {
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

@keyframes domainsBgDrift {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 40% 60%;
  }
  100% {
    background-position: 80% 20%;
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

.domain-col {
  margin-bottom: 24px;
}

.domain-card {
  transition: all 0.3s ease;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.domain-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1) !important;
}

.domain-icon-wrapper {
  display: flex;
  justify-content: center;
}

.domain-icon-bg {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.domain-card:hover .domain-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.domain-title {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  line-height: 1.4;
  hyphens: auto;
}

.domain-card {
  overflow: hidden;
}

.domain-card .v-card-item {
  overflow: hidden;
}

@media (max-width: 960px) {
  .domain-card {
    margin-bottom: 16px;
  }

  .domain-title {
    font-size: 0.9375rem !important;
    line-height: 1.3 !important;
    min-height: auto !important;
    padding: 0 !important;
  }

  .domain-icon-bg {
    width: 64px;
    height: 64px;
  }

  .domain-icon-bg .v-icon {
    font-size: 32px !important;
  }

  .domain-card .v-card-item {
    padding: 16px 12px !important;
  }
}

@media (max-width: 600px) {
  .domain-title {
    font-size: 0.875rem !important;
    line-height: 1.2 !important;
  }

  .domain-icon-bg {
    width: 56px;
    height: 56px;
    border-radius: 16px;
  }

  .domain-icon-bg .v-icon {
    font-size: 28px !important;
  }

  .domain-card .v-card-item {
    padding: 14px 8px !important;
  }

  .domain-icon-wrapper {
    margin-bottom: 12px !important;
  }
}
</style>
