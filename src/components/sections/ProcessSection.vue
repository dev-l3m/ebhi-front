<template>
  <section class="process-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-cog</v-icon>
          Notre Processus
        </v-chip>
        <h2 class="section-title mb-6">
          Comment ça<br>
          <span class="gradient-text">fonctionne ?</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Un processus en 4 étapes simples et efficaces pour transformer vos besoins en solutions concrètes
        </p>
      </div>

      <v-row class="process-grid">
        <v-col
          v-for="(process, index) in processes"
          :key="index"
          cols="12"
          md="6"
          lg="3"
          class="process-col"
        >
          <v-card
            :elevation="8"
            class="process-card h-100"
            :class="`process-card-${process.color}`"
            @click="openDialog(process)"
          >
            <div class="process-number-wrapper">
              <div class="process-number" :class="`process-number-${process.color}`">{{ index + 1 }}</div>
              <div class="process-number-bg" :class="`process-number-bg-${process.color}`"></div>
            </div>
            <v-card-item class="pa-6 text-center">
              <v-icon
                :color="process.color"
                size="56"
                class="mb-4 process-icon"
              >
                {{ process.icon }}
              </v-icon>
              <v-card-title class="text-h6 mb-3 process-title">
                {{ process.title }}
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 process-description">
                {{ process.shortDescription }}
              </v-card-text>
            </v-card-item>
            <v-card-actions class="pa-6 pt-0 justify-center">
              <v-btn
                :color="process.color"
                variant="text"
                class="process-btn"
              >
                Voir détails
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Dialog amélioré -->
      <v-dialog
        v-model="dialog"
        max-width="900"
        scrollable
      >
        <v-card v-if="selectedProcess" class="process-dialog">
          <v-card-title class="text-h4 pa-6 d-flex align-center justify-space-between process-dialog-header">
            <div class="d-flex align-center">
              <v-icon :color="selectedProcess.color" size="32" class="mr-3">
                {{ selectedProcess.icon }}
              </v-icon>
              <span>{{ selectedProcess.title }}</span>
            </div>
            <v-btn
              icon
              variant="text"
              @click="dialog = false"
              class="close-btn"
            >
              <v-icon size="24">mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-6">
            <div class="text-h6 mb-4 text-primary">{{ selectedProcess.description }}</div>
            <p class="text-body-1" style="line-height: 1.8; color: #424242;">
              {{ selectedProcess.details }}
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-6">
            <v-spacer></v-spacer>
            <v-btn
              :color="selectedProcess.color"
              variant="elevated"
              size="large"
              @click="dialog = false"
            >
              Compris
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const selectedProcess = ref(null)

const processes = [
  {
    title: 'Analyse des besoins',
    shortDescription: 'Compréhension de vos objectifs et élaboration d\'une stratégie adaptée',
    description: 'Construire une stratégie qui vous ressemble',
    details: 'Chaque projet démarre par une phase d\'écoute attentive. Nous prenons le temps de comprendre vos objectifs, vos défis et vos priorités. Cette étape fondamentale nous permet d\'identifier les leviers clés pour bâtir une stratégie personnalisée et efficace. Grâce à cette analyse approfondie, nous concevons un plan d\'action clair, réaliste et en parfaite adéquation avec votre vision.',
    color: 'primary',
    icon: 'mdi-magnify'
  },
  {
    title: 'Recrutement',
    shortDescription: 'Sélection rigoureuse des talents répondant à vos critères.',
    description: 'Sélection rigoureuse des talents répondant à vos critères.',
    details: 'Nous mettons en place un processus de sélection exigeant et méthodique, visant à identifier les profils les plus pertinents. Notre objectif est de vous proposer des candidats qui non seulement répondent à vos critères techniques, mais qui s\'intègrent également parfaitement à votre environnement et contribuent activement à la réussite de vos projets.',
    color: 'secondary',
    icon: 'mdi-account-search'
  },
  {
    title: 'Mise en place des ressources',
    shortDescription: 'Fourniture de tout le matériel et les locaux nécessaires.',
    description: 'Fourniture de tout le matériel et les locaux nécessaires.',
    details: 'Nous assurons la mise à disposition de l\'ensemble du matériel et des infrastructures indispensables. Cette prise en charge complète vous permet de vous concentrer pleinement sur vos objectifs sans vous soucier des aspects logistiques et techniques.',
    color: 'success',
    icon: 'mdi-office-building'
  },
  {
    title: 'Gestion administrative',
    shortDescription: 'Prise en charge complète des démarches administratives et disciplinaires.',
    description: 'Prise en charge complète des démarches administratives et disciplinaires.',
    details: 'Nous assurons une gestion intégrale de l\'ensemble des démarches administratives et disciplinaires. Notre approche rigoureuse garantit la conformité avec le cadre juridique en vigueur et vous libère de ces contraintes pour vous concentrer sur votre cœur de métier.',
    color: 'info',
    icon: 'mdi-file-document-edit'
  }
]

const openDialog = (process) => {
  selectedProcess.value = process
  dialog.value = true
}
</script>

<style scoped>
.process-section {
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
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

.process-grid {
  margin-top: 40px;
}

.process-col {
  margin-bottom: 32px;
}

.process-card {
  border-radius: 24px !important;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: visible;
  background: white;
  border: 2px solid transparent;
}

.process-card:hover {
  transform: translateY(-16px) scale(1.02);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
}

.process-card-primary:hover {
  border-color: #1a237e;
}

.process-card-secondary:hover {
  border-color: #283593;
}

.process-card-success:hover {
  border-color: #4caf50;
}

.process-card-info:hover {
  border-color: #2196F3;
}

.process-number-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 24px;
}

.process-number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  border: 4px solid white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.process-number-primary {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
}

.process-number-secondary {
  background: linear-gradient(135deg, #283593 0%, #3949ab 100%);
}

.process-number-success {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
}

.process-number-info {
  background: linear-gradient(135deg, #2196F3 0%, #42a5f5 100%);
}

.process-card:hover .process-number {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.process-number-bg {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1;
  animation: pulse 2s ease-in-out infinite;
}

.process-number-bg-primary {
  background: #1a237e;
  opacity: 0.15;
}

.process-number-bg-secondary {
  background: #283593;
  opacity: 0.15;
}

.process-number-bg-success {
  background: #4caf50;
  opacity: 0.15;
}

.process-number-bg-info {
  background: #2196F3;
  opacity: 0.15;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.05;
  }
}

.process-icon {
  transition: all 0.4s ease;
}

.process-card:hover .process-icon {
  transform: scale(1.2);
}

.process-title {
  font-weight: 700;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.process-description {
  min-height: 60px;
  line-height: 1.6;
}

.process-btn {
  font-weight: 600;
  transition: all 0.3s ease;
}

.process-card:hover .process-btn {
  transform: translateX(8px);
}

/* Dialog */
.process-dialog {
  border-radius: 16px !important;
}

.process-dialog-header {
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
}

.close-btn {
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: rotate(90deg);
}

@media (max-width: 960px) {
  .process-card {
    margin-bottom: 48px;
  }
  
  .process-number-wrapper {
    margin-top: -32px;
  }
  
  .process-number {
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
  }
}
</style>
