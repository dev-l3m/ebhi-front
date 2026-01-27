<template>
  <section class="approach-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-lightbulb-on</v-icon>
          Notre Méthodologie
        </v-chip>
        <h2 class="section-title mb-6">
          Découvrez l'approche<br />
          <span class="gradient-text">d'excellence d'EBHI</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Notre méthodologie repose sur quatre piliers fondamentaux qui guident chacune de nos
          actions.
        </p>
      </div>

      <!-- Timeline moderne -->
      <div class="timeline-container mb-16">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="timeline-item"
          :class="{ 'timeline-item-reverse': index % 2 === 1 }"
        >
          <div class="timeline-content">
            <div class="timeline-number">{{ index + 1 }}</div>
            <v-card
              :elevation="8"
              class="timeline-card"
              :style="{ borderLeft: `4px solid var(--v-${step.color}-base)` }"
            >
              <v-card-item class="pa-6">
                <div class="timeline-card-header">
                  <v-icon :color="step.color" size="32" class="timeline-card-icon">{{
                    step.icon
                  }}</v-icon>
                  <v-card-title class="pa-0 approach-step-title">{{ step.title }}</v-card-title>
                </div>
                <v-card-text class="pa-0 text-body-1">
                  {{ step.description }}
                </v-card-text>
              </v-card-item>
            </v-card>
          </div>
        </div>
      </div>

      <!-- Piliers EBHI -->
      <div class="pillars-section">
        <div class="text-center mb-12">
          <h3 class="text-h4 font-weight-bold mb-4">Les 4 piliers d'EBHI</h3>
          <p class="text-body-1 text-grey-darken-1">
            Chaque lettre représente un aspect clé de notre philosophie
          </p>
        </div>
        <v-row>
          <v-col v-for="(pillar, index) in pillars" :key="index" cols="12" md="6" lg="3">
            <v-card :elevation="8" class="pillar-card h-100" :class="`pillar-${pillar.color}`">
              <v-card-item class="pa-6 text-center">
                <div class="pillar-letter mb-4">{{ pillar.letter }}</div>
                <v-card-title class="text-h6 mb-3 pillar-title">{{ pillar.title }}</v-card-title>
                <v-card-text class="text-body-2 pillar-description" style="line-height: 1.6">
                  {{ pillar.description }}
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Analyse & Optimisation',
    description:
      "Évaluation approfondie des processus existants et identification des axes d'amélioration pour maximiser votre efficacité.",
    color: 'primary',
    icon: 'mdi-chart-line'
  },
  {
    title: 'Structuration du Projet',
    description:
      'Organisation méthodique des ressources et planification détaillée du déploiement pour garantir le succès.',
    color: 'secondary',
    icon: 'mdi-file-tree'
  },
  {
    title: 'Mobilisation des Ressources',
    description:
      'Déploiement stratégique des compétences et outils nécessaires à la réussite de votre projet.',
    color: 'success',
    icon: 'mdi-account-multiple'
  },
  {
    title: 'Intégration & Amélioration continue',
    description:
      "Mise en œuvre suivie d'un processus d'optimisation permanente pour des résultats durables.",
    color: 'info',
    icon: 'mdi-sync'
  }
]

const pillars = [
  {
    letter: 'E',
    title: 'Efficacité',
    description:
      "Grâce à notre modèle d'externalisation, nous aidons nos clients à améliorer leur productivité et à réduire leurs coûts.",
    color: 'primary'
  },
  {
    letter: 'B',
    title: 'Business structuré',
    description:
      'Nous mettons en place une organisation claire et des processus définis pour assurer une externalisation fluide.',
    color: 'secondary'
  },
  {
    letter: 'H',
    title: 'Hub de talents',
    description:
      'Nous réunissons des professionnels hautement qualifiés et spécialisés pour répondre aux besoins variés de nos clients.',
    color: 'success'
  },
  {
    letter: 'I',
    title: 'Innovation',
    description:
      'Nous intégrons des solutions technologiques de pointe pour optimiser les processus et offrir des services toujours plus performants.',
    color: 'info'
  }
]
</script>

<style scoped>
.approach-section {
  background: white;
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

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #616161;
  max-width: 700px;
  line-height: 1.6;
}

/* Timeline moderne */
.timeline-container {
  position: relative;
  padding: 40px 0;
}

.timeline-item {
  display: flex;
  margin-bottom: 60px;
  position: relative;
  animation: fadeInUp 0.6s ease-out both;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}
.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}
.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}
.timeline-item:nth-child(4) {
  animation-delay: 0.4s;
}

.timeline-content {
  flex: 1;
  position: relative;
  padding-left: 80px;
}

.timeline-item-reverse .timeline-content {
  padding-left: 0;
  padding-right: 80px;
}

.timeline-number {
  position: absolute;
  left: 0;
  top: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: 0 8px 16px rgba(26, 35, 126, 0.3);
  z-index: 2;
}

.timeline-item-reverse .timeline-number {
  left: auto;
  right: 0;
}

.timeline-card {
  border-radius: 16px !important;
  transition: all 0.3s ease;
  background: white;
}

.timeline-card:hover {
  transform: translateX(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.timeline-item-reverse .timeline-card:hover {
  transform: translateX(-8px);
}

/* Piliers */
.pillars-section {
  margin-top: 80px;
  padding-top: 60px;
  border-top: 2px solid #e0e0e0;
}

.pillar-card {
  border-radius: 20px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
  border-top: 4px solid white;
}

.pillar-primary {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%) !important;
}

.pillar-secondary {
  background: linear-gradient(135deg, #283593 0%, #3949ab 100%) !important;
}

.pillar-success {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%) !important;
}

.pillar-info {
  background: linear-gradient(135deg, #2196f3 0%, #42a5f5 100%) !important;
}

.pillar-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
}

.pillar-letter {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.pillar-title {
  color: white !important;
  font-weight: 700 !important;
}

.pillar-description {
  color: white !important;
  opacity: 0.95 !important;
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

@media (max-width: 960px) {
  .timeline-content {
    padding-left: 60px;
  }

  .timeline-item-reverse .timeline-content {
    padding-right: 60px;
  }

  .timeline-number {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
}

/* Timeline Card Header */
.timeline-card-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.timeline-card-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.approach-step-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  flex: 1;
  min-width: 0;
}

@media (max-width: 960px) {
  .timeline-card-header {
    gap: 10px;
  }

  .timeline-card-icon {
    font-size: 28px !important;
  }

  .approach-step-title {
    font-size: 1.25rem !important;
  }

  .timeline-card .v-card-item {
    padding: 20px !important;
  }
}

@media (max-width: 600px) {
  .timeline-content {
    padding-left: 50px;
  }

  .timeline-item-reverse .timeline-content {
    padding-right: 50px;
  }

  .timeline-number {
    width: 40px;
    height: 40px;
    font-size: 1.125rem;
  }

  .timeline-card .v-card-item {
    padding: 16px !important;
  }

  .timeline-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 12px;
  }

  .timeline-card-icon {
    font-size: 24px !important;
    margin-top: 0;
  }

  .approach-step-title {
    font-size: 1.125rem !important;
    line-height: 1.3 !important;
    width: 100%;
  }

  .timeline-card .v-card-text {
    font-size: 0.875rem !important;
    line-height: 1.5 !important;
  }

  .pillar-title {
    font-size: 1rem !important;
  }

  .pillar-description {
    font-size: 0.8125rem !important;
  }

  .pillar-letter {
    font-size: 3rem !important;
  }
}
</style>
