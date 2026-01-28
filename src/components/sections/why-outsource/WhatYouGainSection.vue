<template>
  <section class="what-you-gain-section section-padding">
    <div class="what-you-gain-bg" aria-hidden="true">
      <div class="what-you-gain-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="what-you-gain-content">
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-trophy</v-icon>
          {{ $t('whyOutsourcePage.whatYouGain.chip') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('whyOutsourcePage.whatYouGain.title')"></h2>
      </div>

      <v-row>
        <v-col v-for="(gain, index) in gains" :key="index" cols="12" md="6" lg="3" class="gain-col">
          <v-card :elevation="8" class="gain-card h-100 text-center" rounded="xl">
            <v-card-item class="pa-6">
              <div class="gain-icon-wrapper mb-4">
                <div class="gain-icon-bg" :style="{ background: getGainGradient(gain.color) }">
                  <v-icon :color="gain.color" size="48">{{ gain.icon }}</v-icon>
                </div>
              </div>
              <v-card-title
                class="text-h6 mb-3 pa-0 gain-title"
                style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
              >
                {{ gain.title }}
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 gain-description">
                {{ gain.description }}
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

const gains = computed(() => {
  const gainsData = tm('whyOutsourcePage.whatYouGain.gains') || []
  const icons = ['mdi-handshake', 'mdi-chart-timeline-variant', 'mdi-sync', 'mdi-account-network']
  const colors = ['primary', 'secondary', 'success', 'info']
  return gainsData.map((gain, index) => ({
    title: gain.title,
    description: gain.description,
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})

const getGainGradient = color => {
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
.what-you-gain-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.what-you-gain-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.what-you-gain-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: whatYouGainBgDrift 26s ease-in-out infinite alternate;
}

.what-you-gain-content {
  position: relative;
  z-index: 1;
}

.what-you-gain-shapes {
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

@keyframes whatYouGainBgDrift {
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

.gain-col {
  margin-bottom: 32px;
}

.gain-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.gain-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.gain-icon-wrapper {
  display: flex;
  justify-content: center;
}

.gain-icon-bg {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.gain-card:hover .gain-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.gain-title {
  font-weight: 700;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  text-align: center;
}

.gain-description {
  min-height: 40px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .gain-card {
    margin-bottom: 24px;
  }
}
</style>
