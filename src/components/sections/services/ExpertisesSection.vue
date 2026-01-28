<template>
  <section class="expertises-section section-padding">
    <div class="expertises-bg" aria-hidden="true">
      <div class="expertises-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="expertises-content">
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('servicesPage.expertises.title')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('servicesPage.expertises.subtitle') }}
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(expertise, index) in expertises"
          :key="index"
          cols="12"
          md="6"
          lg="3"
          class="expertise-col"
        >
          <v-card
            :elevation="8"
            class="expertise-card h-100"
            :class="`expertise-card-${expertise.color}`"
            rounded="xl"
          >
            <div class="expertise-number-wrapper">
              <div class="expertise-number" :class="`expertise-number-${expertise.color}`">
                {{ index + 1 }}
              </div>
            </div>
            <v-card-item class="pa-6 text-center">
              <v-icon :color="expertise.color" size="56" class="mb-4 expertise-icon">
                {{ expertise.icon }}
              </v-icon>
              <v-card-title class="text-h6 mb-3 expertise-title">
                <span class="expertise-title-text">{{ expertise.title }}</span>
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 expertise-description">
                {{ expertise.description }}
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

const expertises = computed(() => {
  const expertisesData = tm('servicesPage.expertises.expertises') || []
  const icons = [
    'mdi-magnify',
    'mdi-account-search',
    'mdi-office-building',
    'mdi-file-document-check'
  ]
  const colors = ['primary', 'secondary', 'success', 'info']
  return expertisesData.map((expertise, index) => ({
    title: expertise.title,
    description: expertise.description,
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})
</script>

<style scoped>
.expertises-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.expertises-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.expertises-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: expertisesBgDrift 26s ease-in-out infinite alternate;
}

.expertises-content {
  position: relative;
  z-index: 1;
}

.expertises-shapes {
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

@keyframes expertisesBgDrift {
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

.expertise-col {
  margin-bottom: 32px;
}

.expertise-card {
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: visible;
  background: white;
  border: 2px solid transparent;
}

.expertise-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
}

.expertise-card-primary:hover {
  border-color: #1a237e;
}

.expertise-card-secondary:hover {
  border-color: #283593;
}

.expertise-card-success:hover {
  border-color: #4caf50;
}

.expertise-card-info:hover {
  border-color: #2196f3;
}

.expertise-number-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 24px;
}

.expertise-number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  border: 4px solid white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.expertise-number-primary {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
}

.expertise-number-secondary {
  background: linear-gradient(135deg, #283593 0%, #3949ab 100%);
}

.expertise-number-success {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
}

.expertise-number-info {
  background: linear-gradient(135deg, #2196f3 0%, #42a5f5 100%);
}

.expertise-card:hover .expertise-number {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.expertise-icon {
  transition: all 0.4s ease;
}

.expertise-card:hover .expertise-icon {
  transform: scale(1.2);
}

.expertise-title {
  font-weight: 700;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4 !important;
  font-size: clamp(0.875rem, 1.5vw, 1.125rem) !important;
}

.expertise-title-text {
  display: block;
  width: 100%;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  white-space: normal;
}

.expertise-description {
  min-height: 100px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .expertise-card {
    margin-bottom: 48px;
  }

  .expertise-number-wrapper {
    margin-top: -32px;
  }

  .expertise-number {
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
  }
}
</style>
