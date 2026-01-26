<template>
  <section class="about-mission-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-target</v-icon>
          Notre Mission
        </v-chip>
        <h2 class="section-title mb-6">
          Une mission<br>
          <span class="gradient-text">claire</span>
        </h2>
        <div class="mission-statement">
          <p class="text-h4 font-weight-bold text-primary mb-8">
            Ouvrir le monde aux entreprises ambitieuses.
          </p>
          <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 800px; line-height: 1.8;">
            Nous pensons qu'il est temps de libérer les entreprises des freins géographiques, 
            opérationnels ou administratifs.
          </p>
        </div>
      </div>

      <v-row>
        <v-col
          v-for="(solution, index) in solutions"
          :key="index"
          cols="12"
          md="6"
          lg="3"
          class="solution-col"
        >
          <v-card
            :elevation="8"
            class="solution-card h-100 text-center"
            rounded="xl"
          >
            <v-card-item class="pa-6">
              <v-icon
                :color="solution.color"
                size="56"
                class="mb-4"
              >
                {{ solution.icon }}
              </v-icon>
              <v-card-title class="text-h6 mb-3 pa-0 solution-title" style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word;">
                {{ solution.title }}
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 solution-description">
                {{ solution.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <div class="locations-info mt-12">
        <v-card :elevation="12" class="locations-card" rounded="xl">
          <v-card-item class="pa-8">
            <div class="text-center mb-6">
              <div class="locations-icon-wrapper mb-4">
                <v-icon color="primary" size="64">mdi-earth</v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold mb-3 text-primary">
                Présence Internationale
              </h3>
              <p class="text-body-1 text-grey-darken-1 mb-6" style="line-height: 1.8;">
                Nous pilotons vos projets à l'échelle locale<br>
                avec une <strong>vision stratégique globale</strong>
              </p>
            </div>

            <v-divider class="my-6"></v-divider>

            <div class="locations-countries">
              <div class="text-center mb-4">
                <span class="text-body-2 text-grey-darken-1">Nos implantations</span>
              </div>
              <div class="countries-grid">
                <div
                  v-for="(country, index) in countries"
                  :key="index"
                  class="country-badge"
                  :class="{ 'coming-soon': country.status === 'coming-soon' }"
                >
                <div class="country-badge-content">
                  <span :class="`fi fi-${country.flagCode} country-flag mr-2`"></span>
                  <span class="text-body-2 font-weight-bold">{{ country.name }}</span>
                  <v-chip
                    v-if="country.status === 'coming-soon'"
                    color="warning"
                    variant="flat"
                    size="x-small"
                    class="ml-2"
                  >
                    Bientôt
                  </v-chip>
                </div>
                </div>
              </div>
            </div>
          </v-card-item>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const solutions = [
  {
    title: 'Réduire vos coûts',
    description: 'sans perdre en qualité',
    color: 'primary',
    icon: 'mdi-cash-multiple'
  },
  {
    title: 'Accélérer la mise en œuvre',
    description: 'de vos projets',
    color: 'secondary',
    icon: 'mdi-rocket-launch'
  },
  {
    title: 'Offrir un accès direct',
    description: 'à des compétences spécifiques',
    color: 'success',
    icon: 'mdi-account-star'
  },
  {
    title: 'Renforcer vos capacités',
    description: 'sans alourdir votre structure',
    color: 'info',
    icon: 'mdi-chart-line'
  }
]

const countries = [
  { name: 'Maroc', status: 'active', color: 'primary', flagCode: 'ma' },
  { name: 'Sénégal', status: 'active', color: 'secondary', flagCode: 'sn' },
  { name: 'Madagascar', status: 'active', color: 'success', flagCode: 'mg' },
  { name: 'Algérie', status: 'active', color: 'info', flagCode: 'dz' },
  { name: 'Philippines', status: 'coming-soon', color: 'warning', flagCode: 'ph' }
]
</script>

<style scoped>
.about-mission-section {
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

.mission-statement {
  margin-top: 40px;
}

.solution-col {
  margin-bottom: 32px;
}

.solution-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.solution-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.solution-title {
  font-weight: 700;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  text-align: center;
}

.solution-description {
  min-height: 40px;
  line-height: 1.6;
}

.locations-info {
  margin-top: 64px;
}

.locations-card {
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.02) 0%, rgba(63, 81, 181, 0.02) 100%);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.locations-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(-4px);
}

.locations-icon-wrapper {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.locations-card:hover .locations-icon-wrapper {
  transform: scale(1.05) rotate(5deg);
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%);
}

.locations-countries {
  margin-top: 24px;
}

.countries-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.country-badge {
  padding: 12px 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid rgba(26, 35, 126, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.country-badge:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: rgba(26, 35, 126, 0.3);
}

.country-badge.coming-soon {
  border-color: rgba(255, 193, 7, 0.3);
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(255, 224, 130, 0.05) 100%);
}

.country-badge.coming-soon:hover {
  border-color: rgba(255, 193, 7, 0.5);
}

.country-badge-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.country-flag {
  width: 24px;
  height: 18px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

@media (max-width: 960px) {
  .solution-card {
    margin-bottom: 24px;
  }

  .locations-card {
    margin-top: 32px;
  }

  .locations-card .v-card-item {
    padding: 32px 24px !important;
  }

  .countries-grid {
    gap: 8px;
  }

  .country-badge {
    padding: 10px 16px;
  }
}
</style>
