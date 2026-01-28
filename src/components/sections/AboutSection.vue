<template>
  <section id="about" class="about-section section-padding">
    <div class="about-bg" aria-hidden="true">
      <div class="about-shapes">
        <span class="about-shape shape-1"></span>
        <span class="about-shape shape-2"></span>
        <span class="about-shape shape-3"></span>
        <span class="about-shape shape-4"></span>
      </div>
    </div>
    <v-container class="about-container">
      <v-row align="center" class="about-row">
        <v-col cols="12" md="6" class="about-content-col">
          <v-chip color="primary" variant="flat" size="large" class="mb-6">
            <v-icon start>mdi-information</v-icon>
            {{ $t('about.title') }}
          </v-chip>
          <h2 class="about-title mb-4">{{ $t('about.whoAreWe') }}</h2>
          <div class="about-subtitle text-primary mb-6">
            {{ $t('about.subtitle') }}
          </div>
          <div class="about-text">
            <p
              class="text-body-1 mb-4"
              style="line-height: 1.8"
              v-html="$t('about.description1')"
            ></p>
            <p
              class="text-body-1 mb-4"
              style="line-height: 1.8"
              v-html="$t('about.description2')"
            ></p>
            <p
              class="text-body-1 mb-8"
              style="line-height: 1.8"
              v-html="$t('about.description3')"
            ></p>
            <v-btn
              color="primary"
              size="x-large"
              variant="elevated"
              rounded="xl"
              class="about-cta-btn"
              @click="scrollToContact"
            >
              <v-icon start class="cta-btn-icon">mdi-calendar-clock</v-icon>
              <span class="cta-btn-text">{{ $t('about.cta') }}</span>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="about-sectors-col">
          <v-card :elevation="12" class="sectors-card" rounded="xl">
            <v-card-item class="pa-8">
              <div class="sectors-header text-center mb-8">
                <v-icon color="primary" size="48" class="sectors-header-icon mb-4"
                  >mdi-domain</v-icon
                >
                <div class="sectors-title font-weight-bold mb-2">
                  {{ $t('about.sectors.title') }}
                </div>
                <p class="sectors-subtitle text-grey-darken-1">
                  {{ $t('about.sectors.subtitle') }}
                </p>
              </div>
              <v-row class="sectors-grid">
                <v-col v-for="(sector, index) in sectors" :key="index" cols="6" class="sector-item">
                  <div class="sector-card">
                    <div
                      class="sector-icon-wrapper"
                      :style="{ background: getSectorGradient(sector.color) }"
                    >
                      <v-icon :color="sector.color" size="32">
                        {{ sector.icon }}
                      </v-icon>
                    </div>
                    <div class="sector-name font-weight-medium mt-3 text-center">
                      {{ sector.name }}
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-divider class="my-6"></v-divider>
              <p class="sectors-footer text-center text-grey-darken-1">
                {{ $t('about.sectors.footer') }}
              </p>
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

const { t } = useI18n()

const sectors = computed(() => [
  { name: t('about.sectors.technology'), icon: 'mdi-laptop', color: 'primary' },
  { name: t('about.sectors.design'), icon: 'mdi-palette', color: 'secondary' },
  { name: t('about.sectors.commerce'), icon: 'mdi-store', color: 'success' },
  { name: t('about.sectors.engineering'), icon: 'mdi-cog', color: 'info' },
  { name: t('about.sectors.chemistry'), icon: 'mdi-flask', color: 'warning' },
  { name: t('about.sectors.marketing'), icon: 'mdi-bullhorn', color: 'error' }
])

const getSectorGradient = color => {
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

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.about-section {
  background: linear-gradient(to bottom, #ffffff 0%, #f5f7fb 100%);
  position: relative;
  overflow: hidden;
}

.about-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.about-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 10% 20%, rgba(26, 35, 126, 0.08) 0%, transparent 55%),
    radial-gradient(circle at 90% 30%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 90%, rgba(76, 175, 80, 0.05) 0%, transparent 55%);
}

.about-shapes {
  position: absolute;
  inset: 0;
}

.about-shape {
  position: absolute;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
  animation: about-float 18s ease-in-out infinite;
  opacity: 0.8;
}

.about-shape.shape-1 {
  width: 220px;
  height: 220px;
  top: -60px;
  left: -40px;
}

.about-shape.shape-2 {
  width: 180px;
  height: 180px;
  top: 30%;
  right: -80px;
}

.about-shape.shape-3 {
  width: 160px;
  height: 160px;
  bottom: -70px;
  left: 25%;
}

.about-shape.shape-4 {
  width: 120px;
  height: 120px;
  bottom: 10%;
  right: 20%;
}

.about-container {
  position: relative;
  z-index: 1;
}

.about-row {
  min-height: 600px;
}

.about-row {
  min-height: 600px;
}

.about-content-col {
  padding-right: 48px;
}

.about-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.about-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
}

.about-text {
  color: #424242;
}

.about-cta-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 16px rgba(26, 35, 126, 0.3) !important;
  transition: all 0.3s ease;
}

.about-cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(26, 35, 126, 0.4) !important;
}

.about-sectors-col {
  padding-left: 48px;
}

.sectors-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.sectors-grid {
  margin-top: 24px;
}

.sector-item {
  margin-bottom: 24px;
}

.sector-card {
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 12px;
}

.sector-card:hover {
  transform: translateY(-4px);
}

.sector-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.sector-card:hover .sector-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

/* CTA Button Styles */
.cta-btn-icon {
  flex-shrink: 0;
  margin-right: 8px;
}

.cta-btn-text {
  white-space: normal;
  line-height: 1.3;
}

/* Sectors Card Styles */
.sectors-header-icon {
  transition: all 0.3s ease;
}

.sectors-title {
  font-size: 1.75rem;
  line-height: 1.3;
  word-wrap: break-word;
}

.sectors-subtitle {
  font-size: 1rem;
  line-height: 1.5;
}

.sector-name {
  font-size: 1rem;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.sectors-footer {
  font-size: 0.9375rem;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@keyframes about-float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-12px) translateX(8px);
  }
}

@media (max-width: 960px) {
  .about-content-col,
  .about-sectors-col {
    padding: 0;
    margin-bottom: 48px;
  }

  .about-content-col {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .about-text {
    text-align: left;
  }

  .about-shape {
    opacity: 0.5;
  }

  .about-row {
    min-height: auto;
  }

  .about-title {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    margin-bottom: 16px;
  }

  .about-subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    margin-bottom: 24px;
  }

  .about-text .text-body-1 {
    font-size: 0.9375rem !important;
    line-height: 1.7;
    margin-bottom: 16px !important;
  }

  .about-cta-btn {
    font-size: 0.9375rem !important;
    min-height: 52px !important;
    padding: 14px 24px !important;
    width: 100%;
  }

  .cta-btn-icon {
    font-size: 20px !important;
  }

  .sectors-card .v-card-item {
    padding: 24px !important;
  }

  .sectors-header {
    margin-bottom: 24px;
  }

  .sectors-header-icon {
    font-size: 40px !important;
    margin-bottom: 16px !important;
  }

  .sectors-title {
    font-size: 1.5rem !important;
    margin-bottom: 8px !important;
  }

  .sectors-subtitle {
    font-size: 0.9375rem !important;
  }

  .sector-icon-wrapper {
    width: 56px;
    height: 56px;
  }

  .sector-icon-wrapper .v-icon {
    font-size: 28px !important;
  }

  .sector-name {
    font-size: 0.9375rem !important;
    margin-top: 12px !important;
  }

  .sectors-footer {
    font-size: 0.875rem !important;
    line-height: 1.5;
  }
}

@media (max-width: 600px) {
  .about-content-col,
  .about-sectors-col {
    margin-bottom: 32px;
  }

  .about-shape {
    display: none;
  }

  .about-title {
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: 12px;
  }

  .about-subtitle {
    font-size: clamp(1rem, 3vw, 1.25rem);
    margin-bottom: 20px;
  }

  .about-text .text-body-1 {
    font-size: 0.875rem !important;
    line-height: 1.6;
    margin-bottom: 12px !important;
  }

  .about-cta-btn {
    font-size: 0.875rem !important;
    min-height: 48px !important;
    padding: 12px 20px !important;
    border-radius: 12px !important;
  }

  .cta-btn-icon {
    font-size: 18px !important;
    margin-right: 6px !important;
  }

  .sectors-card .v-card-item {
    padding: 20px 16px !important;
  }

  .sectors-header {
    margin-bottom: 20px;
  }

  .sectors-header-icon {
    font-size: 36px !important;
    margin-bottom: 12px !important;
  }

  .sectors-title {
    font-size: 1.25rem !important;
    margin-bottom: 6px !important;
  }

  .sectors-subtitle {
    font-size: 0.875rem !important;
  }

  .sectors-grid {
    margin-top: 16px !important;
  }

  .sector-item {
    margin-bottom: 16px !important;
  }

  .sector-card {
    padding: 6px;
  }

  .sector-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }

  .sector-icon-wrapper .v-icon {
    font-size: 24px !important;
  }

  .sector-name {
    font-size: 0.875rem !important;
    margin-top: 10px !important;
  }

  .v-divider {
    margin: 20px 0 !important;
  }

  .sectors-footer {
    font-size: 0.8125rem !important;
    line-height: 1.5;
  }
}
</style>
