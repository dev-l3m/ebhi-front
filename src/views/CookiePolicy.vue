<template>
  <div class="cookie-policy-page">
    <AppHeader />
    <div class="page-header">
      <v-container>
        <div class="header-content">
          <v-icon color="white" size="64" class="header-icon">mdi-cookie</v-icon>
          <h1 class="page-title">{{ $t('cookiePolicy.title') }}</h1>
          <p class="page-subtitle">{{ $t('cookiePolicy.subtitle') }}</p>
        </div>
      </v-container>
    </div>
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="10" lg="8" class="mx-auto">
          <v-card
            :elevation="8"
            rounded="xl"
            class="policy-card mb-6"
            :style="{ '--card-index': 1 }"
          >
            <v-card-item class="pa-6">
              <div class="card-header mb-4">
                <div class="card-icon-wrapper">
                  <v-icon color="primary" size="32">mdi-help-circle</v-icon>
                </div>
                <h2 class="text-h5 font-weight-bold">{{ $t('cookiePolicy.section1.title') }}</h2>
              </div>
              <p class="text-body-1" style="line-height: 1.8">
                {{ $t('cookiePolicy.section1.content') }}
              </p>
            </v-card-item>
          </v-card>

          <v-card
            :elevation="8"
            rounded="xl"
            class="policy-card mb-6"
            :style="{ '--card-index': 2 }"
          >
            <v-card-item class="pa-6">
              <div class="card-header mb-4">
                <div class="card-icon-wrapper">
                  <v-icon color="secondary" size="32">mdi-lightbulb-on</v-icon>
                </div>
                <h2 class="text-h5 font-weight-bold">
                  {{ $t('cookiePolicy.section2.title') }}
                </h2>
              </div>
              <p class="text-body-1 mb-4" style="line-height: 1.8">
                {{ $t('cookiePolicy.section2.intro') }}
              </p>
              <ul class="text-body-1 cookie-list" style="line-height: 1.8">
                <li v-for="(item, index) in section2Items" :key="index" class="cookie-list-item">
                  <v-icon color="primary" size="20" class="list-icon">mdi-check-circle</v-icon>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </v-card-item>
          </v-card>

          <v-card
            :elevation="8"
            rounded="xl"
            class="policy-card mb-6"
            :style="{ '--card-index': 3 }"
          >
            <v-card-item class="pa-6">
              <div class="card-header mb-4">
                <div class="card-icon-wrapper">
                  <v-icon color="success" size="32">mdi-format-list-bulleted</v-icon>
                </div>
                <h2 class="text-h5 font-weight-bold">{{ $t('cookiePolicy.section3.title') }}</h2>
              </div>
              <ul class="text-body-1 cookie-list" style="line-height: 1.8">
                <li
                  v-for="(item, index) in section3Items"
                  :key="index"
                  class="cookie-list-item"
                  v-html="item"
                ></li>
              </ul>
            </v-card-item>
          </v-card>

          <v-card
            :elevation="8"
            rounded="xl"
            class="policy-card mb-6"
            :style="{ '--card-index': 4 }"
          >
            <v-card-item class="pa-6">
              <div class="card-header mb-4">
                <div class="card-icon-wrapper">
                  <v-icon color="info" size="32">mdi-cog</v-icon>
                </div>
                <h2 class="text-h5 font-weight-bold">{{ $t('cookiePolicy.section4.title') }}</h2>
              </div>
              <p class="text-body-1" style="line-height: 1.8">
                {{ $t('cookiePolicy.section4.content') }}
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="8" rounded="xl" class="policy-card" :style="{ '--card-index': 5 }">
            <v-card-item class="pa-6">
              <div class="card-header mb-4">
                <div class="card-icon-wrapper">
                  <v-icon color="warning" size="32">mdi-clock-outline</v-icon>
                </div>
                <h2 class="text-h5 font-weight-bold">{{ $t('cookiePolicy.section5.title') }}</h2>
              </div>
              <p class="text-body-1" style="line-height: 1.8">
                {{ $t('cookiePolicy.section5.content') }}
              </p>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'

const { tm } = useI18n()

const section2Items = computed(() => tm('cookiePolicy.section2.items') || [])
const section3Items = computed(() => tm('cookiePolicy.section3.items') || [])
</script>

<style scoped>
.cookie-policy-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
}

.page-header {
  background: linear-gradient(135deg, #1a237e 0%, #283593 30%, #3f51b5 60%, #5c6bc0 100%);
  padding: 80px 0 60px;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.page-header::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.header-content {
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-icon {
  margin-bottom: 24px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.page-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}

.policy-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 4px solid transparent;
  animation: fadeInUp 0.6s ease-out both;
  animation-delay: calc(var(--card-index) * 0.1s);
  background: white;
  overflow: hidden;
  position: relative;
}

.policy-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  transition: width 0.3s ease;
}

.policy-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12) !important;
}

.policy-card:hover::before {
  width: 6px;
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

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.policy-card:hover .card-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%);
}

.cookie-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cookie-list-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.cookie-list-item:hover {
  background: rgba(26, 35, 126, 0.05);
  transform: translateX(4px);
}

.list-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 960px) {
  .page-header {
    padding: 60px 0 40px;
  }
}

@media (max-width: 600px) {
  .page-header {
    padding: 40px 0 30px;
  }

  .header-icon {
    font-size: 48px !important;
    margin-bottom: 16px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .card-icon-wrapper {
    width: 48px;
    height: 48px;
  }

  .card-icon-wrapper .v-icon {
    font-size: 24px !important;
  }
}
</style>
