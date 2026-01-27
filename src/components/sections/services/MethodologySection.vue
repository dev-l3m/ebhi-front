<template>
  <section class="methodology-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-chart-timeline-variant</v-icon>
          Notre Méthodologie
        </v-chip>
        <h2 class="section-title mb-6">
          Une méthodologie<br />
          <span class="gradient-text">éprouvée</span>
        </h2>
        <p class="section-subtitle mx-auto mb-8">
          Notre approche s'appuie sur un processus structurant en quatre phases
        </p>
        <p class="text-h6 font-weight-bold text-primary">
          Chaque étape est conçue pour minimiser vos risques, optimiser vos coûts et maximiser vos
          résultats
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(phase, index) in phases"
          :key="index"
          cols="12"
          md="6"
          lg="3"
          class="phase-col"
        >
          <v-card :elevation="8" class="phase-card h-100" rounded="xl">
            <v-card-item class="pa-6 text-center">
              <div class="phase-icon-wrapper mb-4">
                <div class="phase-icon-bg" :style="{ background: getPhaseGradient(phase.color) }">
                  <v-icon :color="phase.color" size="40">{{ phase.icon }}</v-icon>
                </div>
              </div>
              <v-card-title class="text-h6 mb-3 phase-title">
                <span class="phase-title-text">{{ phase.title }}</span>
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 phase-description">
                {{ phase.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const phases = [
  {
    title: 'Analyse et optimisation',
    description:
      "Évaluation approfondie de vos processus et identification des axes d'amélioration pour maximiser votre efficacité.",
    color: 'primary',
    icon: 'mdi-chart-line'
  },
  {
    title: 'Mobilisation des ressources',
    description:
      'Déploiement stratégique des compétences et outils nécessaires à la réussite de votre projet.',
    color: 'secondary',
    icon: 'mdi-account-multiple'
  },
  {
    title: 'Intégration et suivi continu',
    description:
      "Mise en œuvre suivie d'un processus d'optimisation permanente pour des résultats durables.",
    color: 'success',
    icon: 'mdi-sync'
  },
  {
    title: 'Structuration du projet',
    description:
      'Organisation méthodique des ressources et planification détaillée du déploiement pour garantir le succès.',
    color: 'info',
    icon: 'mdi-file-tree'
  }
]

const getPhaseGradient = color => {
  const gradients = {
    primary: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    secondary: 'linear-gradient(135deg, rgba(40, 53, 147, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    success: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.1) 100%)',
    info: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(100, 181, 246, 0.1) 100%)'
  }
  return gradients[color] || gradients.primary
}
</script>

<style scoped>
.methodology-section {
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

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #616161;
  max-width: 700px;
  line-height: 1.6;
}

.phase-col {
  margin-bottom: 32px;
}

.phase-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.phase-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.phase-icon-wrapper {
  display: flex;
  justify-content: center;
}

.phase-icon-bg {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.phase-card:hover .phase-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.phase-title {
  font-weight: 700;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4 !important;
  font-size: clamp(0.875rem, 1.5vw, 1.125rem) !important;
}

.phase-title-text {
  display: block;
  width: 100%;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  white-space: normal;
}

.phase-description {
  min-height: 80px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .phase-card {
    margin-bottom: 24px;
  }
}
</style>
