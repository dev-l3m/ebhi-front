<template>
  <section class="about-approach-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Notre<br />
          <span class="gradient-text">approche</span>
        </h2>
      </div>

      <v-row align="center">
        <v-col cols="12" md="6" class="mb-8 mb-md-0">
          <p class="approach-intro-text mb-6">
            Chez EBHI, chaque projet est une collaboration étroite et stratégique. Nous ne livrons
            pas des prestations génériques, mais des
            <strong>solutions intelligemment conçues</strong>, prêtes à être activées.
          </p>
          <p class="approach-combine-text mb-4">Nous combinons :</p>
          <v-list class="bg-transparent approach-list">
            <v-list-item
              v-for="(item, index) in approachItems"
              :key="index"
              class="px-0 approach-list-item"
            >
              <template v-slot:prepend>
                <v-icon :color="item.color" size="32" class="approach-list-icon"
                  >mdi-check-circle</v-icon
                >
              </template>
              <v-list-item-title class="approach-list-title">
                <strong>{{ item.title }}</strong>
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <p class="approach-text mt-6">
            Et <strong>un encadrement localisé dans nos hubs internationaux.</strong>
          </p>
          <p class="approach-text mt-4">
            Nous opérons sur des zones à fort potentiel économique tout en respectant
            <strong
              >les exigences de qualité, de sécurité et de confidentialité des standards
              européens.</strong
            >
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-card :elevation="12" class="approach-visual-card" rounded="xl">
            <v-card-item class="pa-8">
              <div class="approach-card-header text-center mb-6">
                <div class="approach-icon-wrapper mb-4">
                  <v-icon color="primary" size="64" class="approach-main-icon">mdi-earth</v-icon>
                </div>
                <div class="approach-card-title font-weight-bold mb-2 text-primary">
                  Approche Internationale
                </div>
                <p class="approach-card-subtitle text-grey-darken-1 mb-6">
                  <span class="subtitle-line"
                    >Des hubs stratégiques pour une présence mondiale</span
                  >
                  <span class="subtitle-line">avec des standards européens</span>
                </p>
              </div>

              <v-divider class="my-6"></v-divider>

              <div class="approach-features">
                <div
                  v-for="(feature, index) in internationalFeatures"
                  :key="index"
                  class="feature-item mb-4"
                >
                  <div class="feature-content">
                    <div class="feature-icon-wrapper">
                      <v-icon :color="feature.color" size="24" class="feature-icon">{{
                        feature.icon
                      }}</v-icon>
                    </div>
                    <div class="feature-text">
                      <div class="feature-title font-weight-bold mb-1">{{ feature.title }}</div>
                      <div class="feature-description text-grey-darken-1">
                        {{ feature.description }}
                      </div>
                    </div>
                  </div>
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
const approachItems = [
  { title: 'Des ressources humaines qualifiées et dédiées', color: 'primary' },
  { title: 'Des outils techniques performants', color: 'secondary' },
  { title: 'Une structure digitale agile', color: 'success' }
]

const internationalFeatures = [
  {
    title: 'Hubs stratégiques',
    description: 'Présence mondiale avec des implantations sur plusieurs continents',
    icon: 'mdi-map-marker-multiple',
    color: 'primary'
  },
  {
    title: 'Standards européens',
    description: 'Qualité, sécurité et confidentialité conformes aux exigences européennes',
    icon: 'mdi-shield-check',
    color: 'secondary'
  },
  {
    title: 'Potentiel économique',
    description: 'Zones à fort potentiel pour optimiser vos coûts et votre croissance',
    icon: 'mdi-chart-line',
    color: 'success'
  }
]
</script>

<style scoped>
.about-approach-section {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
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

.approach-visual-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 500px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.approach-visual-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(-4px);
}

.approach-icon-wrapper {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.approach-visual-card:hover .approach-icon-wrapper {
  transform: scale(1.05) rotate(5deg);
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%);
}

.approach-features {
  margin-top: 16px;
}

.feature-item {
  transition: all 0.3s ease;
  padding: 12px;
  border-radius: 12px;
}

.feature-item:hover {
  background: rgba(26, 35, 126, 0.03);
  transform: translateX(4px);
}

.feature-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.08) 0%, rgba(63, 81, 181, 0.08) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.feature-item:hover .feature-icon-wrapper {
  transform: scale(1.1);
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.12) 0%, rgba(63, 81, 181, 0.12) 100%);
}

/* Text Styles */
.approach-intro-text {
  font-size: 1.25rem;
  line-height: 1.8;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.approach-combine-text,
.approach-text {
  font-size: 1rem;
  line-height: 1.8;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* List Styles */
.approach-list {
  overflow: visible !important;
}

.approach-list-item {
  margin-bottom: 12px;
  overflow: visible !important;
  min-height: auto !important;
}

.approach-list-item :deep(.v-list-item__prepend) {
  padding-right: 16px;
  flex-shrink: 0;
}

.approach-list-icon {
  flex-shrink: 0;
  margin-right: 0;
}

.approach-list-title {
  font-size: 1.25rem;
  line-height: 1.5;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  max-width: 100% !important;
  width: 100% !important;
  display: block !important;
}

.approach-list-title strong {
  display: inline;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Card Header Styles */
.approach-card-header {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Card Styles */
.approach-card-title {
  font-size: 1.5rem;
  line-height: 1.3;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  max-width: 100% !important;
  width: 100% !important;
  display: block !important;
  padding: 0 8px;
  box-sizing: border-box;
}

.approach-card-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  max-width: 100% !important;
  width: 100% !important;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  text-align: center;
}

.subtitle-line {
  display: block;
  width: 100%;
  text-align: center;
}

.subtitle-line:first-child {
  margin-bottom: 4px;
}

.subtitle-line:not(:first-child) {
  margin-top: 0;
}

.approach-main-icon {
  transition: all 0.3s ease;
}

/* Feature Styles */
.feature-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.feature-text {
  flex: 1;
  min-width: 0;
}

.feature-title {
  font-size: 1rem;
  line-height: 1.4;
  word-wrap: break-word;
}

.feature-description {
  font-size: 0.9375rem;
  line-height: 1.5;
  word-wrap: break-word;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }

  .approach-visual-card {
    min-height: auto;
    margin-top: 32px;
  }

  .approach-visual-card {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .approach-visual-card .v-card-item {
    padding: 24px !important;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .approach-intro-text {
    font-size: 1.125rem !important;
    margin-bottom: 24px !important;
  }

  .approach-combine-text,
  .approach-text {
    font-size: 0.9375rem !important;
  }

  .approach-list-item :deep(.v-list-item__prepend) {
    padding-right: 12px;
  }

  .approach-list-icon {
    font-size: 28px !important;
    margin-right: 0 !important;
  }

  .approach-list-title {
    font-size: 1.125rem !important;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: unset !important;
  }

  .approach-icon-wrapper {
    width: 100px;
    height: 100px;
  }

  .approach-main-icon {
    font-size: 56px !important;
  }

  .approach-card-header {
    padding: 0 4px;
    width: 100%;
    max-width: 100%;
  }

  .approach-card-title {
    font-size: 1.375rem !important;
    padding: 0 4px !important;
    line-height: 1.4 !important;
    text-align: center !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  .approach-card-subtitle {
    font-size: 0.9375rem !important;
    padding: 0 4px !important;
    line-height: 1.5 !important;
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  .subtitle-line {
    display: block;
    width: 100%;
    text-align: center;
  }

  .subtitle-line:first-child {
    margin-bottom: 4px;
  }

  .approach-features {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .feature-item {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .feature-content {
    width: 100%;
    max-width: 100%;
  }

  .feature-icon-wrapper {
    width: 44px;
    height: 44px;
  }

  .feature-icon {
    font-size: 22px !important;
  }

  .feature-title {
    font-size: 0.9375rem !important;
  }

  .feature-description {
    font-size: 0.875rem !important;
  }
}

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: clamp(1.5rem, 6vw, 2rem) !important;
    margin-bottom: 24px;
  }

  .approach-intro-text {
    font-size: 1rem !important;
    line-height: 1.6;
    margin-bottom: 20px !important;
  }

  .approach-combine-text {
    font-size: 0.9375rem !important;
    margin-bottom: 16px !important;
  }

  .approach-text {
    font-size: 0.875rem !important;
    line-height: 1.6;
    margin-top: 20px !important;
  }

  .approach-list-item {
    margin-bottom: 10px;
    align-items: flex-start !important;
  }

  .approach-list-item :deep(.v-list-item__prepend) {
    padding-right: 10px;
    padding-top: 2px;
  }

  .approach-list-icon {
    font-size: 24px !important;
    margin-right: 0 !important;
  }

  .approach-list-title {
    font-size: 1rem !important;
    line-height: 1.4;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: unset !important;
    max-width: 100% !important;
    width: 100% !important;
    display: block !important;
    padding: 0 !important;
  }

  .approach-list-title strong {
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    display: inline;
  }

  .approach-visual-card {
    margin-top: 24px;
  }

  .approach-visual-card {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    overflow: hidden;
  }

  .approach-visual-card .v-card-item {
    padding: 20px 16px !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow: hidden;
  }

  .approach-icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    margin-bottom: 16px !important;
    flex-shrink: 0;
  }

  .approach-main-icon {
    font-size: 48px !important;
  }

  .approach-card-header {
    margin-bottom: 20px !important;
    padding: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  .approach-card-title {
    font-size: 1.125rem !important;
    margin-bottom: 8px !important;
    padding: 0 !important;
    line-height: 1.3 !important;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: unset !important;
    max-width: 100% !important;
    width: 100% !important;
    display: block !important;
    text-align: center !important;
    box-sizing: border-box;
  }

  .approach-card-subtitle {
    font-size: 0.875rem !important;
    line-height: 1.5 !important;
    margin-bottom: 20px !important;
    padding: 0 !important;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: unset !important;
    max-width: 100% !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
  }

  .subtitle-line {
    display: block;
    width: 100%;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .subtitle-line:first-child {
    margin-bottom: 2px;
  }

  .approach-features {
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden;
    box-sizing: border-box;
  }

  .feature-item {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
    overflow: hidden;
  }

  .feature-content {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
  }

  .feature-text {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
    overflow: hidden;
  }

  .feature-title,
  .feature-description {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }

  .v-divider {
    margin: 20px 0 !important;
  }

  .feature-item {
    padding: 10px;
    margin-bottom: 12px !important;
  }

  .feature-content {
    gap: 12px;
  }

  .feature-icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .feature-icon {
    font-size: 20px !important;
  }

  .feature-title {
    font-size: 0.875rem !important;
    margin-bottom: 4px !important;
  }

  .feature-description {
    font-size: 0.8125rem !important;
    line-height: 1.4;
  }
}
</style>
