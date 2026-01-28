<template>
  <section class="comparison-section section-padding">
    <div class="comparison-bg" aria-hidden="true">
      <div class="comparison-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="comparison-content">
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('whyOutsourcePage.comparison.title')"></h2>
      </div>

      <v-card :elevation="8" rounded="xl" class="comparison-card">
        <v-card-item class="pa-0">
          <v-table class="comparison-table">
            <thead>
              <tr>
                <th class="text-left comparison-header">
                  {{ $t('whyOutsourcePage.comparison.headers.criterion') }}
                </th>
                <th class="text-center comparison-header">
                  {{ $t('whyOutsourcePage.comparison.headers.internal') }}
                </th>
                <th class="text-center comparison-header comparison-header-highlight">
                  {{ $t('whyOutsourcePage.comparison.headers.external') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in comparisonData"
                :key="index"
                :class="{ 'comparison-row-highlight': index % 2 === 0 }"
              >
                <td class="comparison-criterion">
                  <strong>{{ row.criterion }}</strong>
                </td>
                <td class="text-center comparison-internal">
                  {{ row.internal }}
                </td>
                <td class="text-center comparison-external">
                  <strong>{{ row.external }}</strong>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const comparisonData = computed(() => {
  return tm('whyOutsourcePage.comparison.rows') || []
})
</script>

<style scoped>
.comparison-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.comparison-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.comparison-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: comparisonBgDrift 26s ease-in-out infinite alternate;
}

.comparison-content {
  position: relative;
  z-index: 1;
}

.comparison-shapes {
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

@keyframes comparisonBgDrift {
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

.comparison-card {
  overflow: hidden;
  background: white;
}

.comparison-table {
  width: 100%;
}

.comparison-header {
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white !important;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 20px 16px !important;
}

.comparison-header-highlight {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
}

.comparison-criterion {
  padding: 20px 24px !important;
  font-size: 1rem;
  background: #f5f5f5;
  border-right: 2px solid #e0e0e0;
}

.comparison-internal {
  padding: 20px 16px !important;
  font-size: 0.95rem;
  color: #616161;
}

.comparison-external {
  padding: 20px 16px !important;
  font-size: 0.95rem;
  color: #1a237e;
  background: rgba(76, 175, 80, 0.05);
}

.comparison-row-highlight {
  background: rgba(0, 0, 0, 0.02);
}

.comparison-row-highlight .comparison-external {
  background: rgba(76, 175, 80, 0.1);
}

@media (max-width: 960px) {
  .comparison-header,
  .comparison-criterion,
  .comparison-internal,
  .comparison-external {
    font-size: 0.875rem;
    padding: 12px 8px !important;
  }
}
</style>
