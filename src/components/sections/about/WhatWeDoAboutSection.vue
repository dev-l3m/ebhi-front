<template>
  <section class="what-we-do-about-section section-padding">
    <div class="what-we-do-about-bg" aria-hidden="true">
      <div class="what-we-do-about-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="what-we-do-about-content">
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
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.what-we-do-about-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.what-we-do-about-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: whatWeDoAboutBgDrift 26s ease-in-out infinite alternate;
}

.what-we-do-about-content {
  position: relative;
  z-index: 1;
}

.what-we-do-about-shapes {
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

@keyframes whatWeDoAboutBgDrift {
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
