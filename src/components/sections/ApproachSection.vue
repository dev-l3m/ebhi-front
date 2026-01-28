<template>
  <section class="approach-section section-padding">
    <div class="approach-bg" aria-hidden="true">
      <div class="approach-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
      </div>
    </div>
    <v-container>
      <div class="section-header text-center mb-16 fade-in-up">
        <v-chip color="primary" variant="flat" size="large" class="mb-6 section-chip">
          <v-icon start>mdi-lightbulb-on</v-icon>
          {{ $t('approach.title') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('approach.sectionTitle')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('approach.subtitle') }}
        </p>
      </div>

      <!-- Timeline moderne -->
      <div class="timeline-container mb-16">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="timeline-item"
          :class="{ 'timeline-item-reverse': index % 2 === 1 }"
          :style="{ '--step-index': index }"
        >
          <div class="timeline-content">
            <div class="timeline-number">{{ index + 1 }}</div>
            <v-card
              :elevation="8"
              class="timeline-card"
              :style="{ borderLeft: `4px solid var(--v-${step.color}-base)` }"
            >
              <v-card-item class="pa-6">
                <div class="timeline-card-header">
                  <v-icon :color="step.color" size="32" class="timeline-card-icon">{{
                    step.icon
                  }}</v-icon>
                  <v-card-title class="pa-0 approach-step-title">{{ step.title }}</v-card-title>
                </div>
                <v-card-text class="pa-0 text-body-1">
                  {{ step.description }}
                </v-card-text>
              </v-card-item>
            </v-card>
          </div>
        </div>
      </div>

      <!-- Piliers EBHI -->
      <div class="pillars-section">
        <div class="text-center mb-12">
          <h3 class="text-h4 font-weight-bold mb-4">{{ $t('approach.pillars.title') }}</h3>
          <p class="text-body-1 text-grey-darken-1">
            {{ $t('approach.pillars.subtitle') }}
          </p>
        </div>
        <v-row>
          <v-col
            v-for="(pillar, index) in pillars"
            :key="index"
            cols="12"
            md="6"
            lg="3"
            :style="{ '--pillar-index': index }"
          >
            <v-card :elevation="8" class="pillar-card h-100" :class="`pillar-${pillar.color}`">
              <v-card-item class="pa-6 text-center">
                <div class="pillar-letter mb-4">{{ pillar.letter }}</div>
                <v-card-title class="text-h6 mb-3 pillar-title">{{ pillar.title }}</v-card-title>
                <v-card-text class="text-body-2 pillar-description" style="line-height: 1.6">
                  {{ pillar.description }}
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  {
    title: t('approach.steps.step1.title'),
    description: t('approach.steps.step1.description'),
    color: 'primary',
    icon: 'mdi-chart-line'
  },
  {
    title: t('approach.steps.step2.title'),
    description: t('approach.steps.step2.description'),
    color: 'secondary',
    icon: 'mdi-file-tree'
  },
  {
    title: t('approach.steps.step3.title'),
    description: t('approach.steps.step3.description'),
    color: 'success',
    icon: 'mdi-account-multiple'
  },
  {
    title: t('approach.steps.step4.title'),
    description: t('approach.steps.step4.description'),
    color: 'info',
    icon: 'mdi-sync'
  }
])

const pillars = computed(() => [
  {
    letter: 'E',
    title: t('approach.pillars.e.title'),
    description: t('approach.pillars.e.description'),
    color: 'primary'
  },
  {
    letter: 'B',
    title: t('approach.pillars.b.title'),
    description: t('approach.pillars.b.description'),
    color: 'secondary'
  },
  {
    letter: 'H',
    title: t('approach.pillars.h.title'),
    description: t('approach.pillars.h.description'),
    color: 'success'
  },
  {
    letter: 'I',
    title: t('approach.pillars.i.title'),
    description: t('approach.pillars.i.description'),
    color: 'info'
  }
])
</script>

<style scoped>
.approach-section {
  background: white;
  position: relative;
  overflow: hidden;
}

.approach-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.approach-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 22%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 86% 30%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 88%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
}

.approach-shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
  animation: float 18s ease-in-out infinite;
  opacity: 0.75;
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
  top: 28%;
  right: -50px;
  animation-delay: 6s;
}

.shape-3 {
  width: 140px;
  height: 140px;
  bottom: 10%;
  left: 10%;
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

.section-chip {
  box-shadow: 0 10px 28px rgba(26, 35, 126, 0.18);
}

/* Timeline moderne */
.timeline-container {
  position: relative;
  padding: 40px 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 32px;
  width: 2px;
  background: linear-gradient(to bottom, rgba(26, 35, 126, 0.25), rgba(63, 81, 181, 0.15));
  border-radius: 2px;
}

.timeline-container::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 24px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid rgba(26, 35, 126, 0.35);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.timeline-item {
  display: flex;
  margin-bottom: 60px;
  position: relative;
  animation: fadeInUp 0.7s ease-out both;
  animation-delay: calc(var(--step-index, 0) * 90ms);
}

.timeline-content {
  flex: 1;
  position: relative;
  padding-left: 80px;
}

.timeline-item-reverse .timeline-content {
  padding-left: 0;
  padding-right: 80px;
}

.timeline-number {
  position: absolute;
  left: 0;
  top: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: 0 8px 16px rgba(26, 35, 126, 0.3);
  z-index: 2;
  border: 4px solid rgba(255, 255, 255, 0.9);
}

.timeline-item-reverse .timeline-number {
  left: auto;
  right: 0;
}

.timeline-card {
  border-radius: 16px !important;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.timeline-card:hover {
  transform: translateX(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.timeline-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 0%, rgba(26, 35, 126, 0.06) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.timeline-card:hover::after {
  opacity: 1;
}

.timeline-item-reverse .timeline-card:hover {
  transform: translateX(-8px);
}

/* Piliers */
.pillars-section {
  margin-top: 80px;
  padding-top: 60px;
  border-top: 2px solid #e0e0e0;
}

.pillar-card {
  border-radius: 20px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
  border-top: 4px solid white;
  animation: fadeInUp 0.7s ease-out both;
  animation-delay: calc(var(--pillar-index, 0) * 90ms);
}

.pillar-primary {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%) !important;
}

.pillar-secondary {
  background: linear-gradient(135deg, #283593 0%, #3949ab 100%) !important;
}

.pillar-success {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%) !important;
}

.pillar-info {
  background: linear-gradient(135deg, #2196f3 0%, #42a5f5 100%) !important;
}

.pillar-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
}

.pillar-letter {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.pillar-title {
  color: white !important;
  font-weight: 700 !important;
}

.pillar-description {
  color: white !important;
  opacity: 0.95 !important;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 960px) {
  .timeline-container::before,
  .timeline-container::after {
    left: 24px;
  }

  .timeline-content {
    padding-left: 60px;
  }

  .timeline-item-reverse .timeline-content {
    padding-right: 60px;
  }

  .timeline-number {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
}

/* Timeline Card Header */
.timeline-card-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.timeline-card-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.approach-step-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  flex: 1;
  min-width: 0;
}

@media (max-width: 960px) {
  .timeline-card-header {
    gap: 10px;
  }

  .timeline-card-icon {
    font-size: 28px !important;
  }

  .approach-step-title {
    font-size: 1.25rem !important;
  }

  .timeline-card .v-card-item {
    padding: 20px !important;
  }
}

@media (max-width: 600px) {
  .shape {
    display: none;
  }

  .timeline-content {
    padding-left: 50px;
  }

  .timeline-item-reverse .timeline-content {
    padding-right: 50px;
  }

  .timeline-number {
    width: 40px;
    height: 40px;
    font-size: 1.125rem;
  }

  .timeline-card .v-card-item {
    padding: 16px !important;
  }

  .timeline-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 12px;
  }

  .timeline-card-icon {
    font-size: 24px !important;
    margin-top: 0;
  }

  .approach-step-title {
    font-size: 1.125rem !important;
    line-height: 1.3 !important;
    width: 100%;
  }

  .timeline-card .v-card-text {
    font-size: 0.875rem !important;
    line-height: 1.5 !important;
  }

  .pillar-title {
    font-size: 1rem !important;
  }

  .pillar-description {
    font-size: 0.8125rem !important;
  }

  .pillar-letter {
    font-size: 3rem !important;
  }
}
</style>
