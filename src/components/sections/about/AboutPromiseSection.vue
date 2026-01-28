<template>
  <section class="about-promise-section section-padding">
    <div class="about-promise-bg" aria-hidden="true">
      <div class="about-promise-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="about-promise-content">
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('aboutPage.promise.title')"></h2>
        <p
          class="text-h5 font-weight-bold text-primary mb-12"
          style="max-width: 800px; margin: 0 auto"
        >
          {{ $t('aboutPage.promise.intro') }}
        </p>
      </div>

      <v-row>
        <v-col v-for="(step, index) in steps" :key="index" cols="12" md="6" lg="3" class="step-col">
          <v-card :elevation="8" class="step-card h-100 text-center" rounded="xl">
            <v-card-item class="pa-6">
              <div class="step-number-wrapper mb-4">
                <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
              </div>
              <v-card-title
                class="text-h6 mb-3 pa-0 step-title"
                style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
              >
                {{ step.title }}
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

const steps = computed(() => {
  const stepsData = tm('aboutPage.promise.steps') || []
  return stepsData.map(step => ({ title: step }))
})
</script>

<style scoped>
.about-promise-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.about-promise-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.about-promise-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: aboutPromiseBgDrift 26s ease-in-out infinite alternate;
}

.about-promise-content {
  position: relative;
  z-index: 1;
}

.about-promise-shapes {
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

@keyframes aboutPromiseBgDrift {
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

.step-col {
  margin-bottom: 32px;
}

.step-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.step-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.step-number-wrapper {
  display: flex;
  justify-content: center;
}

.step-number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  box-shadow: 0 8px 24px rgba(26, 35, 126, 0.3);
  border: 4px solid white;
}

.step-title {
  font-weight: 700;
  min-height: 80px;
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

@media (max-width: 960px) {
  .step-card {
    margin-bottom: 24px;
  }

  .step-number {
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
  }
}
</style>
