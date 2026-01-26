<template>
  <section class="about-approach-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Notre<br>
          <span class="gradient-text">approche</span>
        </h2>
      </div>

      <v-row align="center">
        <v-col cols="12" md="6" class="mb-8 mb-md-0">
          <p class="text-h6 mb-6" style="line-height: 1.8;">
            Chez EBHI, chaque projet est une collaboration étroite et stratégique. Nous ne livrons pas 
            des prestations génériques, mais des <strong>solutions intelligemment conçues</strong>, prêtes à être activées.
          </p>
          <p class="text-body-1 mb-4" style="line-height: 1.8;">
            Nous combinons :
          </p>
          <v-list class="bg-transparent">
            <v-list-item
              v-for="(item, index) in approachItems"
              :key="index"
              class="px-0 mb-3"
            >
              <template v-slot:prepend>
                <v-icon :color="item.color" size="32" class="mr-4">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-h6">
                <strong>{{ item.title }}</strong>
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <p class="text-body-1 mt-6" style="line-height: 1.8;">
            Et <strong>un encadrement localisé dans nos hubs internationaux.</strong>
          </p>
          <p class="text-body-1 mt-4" style="line-height: 1.8;">
            Nous opérons sur des zones à fort potentiel économique tout en respectant 
            <strong>les exigences de qualité, de sécurité et de confidentialité des standards européens.</strong>
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-card :elevation="12" class="approach-visual-card" rounded="xl">
            <v-card-item class="pa-8">
              <div class="text-center mb-6">
                <div class="approach-icon-wrapper mb-4">
                  <v-icon color="primary" size="64">mdi-earth</v-icon>
                </div>
                <div class="text-h5 font-weight-bold mb-2 text-primary">
                  Approche Internationale
                </div>
                <p class="text-body-1 text-grey-darken-1 mb-6">
                  Des hubs stratégiques pour une présence mondiale<br>
                  avec des standards européens
                </p>
              </div>
              
              <v-divider class="my-6"></v-divider>

              <div class="approach-features">
                <div
                  v-for="(feature, index) in internationalFeatures"
                  :key="index"
                  class="feature-item mb-4"
                >
                  <div class="d-flex align-start">
                    <div class="feature-icon-wrapper mr-4">
                      <v-icon :color="feature.color" size="24">{{ feature.icon }}</v-icon>
                    </div>
                    <div class="flex-grow-1">
                      <div class="text-body-1 font-weight-bold mb-1">{{ feature.title }}</div>
                      <div class="text-body-2 text-grey-darken-1">{{ feature.description }}</div>
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

@media (max-width: 960px) {
  .approach-visual-card {
    min-height: auto;
    margin-top: 32px;
  }
}
</style>
