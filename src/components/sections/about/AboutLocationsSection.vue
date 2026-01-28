<template>
  <section class="about-locations-section section-padding">
    <div class="about-locations-bg" aria-hidden="true">
      <div class="about-locations-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="about-locations-content">
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('aboutPage.locations.title')"></h2>
        <p
          class="section-description text-grey-darken-1 mx-auto"
          v-html="$t('aboutPage.locations.description')"
        ></p>
        <p
          class="section-highlight font-weight-bold text-primary mt-6"
          v-html="$t('aboutPage.locations.highlight')"
        ></p>
      </div>

      <v-row>
        <v-col
          v-for="(location, index) in locations"
          :key="index"
          cols="6"
          md="4"
          lg="2"
          class="location-col"
        >
          <v-card :elevation="8" class="location-card text-center" rounded="xl">
            <v-card-item class="pa-6">
              <v-icon :color="location.color" size="48" class="mb-3">
                {{ location.icon }}
              </v-icon>
              <v-card-title class="text-body-1 font-weight-bold pa-0 location-title">
                {{ location.name }}
              </v-card-title>
              <v-card-text class="location-country text-grey-darken-1 pa-0 mt-2">
                {{ location.country }}
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

const locations = computed(() => {
  const locs = tm('aboutPage.locations.locations') || []
  const colors = ['primary', 'primary', 'secondary', 'success', 'info', 'info']
  return locs.map((loc, index) => ({
    name: loc.name,
    country: loc.country,
    color: colors[index] || 'primary',
    icon: 'mdi-map-marker'
  }))
})
</script>

<style scoped>
.about-locations-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.about-locations-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.about-locations-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: aboutLocationsBgDrift 26s ease-in-out infinite alternate;
}

.about-locations-content {
  position: relative;
  z-index: 1;
}

.about-locations-shapes {
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

@keyframes aboutLocationsBgDrift {
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

.location-col {
  margin-bottom: 24px;
}

.location-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.location-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1) !important;
}

.location-title {
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
}

.section-description {
  font-size: 1.25rem;
  line-height: 1.8;
  max-width: 800px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.section-highlight {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.6;
}

.location-country {
  font-size: 0.75rem;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }

  .section-description {
    font-size: 1.125rem !important;
    line-height: 1.7;
  }

  .section-highlight {
    font-size: 1.125rem !important;
    line-height: 1.6;
    margin-top: 24px !important;
  }

  .location-card {
    margin-bottom: 16px;
  }

  .location-card .v-card-item {
    padding: 20px !important;
  }

  .location-card .v-icon {
    font-size: 40px !important;
  }

  .location-title {
    font-size: 0.9375rem !important;
    line-height: 1.3;
  }

  .location-country {
    font-size: 0.6875rem !important;
  }
}

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: clamp(1.5rem, 6vw, 2rem) !important;
    margin-bottom: 20px;
  }

  .section-description {
    font-size: 0.9375rem !important;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .section-highlight {
    font-size: 0.9375rem !important;
    line-height: 1.5;
    margin-top: 20px !important;
  }

  .location-col {
    margin-bottom: 12px;
  }

  .location-card {
    margin-bottom: 12px;
  }

  .location-card .v-card-item {
    padding: 16px 12px !important;
  }

  .location-card .v-icon {
    font-size: 36px !important;
    margin-bottom: 8px !important;
  }

  .location-title {
    font-size: 0.875rem !important;
    line-height: 1.3;
    min-height: auto !important;
  }

  .location-country {
    font-size: 0.625rem !important;
    line-height: 1.3;
    margin-top: 4px !important;
  }
}
</style>
