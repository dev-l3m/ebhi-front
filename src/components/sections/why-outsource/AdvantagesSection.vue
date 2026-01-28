<template>
  <section class="advantages-section section-padding">
    <div class="advantages-bg" aria-hidden="true">
      <div class="advantages-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="advantages-content">
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-star-circle</v-icon>
          {{ $t('whyOutsourcePage.advantages.chip') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('whyOutsourcePage.advantages.title')"></h2>
      </div>

      <v-row>
        <v-col
          v-for="(advantage, index) in advantages"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="advantage-col"
        >
          <v-card :elevation="8" class="advantage-card h-100" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-start mb-4">
                <div class="advantage-number-wrapper mr-4">
                  <div class="advantage-number">{{ index + 1 }}</div>
                </div>
                <div class="flex-grow-1">
                  <v-icon :color="advantage.color" size="40" class="mb-3">
                    {{ advantage.icon }}
                  </v-icon>
                  <v-card-title
                    class="text-h6 mb-3 pa-0 advantage-title"
                    style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
                  >
                    {{ advantage.title }}
                  </v-card-title>
                  <v-card-text class="text-body-2 text-grey-darken-1 pa-0 advantage-description">
                    {{ advantage.description }}
                  </v-card-text>
                </div>
              </div>
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

const advantages = computed(() => {
  const advantagesData = tm('whyOutsourcePage.advantages.advantages') || []
  const icons = [
    'mdi-cash-multiple',
    'mdi-account-star',
    'mdi-clock-fast',
    'mdi-sync',
    'mdi-shield-check',
    'mdi-shield-lock'
  ]
  const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
  return advantagesData.map((advantage, index) => ({
    title: advantage.title,
    description: advantage.description,
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})
</script>

<style scoped>
.advantages-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.advantages-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.advantages-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: advantagesBgDrift 26s ease-in-out infinite alternate;
}

.advantages-content {
  position: relative;
  z-index: 1;
}

.advantages-shapes {
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

@keyframes advantagesBgDrift {
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

.advantage-col {
  margin-bottom: 32px;
}

.advantage-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.advantage-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.advantage-number-wrapper {
  flex-shrink: 0;
}

.advantage-number {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  box-shadow: 0 4px 12px rgba(26, 35, 126, 0.3);
}

.advantage-title {
  font-weight: 700;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  min-height: auto;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.advantage-description {
  line-height: 1.7;
  min-height: 80px;
}

@media (max-width: 960px) {
  .advantage-card {
    margin-bottom: 24px;
  }
}
</style>
