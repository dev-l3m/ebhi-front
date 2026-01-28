<template>
  <section class="what-we-do-about-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('aboutPage.whatWeDo.title')"></h2>
      </div>

      <v-row>
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="service-col"
        >
          <v-card :elevation="8" class="service-card h-100" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-start mb-4">
                <v-icon :color="service.color" size="48" class="mr-4 flex-shrink-0">
                  {{ service.icon }}
                </v-icon>
                <v-card-title
                  class="text-h5 pa-0 service-title"
                  style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
                >
                  {{ service.title }}
                </v-card-title>
              </div>
              <v-card-text class="pa-0">
                <ul class="service-list">
                  <li
                    v-for="(item, itemIndex) in service.items"
                    :key="itemIndex"
                    class="service-list-item mb-2"
                  >
                    <v-icon :color="service.color" size="20" class="mr-2">mdi-circle-small</v-icon>
                    <span>{{ item }}</span>
                  </li>
                </ul>
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

const services = computed(() => {
  const servicesData = tm('aboutPage.whatWeDo.services') || []
  const icons = ['mdi-account-group', 'mdi-web', 'mdi-cog', 'mdi-office-building']
  const colors = ['primary', 'secondary', 'success', 'info']
  return servicesData.map((service, index) => ({
    title: service.title,
    items: service.items,
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})
</script>

<style scoped>
.what-we-do-about-section {
  background: white;
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

.service-col {
  margin-bottom: 32px;
}

.service-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.service-title {
  font-weight: 700;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: clamp(1.125rem, 1.75vw, 1.5rem);
  min-height: auto;
  flex: 1;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list-item {
  display: flex;
  align-items: flex-start;
  line-height: 1.7;
  color: #424242;
}

@media (max-width: 960px) {
  .service-card {
    margin-bottom: 24px;
  }
}
</style>
