<template>
  <section class="solution-comparison-section section-padding">
    <div class="solution-comparison-bg" aria-hidden="true">
      <div class="solution-comparison-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="solution-comparison-content">
      <div class="section-header text-center mb-16">
        <h2
          class="section-title mb-6"
          v-html="$t('whyOutsourcePage.solutionComparison.title')"
        ></h2>
      </div>

      <v-row>
        <v-col cols="12" md="6" class="solution-col">
          <v-card :elevation="8" class="solution-card solution-card-internal h-100" rounded="xl">
            <v-card-item class="pa-8 text-center">
              <v-icon color="grey-darken-1" size="64" class="mb-4">mdi-office-building</v-icon>
              <v-card-title class="text-h4 mb-6 pa-0">{{
                $t('whyOutsourcePage.solutionComparison.internal.title')
              }}</v-card-title>
              <v-divider class="mb-6"></v-divider>
              <div class="solution-features">
                <div
                  v-for="(feature, index) in internalFeatures"
                  :key="index"
                  class="solution-feature mb-4"
                >
                  <div class="d-flex align-center mb-2">
                    <v-icon color="grey-darken-1" size="24" class="mr-3">mdi-check-circle</v-icon>
                    <div class="text-h6 font-weight-bold">{{ feature.label }}</div>
                  </div>
                  <div class="text-body-2 text-grey-darken-1 ml-11">
                    {{ feature.value }}
                  </div>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" class="solution-col">
          <v-card :elevation="12" class="solution-card solution-card-external h-100" rounded="xl">
            <v-card-item class="pa-8 text-center">
              <div class="solution-badge mb-4">
                <v-chip color="success" variant="flat" size="large">
                  <v-icon start>mdi-star</v-icon>
                  {{ $t('whyOutsourcePage.solutionComparison.external.badge') }}
                </v-chip>
              </div>
              <v-icon color="success" size="64" class="mb-4">mdi-rocket-launch</v-icon>
              <v-card-title class="text-h4 mb-6 pa-0">{{
                $t('whyOutsourcePage.solutionComparison.external.title')
              }}</v-card-title>
              <v-divider class="mb-6"></v-divider>
              <div class="solution-features">
                <div
                  v-for="(feature, index) in externalFeatures"
                  :key="index"
                  class="solution-feature mb-4"
                >
                  <div class="d-flex align-center mb-2">
                    <v-icon color="success" size="24" class="mr-3">mdi-check-circle</v-icon>
                    <div class="text-h6 font-weight-bold">{{ feature.label }}</div>
                  </div>
                  <div class="text-body-2 text-grey-darken-1 ml-11">
                    {{ feature.value }}
                  </div>
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

const internalFeatures = computed(() => {
  return tm('whyOutsourcePage.solutionComparison.internal.features') || []
})

const externalFeatures = computed(() => {
  return tm('whyOutsourcePage.solutionComparison.external.features') || []
})
</script>

<style scoped>
.solution-comparison-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.solution-comparison-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.solution-comparison-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: solutionComparisonBgDrift 26s ease-in-out infinite alternate;
}

.solution-comparison-content {
  position: relative;
  z-index: 1;
}

.solution-comparison-shapes {
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

@keyframes solutionComparisonBgDrift {
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

.solution-col {
  margin-bottom: 32px;
}

.solution-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.solution-card-internal {
  background: white;
  border-color: #e0e0e0;
}

.solution-card-external {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(129, 199, 132, 0.05) 100%);
  border-color: #4caf50;
  position: relative;
  overflow: hidden;
}

.solution-card-external::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4caf50, #66bb6a);
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
}

.solution-badge {
  display: flex;
  justify-content: center;
}

.solution-features {
  text-align: left;
}

.solution-feature {
  transition: all 0.3s ease;
}

.solution-card:hover .solution-feature {
  transform: translateX(4px);
}

@media (max-width: 960px) {
  .solution-card {
    margin-bottom: 24px;
  }
}
</style>
