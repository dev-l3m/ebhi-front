<template>
  <section class="why-join-us-section section-padding">
    <div class="why-join-us-bg" aria-hidden="true">
      <div class="why-join-us-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="why-join-us-content">
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6" v-html="$t('joinUsPage.whyJoinUs.title')"></h2>
      </div>

      <v-row>
        <v-col
          v-for="(benefit, index) in benefits"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="benefit-col"
        >
          <v-card :elevation="8" class="benefit-card h-100" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-start">
                <v-icon :color="benefit.color" size="40" class="mr-4">
                  {{ benefit.icon }}
                </v-icon>
                <div class="flex-grow-1">
                  <v-card-title
                    class="text-h6 mb-2 pa-0 benefit-title"
                    style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
                  >
                    {{ benefit.title }}
                  </v-card-title>
                  <v-card-text
                    class="text-body-2 text-grey-darken-1 pa-0 benefit-description"
                    style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
                  >
                    {{ benefit.description }}
                  </v-card-text>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <div class="talent-description mt-16 text-center">
        <v-card :elevation="8" class="talent-card" rounded="xl">
          <v-card-item class="pa-8">
            <v-icon color="primary" size="64" class="mb-4">mdi-account-star</v-icon>
            <p class="text-h5 font-weight-bold mb-4">
              {{ $t('joinUsPage.whyJoinUs.talentDescription.text') }}
            </p>
            <p class="text-h6 text-primary font-weight-bold">
              {{ $t('joinUsPage.whyJoinUs.talentDescription.cta') }}
            </p>
          </v-card-item>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const benefits = computed(() => {
  const benefitsData = tm('joinUsPage.whyJoinUs.benefits') || []
  const icons = [
    'mdi-star-circle',
    'mdi-office-building',
    'mdi-account-heart',
    'mdi-trending-up',
    'mdi-shield-check'
  ]
  const colors = ['primary', 'secondary', 'success', 'info', 'warning']
  return benefitsData.map((benefit, index) => ({
    title: benefit.title,
    description: benefit.description,
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})
</script>

<style scoped>
.why-join-us-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.why-join-us-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.why-join-us-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: whyJoinUsBgDrift 26s ease-in-out infinite alternate;
}

.why-join-us-content {
  position: relative;
  z-index: 1;
}

.why-join-us-shapes {
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

@keyframes whyJoinUsBgDrift {
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

.benefit-col {
  margin-bottom: 32px;
}

.benefit-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.benefit-title {
  font-weight: 700;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  min-height: auto;
}

.benefit-description {
  line-height: 1.7;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.talent-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 960px) {
  .benefit-card {
    margin-bottom: 24px;
  }
}
</style>
