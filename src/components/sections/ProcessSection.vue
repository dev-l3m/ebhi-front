<template>
  <section class="process-section section-padding">
    <div class="process-bg" aria-hidden="true">
      <div class="process-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="process-container">
      <div class="section-header text-center mb-16 fade-in-up">
        <v-chip color="primary" variant="flat" size="large" class="mb-6 section-chip">
          <v-icon start>mdi-cog</v-icon>
          {{ $t('process.title') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('process.sectionTitle')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('process.subtitle') }}
        </p>
      </div>

      <v-row class="process-grid">
        <v-col
          v-for="(process, index) in processes"
          :key="index"
          cols="12"
          md="6"
          lg="3"
          class="process-col"
          :style="{ '--card-index': index }"
        >
          <div class="process-number-wrapper">
            <div class="process-number" :class="`process-number-${process.color}`">
              {{ index + 1 }}
            </div>
            <div class="process-number-bg" :class="`process-number-bg-${process.color}`"></div>
          </div>
          <v-card
            :elevation="8"
            class="process-card h-100"
            :class="`process-card-${process.color}`"
            @click="openDialog(process)"
          >
            <v-card-item class="pa-6 text-center">
              <v-icon :color="process.color" size="56" class="mb-4 process-icon">
                {{ process.icon }}
              </v-icon>
              <v-card-title class="text-body-2 mb-2 process-title process-card-title">
                {{ process.title }}
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 process-description">
                {{ process.shortDescription }}
              </v-card-text>
            </v-card-item>
            <v-card-actions class="pa-6 pt-0 justify-center">
              <v-btn :color="process.color" variant="text" class="process-btn">
                {{ $t('process.viewDetails') }}
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Dialog amélioré -->
      <v-dialog v-model="dialog" max-width="900" scrollable>
        <v-card v-if="selectedProcess" class="process-dialog">
          <v-card-title
            class="text-h4 pa-6 d-flex align-center justify-space-between process-dialog-header"
          >
            <div class="d-flex align-center process-dialog-title-wrapper">
              <v-icon :color="selectedProcess.color" size="32" class="mr-3 process-dialog-icon">
                {{ selectedProcess.icon }}
              </v-icon>
              <span class="process-dialog-title-text">{{ selectedProcess.title }}</span>
            </div>
            <v-btn icon variant="text" @click="dialog = false" class="close-btn">
              <v-icon size="24">mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-6 process-dialog-content">
            <div class="text-h6 mb-4 text-primary process-dialog-description">
              {{ selectedProcess.description }}
            </div>
            <p class="text-body-1 process-dialog-details" style="line-height: 1.8; color: #424242">
              {{ selectedProcess.details }}
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-6">
            <v-spacer></v-spacer>
            <v-btn
              :color="selectedProcess.color"
              variant="elevated"
              size="large"
              @click="dialog = false"
            >
              {{ $t('process.understood') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const dialog = ref(false)
const selectedProcess = ref(null)

const processes = computed(() => [
  {
    title: t('process.steps.step1.title'),
    shortDescription: t('process.steps.step1.shortDescription'),
    description: t('process.steps.step1.description'),
    details: t('process.steps.step1.details'),
    color: 'primary',
    icon: 'mdi-magnify'
  },
  {
    title: t('process.steps.step2.title'),
    shortDescription: t('process.steps.step2.shortDescription'),
    description: t('process.steps.step2.description'),
    details: t('process.steps.step2.details'),
    color: 'secondary',
    icon: 'mdi-account-search'
  },
  {
    title: t('process.steps.step3.title'),
    shortDescription: t('process.steps.step3.shortDescription'),
    description: t('process.steps.step3.description'),
    details: t('process.steps.step3.details'),
    color: 'success',
    icon: 'mdi-office-building'
  },
  {
    title: t('process.steps.step4.title'),
    shortDescription: t('process.steps.step4.shortDescription'),
    description: t('process.steps.step4.description'),
    details: t('process.steps.step4.details'),
    color: 'info',
    icon: 'mdi-file-document-edit'
  }
])

const openDialog = process => {
  selectedProcess.value = process
  dialog.value = true
}
</script>

<style scoped>
.process-section {
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.process-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.process-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
}

.process-shapes {
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

.section-header {
  margin-bottom: 80px;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-chip {
  box-shadow: 0 10px 28px rgba(26, 35, 126, 0.18);
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

.process-grid {
  margin-top: 40px;
}

.process-col {
  margin-bottom: 32px;
}

.process-card {
  border-radius: 24px !important;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: calc(var(--card-index, 0) * 80ms);
}

.process-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(26, 35, 126, 0.06) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.process-card:hover {
  transform: translateY(-16px) scale(1.02);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
}

.process-card:hover::after {
  opacity: 1;
}

.process-card-primary:hover {
  border-color: #1a237e;
}

.process-card-secondary:hover {
  border-color: #283593;
}

.process-card-success:hover {
  border-color: #4caf50;
}

.process-card-info:hover {
  border-color: #2196f3;
}

.process-number-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 0;
  margin-bottom: -40px;
}

.process-number {
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

.process-number-primary {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
}

.process-number-secondary {
  background: linear-gradient(135deg, #283593 0%, #3949ab 100%);
}

.process-number-success {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
}

.process-number-info {
  background: linear-gradient(135deg, #2196f3 0%, #42a5f5 100%);
}

.process-col:hover .process-number {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.process-number-bg {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1;
  animation: pulse 2s ease-in-out infinite;
}

.process-number-bg-primary {
  background: #1a237e;
  opacity: 0.15;
}

.process-number-bg-secondary {
  background: #283593;
  opacity: 0.15;
}

.process-number-bg-success {
  background: #4caf50;
  opacity: 0.15;
}

.process-number-bg-info {
  background: #2196f3;
  opacity: 0.15;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.05;
  }
}

.process-icon {
  transition: all 0.4s ease;
  margin-top: 30px;
}

.process-card:hover .process-icon {
  transform: scale(1.2);
}

.process-title {
  font-weight: 700;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.process-description {
  min-height: 60px;
  line-height: 1.6;
}

.process-btn {
  font-weight: 600;
  transition: all 0.3s ease;
}

.process-card:hover .process-btn {
  transform: translateX(8px);
}

/* Dialog */
.process-dialog {
  border-radius: 16px !important;
}

.process-dialog-header {
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
}

.close-btn {
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: rotate(90deg);
}

@media (max-width: 960px) {
  .process-card {
    margin-bottom: 48px;
  }

  .process-number-wrapper {
    margin-top: 0;
    margin-bottom: -32px;
  }

  .process-number {
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
  }
}

@media (max-width: 600px) {
  .shape {
    display: none;
  }

  .process-card-title {
    font-size: 1rem !important;
    line-height: 1.3 !important;
    min-height: auto !important;
  }

  .process-description {
    font-size: 0.8125rem !important;
  }

  .process-icon {
    font-size: 40px !important;
  }

  .process-number {
    width: 56px;
    height: 56px;
    font-size: 1.25rem;
  }

  .process-dialog-header {
    padding: 16px !important;
    flex-wrap: wrap;
  }

  .process-dialog-title-wrapper {
    flex-wrap: wrap;
    flex: 1;
    min-width: 0;
  }

  .process-dialog-title-text {
    font-size: 1.125rem !important;
    line-height: 1.3 !important;
    word-wrap: break-word;
    flex: 1;
    min-width: 0;
  }

  .process-dialog-icon {
    font-size: 24px !important;
    margin-right: 8px !important;
    flex-shrink: 0;
  }

  .process-dialog-content {
    padding: 16px !important;
  }

  .process-dialog-description {
    font-size: 1rem !important;
    line-height: 1.5 !important;
    margin-bottom: 12px !important;
  }

  .process-dialog-details {
    font-size: 0.875rem !important;
    line-height: 1.6 !important;
  }

  .v-card-actions {
    padding: 16px !important;
  }

  .v-card-actions .v-btn {
    font-size: 0.875rem !important;
    min-width: auto !important;
  }
}
</style>
