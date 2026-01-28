<template>
  <section class="locations-hubs-section section-padding bg-grey-lighten-5">
    <v-container>
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
