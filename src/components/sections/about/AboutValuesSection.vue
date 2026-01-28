<template>
  <section class="about-values-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-heart</v-icon>
          {{ $t('aboutPage.values.chip') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('aboutPage.values.title')"></h2>
      </div>

      <v-row>
        <v-col
          v-for="(value, index) in values"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="value-col"
        >
          <v-card :elevation="8" class="value-card h-100" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-start">
                <div class="value-icon-wrapper mr-4">
                  <v-icon :color="value.color" size="40">{{ value.icon }}</v-icon>
                </div>
                <div class="flex-grow-1">
                  <v-card-title class="text-h6 mb-2 pa-0 value-title">
                    {{ value.title }}
                  </v-card-title>
                  <v-card-text class="text-body-2 text-grey-darken-1 pa-0 value-description">
                    {{ value.description }}
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

const values = computed(() => {
  const valuesData = tm('aboutPage.values.values') || []
  const icons = [
    'mdi-star',
    'mdi-eye',
    'mdi-briefcase',
    'mdi-lock',
    'mdi-lightning-bolt',
    'mdi-trending-up',
    'mdi-trophy',
    'mdi-shield-check',
    'mdi-leaf'
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
  return valuesData.map((value, index) => ({
    title: value.title,
    description: value.description,
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})
</script>

<style scoped>
.about-values-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.about-values-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.about-values-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: aboutValuesBgDrift 26s ease-in-out infinite alternate;
}

.about-values-content {
  position: relative;
  z-index: 1;
}

.about-values-shapes {
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

@keyframes aboutValuesBgDrift {
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

.value-col {
  margin-bottom: 32px;
}

.value-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.value-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(26, 35, 126, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon-wrapper {
  transform: scale(1.1);
  background: rgba(26, 35, 126, 0.15);
}

.value-title {
  font-weight: 700;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
}

.value-description {
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }

  .value-card {
    margin-bottom: 24px;
  }

  .value-card .v-card-item {
    padding: 20px !important;
  }

  .value-icon-wrapper {
    width: 56px;
    height: 56px;
  }

  .value-icon-wrapper .v-icon {
    font-size: 36px !important;
  }

  .value-title {
    font-size: 1.125rem !important;
    line-height: 1.3;
    margin-bottom: 8px !important;
  }

  .value-description {
    font-size: 0.9375rem !important;
    line-height: 1.5;
  }
}

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: clamp(1.5rem, 6vw, 2rem) !important;
    margin-bottom: 24px;
  }

  .value-col {
    margin-bottom: 16px;
  }

  .value-card {
    margin-bottom: 16px;
  }

  .value-card .v-card-item {
    padding: 16px !important;
  }

  .value-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    margin-right: 12px !important;
  }

  .value-icon-wrapper .v-icon {
    font-size: 32px !important;
  }

  .value-title {
    font-size: 1rem !important;
    line-height: 1.3;
    margin-bottom: 6px !important;
    min-height: auto !important;
  }

  .value-description {
    font-size: 0.875rem !important;
    line-height: 1.5;
  }
}
</style>
