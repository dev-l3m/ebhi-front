<template>
  <section class="testimonials-section section-padding">
    <div class="testimonials-bg" aria-hidden="true">
      <div class="testimonials-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
      </div>
    </div>
    <v-container>
      <div class="section-header text-center mb-16 fade-in-up">
        <v-chip color="primary" variant="flat" size="large" class="mb-6 section-chip">
          <v-icon start>mdi-format-quote-open</v-icon>
          {{ $t('testimonials.title') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('testimonials.sectionTitle')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <v-row class="testimonials-grid">
        <v-col
          v-for="(testimonial, index) in testimonials"
          :key="index"
          cols="12"
          md="4"
          class="testimonial-col"
          :style="{ '--card-index': index }"
        >
          <v-card :elevation="8" class="testimonial-card h-100">
            <div class="testimonial-quote-icon">
              <v-icon color="primary" size="48" opacity="0.1">mdi-format-quote-open</v-icon>
            </div>
            <v-card-item class="pa-6">
              <div class="testimonial-rating mb-4">
                <v-icon v-for="i in 5" :key="i" color="warning" size="20"> mdi-star </v-icon>
              </div>
              <v-card-text class="pa-0 mb-6">
                <p
                  class="text-body-1 testimonial-text"
                  style="line-height: 1.8; font-style: italic"
                >
                  "{{ testimonial.text }}"
                </p>
              </v-card-text>
              <v-divider class="mb-4"></v-divider>
              <div class="d-flex align-center">
                <v-avatar :color="testimonial.color" size="56" class="mr-4">
                  <span class="text-h6 text-white font-weight-bold">{{
                    testimonial.initials
                  }}</span>
                </v-avatar>
                <div>
                  <div class="text-h6 font-weight-bold mb-1">{{ testimonial.name }}</div>
                  <div class="text-body-2 text-grey-darken-1">{{ testimonial.role }}</div>
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

const { t } = useI18n()

const testimonials = computed(() => [
  {
    name: t('testimonials.testimonial1.name'),
    role: t('testimonials.testimonial1.role'),
    text: t('testimonials.testimonial1.text'),
    initials: 'SB',
    color: 'primary'
  },
  {
    name: t('testimonials.testimonial2.name'),
    role: t('testimonials.testimonial2.role'),
    text: t('testimonials.testimonial2.text'),
    initials: 'RL',
    color: 'secondary'
  },
  {
    name: t('testimonials.testimonial3.name'),
    role: t('testimonials.testimonial3.role'),
    text: t('testimonials.testimonial3.text'),
    initials: 'ID',
    color: 'success'
  }
])
</script>

<style scoped>
.testimonials-section {
  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
  position: relative;
  overflow: hidden;
}

.testimonials-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.testimonials-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.05) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.05) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
}

.testimonials-shapes {
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
  width: 220px;
  height: 220px;
  top: 4%;
  left: -50px;
  animation-delay: 0s;
}

.shape-2 {
  width: 160px;
  height: 160px;
  top: 28%;
  right: -40px;
  animation-delay: 5s;
}

.shape-3 {
  width: 140px;
  height: 140px;
  bottom: 8%;
  left: 5%;
  animation-delay: 10s;
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

.testimonials-grid {
  margin-top: 40px;
}

.testimonial-col {
  margin-bottom: 32px;
}

.testimonial-card {
  border-radius: 24px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: calc(var(--card-index, 0) * 90ms);
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a237e, #3f51b5);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.testimonial-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 0%, rgba(26, 35, 126, 0.06) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.testimonial-card:hover::after {
  opacity: 1;
}

.testimonial-quote-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0.1;
  transition: all 0.4s ease;
}

.testimonial-card:hover .testimonial-quote-icon {
  opacity: 0.2;
  transform: scale(1.1);
}

.testimonial-rating {
  display: flex;
  gap: 4px;
}

.testimonial-text {
  color: #424242;
  position: relative;
  z-index: 1;
}

@media (max-width: 960px) {
  .testimonial-card {
    margin-bottom: 24px;
  }
}

@media (max-width: 600px) {
  .shape {
    display: none;
  }
}
</style>
