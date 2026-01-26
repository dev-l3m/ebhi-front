<template>
  <section class="solution-comparison-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Quelle solution<br>
          <span class="gradient-text">privilégier ?</span>
        </h2>
      </div>

      <v-row>
        <v-col cols="12" md="6" class="solution-col">
          <v-card
            :elevation="8"
            class="solution-card solution-card-internal h-100"
            rounded="xl"
          >
            <v-card-item class="pa-8 text-center">
              <v-icon color="grey-darken-1" size="64" class="mb-4">mdi-office-building</v-icon>
              <v-card-title class="text-h4 mb-6 pa-0">Gestion interne</v-card-title>
              <v-divider class="mb-6"></v-divider>
              <div class="solution-features">
                <div
                  v-for="(feature, index) in internalFeatures"
                  :key="index"
                  class="solution-feature mb-4"
                >
                  <div class="d-flex align-center mb-2">
                    <v-icon color="grey-darken-1" size="24" class="mr-3">mdi-check-circle</v-icon>
                    <div class="text-h6 font-weight-bold">{{ feature.label }}</div>
                  </div>
                  <div class="text-body-2 text-grey-darken-1 ml-11">
                    {{ feature.value }}
                  </div>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" class="solution-col">
          <v-card
            :elevation="12"
            class="solution-card solution-card-external h-100"
            rounded="xl"
          >
            <v-card-item class="pa-8 text-center">
              <div class="solution-badge mb-4">
                <v-chip color="success" variant="flat" size="large">
                  <v-icon start>mdi-star</v-icon>
                  Recommandé
                </v-chip>
              </div>
              <v-icon color="success" size="64" class="mb-4">mdi-rocket-launch</v-icon>
              <v-card-title class="text-h4 mb-6 pa-0">Externalisation</v-card-title>
              <v-divider class="mb-6"></v-divider>
              <div class="solution-features">
                <div
                  v-for="(feature, index) in externalFeatures"
                  :key="index"
                  class="solution-feature mb-4"
                >
                  <div class="d-flex align-center mb-2">
                    <v-icon color="success" size="24" class="mr-3">mdi-check-circle</v-icon>
                    <div class="text-h6 font-weight-bold">{{ feature.label }}</div>
                  </div>
                  <div class="text-body-2 text-grey-darken-1 ml-11">
                    {{ feature.value }}
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
const internalFeatures = [
  { label: 'Coût', value: 'Élevé (salaires, locaux)' },
  { label: 'Délais de mise en œuvre', value: 'Longs (recrutement, formation)' },
  { label: 'Compétences disponibles', value: 'Variables' },
  { label: 'Charge de gestion', value: 'Importante' },
  { label: 'Évolutivité', value: 'Limitée' }
]

const externalFeatures = [
  { label: 'Coût', value: 'Réduit et maîtrisé' },
  { label: 'Délais de mise en œuvre', value: 'Rapide et prêt à l\'emploi' },
  { label: 'Compétences disponibles', value: 'Spécialisées et expérimentées' },
  { label: 'Charge de gestion', value: 'Allégée grâce à notre accompagnement' },
  { label: 'Évolutivité', value: 'Flexibilité totale des ressources' }
]
</script>

<style scoped>
.solution-comparison-section {
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

.solution-col {
  margin-bottom: 32px;
}

.solution-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.solution-card-internal {
  background: white;
  border-color: #e0e0e0;
}

.solution-card-external {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(129, 199, 132, 0.05) 100%);
  border-color: #4caf50;
  position: relative;
  overflow: hidden;
}

.solution-card-external::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4caf50, #66bb6a);
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
}

.solution-badge {
  display: flex;
  justify-content: center;
}

.solution-features {
  text-align: left;
}

.solution-feature {
  transition: all 0.3s ease;
}

.solution-card:hover .solution-feature {
  transform: translateX(4px);
}

@media (max-width: 960px) {
  .solution-card {
    margin-bottom: 24px;
  }
}
</style>
