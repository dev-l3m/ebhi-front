<template>
  <section class="why-join-us-section section-padding bg-grey-lighten-5">
    <v-container>
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
