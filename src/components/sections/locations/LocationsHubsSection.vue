<template>
  <section class="locations-hubs-section section-padding">
    <div class="locations-hubs-bg" aria-hidden="true">
      <div class="locations-hubs-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="locations-hubs-content">
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('locationsPage.hubs.title')"></h2>
        <p class="section-subtitle mx-auto">
          {{ $t('locationsPage.hubs.subtitle') }}
        </p>
      </div>

      <v-row>
        <v-col v-for="(hub, index) in hubs" :key="index" cols="12" md="6" lg="4" class="hub-col">
          <v-card :elevation="8" class="hub-card h-100" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-center mb-4">
                <div class="hub-flag-wrapper mr-4">
                  <v-icon :color="hub.color" size="48">{{ hub.icon }}</v-icon>
                </div>
                <div class="flex-grow-1">
                  <v-card-title class="text-h5 mb-1 pa-0 hub-title">
                    {{ hub.city }}
                  </v-card-title>
                  <v-card-subtitle class="text-body-2 text-grey-darken-1 pa-0">
                    {{ hub.country }}
                  </v-card-subtitle>
                </div>
                <v-chip
                  v-if="hub.status === 'coming-soon'"
                  color="warning"
                  variant="flat"
                  size="small"
                >
                  {{ $t('locationsPage.hubs.status.comingSoon') }}
                </v-chip>
                <v-chip v-else color="success" variant="flat" size="small">
                  {{ $t('locationsPage.hubs.status.active') }}
                </v-chip>
              </div>
              <v-divider class="my-4"></v-divider>
              <v-card-text class="pa-0">
                <div class="hub-features">
                  <div
                    v-for="(feature, featureIndex) in hub.features"
                    :key="featureIndex"
                    class="hub-feature mb-2"
                  >
                    <v-icon :color="hub.color" size="20" class="mr-2">mdi-check-circle</v-icon>
                    <span class="text-body-2">{{ feature }}</span>
                  </div>
                </div>
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

const hubs = computed(() => {
  const hubsData = tm('locationsPage.hubs.hubs') || []
  const colors = [
    'primary',
    'primary',
    'secondary',
    'success',
    'info',
    'info',
    'warning',
    'warning',
    'warning'
  ]
  return hubsData.map((hub, index) => ({
    city: hub.city,
    country: hub.country,
    color: colors[index] || 'primary',
    icon: 'mdi-map-marker',
    status: hub.status || 'active',
    features: hub.features || []
  }))
})
</script>

<style scoped>
.locations-hubs-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.locations-hubs-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.locations-hubs-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: locationsHubsBgDrift 26s ease-in-out infinite alternate;
}

.locations-hubs-content {
  position: relative;
  z-index: 1;
}

.locations-hubs-shapes {
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

@keyframes locationsHubsBgDrift {
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

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #616161;
  max-width: 700px;
  line-height: 1.6;
}

.hub-col {
  margin-bottom: 32px;
}

.hub-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.hub-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.hub-flag-wrapper {
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

.hub-card:hover .hub-flag-wrapper {
  transform: scale(1.1);
  background: rgba(26, 35, 126, 0.15);
}

.hub-title {
  font-weight: 700;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.hub-features {
  margin-top: 16px;
}

.hub-feature {
  display: flex;
  align-items: center;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .hub-card {
    margin-bottom: 24px;
  }
}
</style>
