<template>
  <section class="expertises-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Nos expertises<br />
          <span class="gradient-text">opérationnelles</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Un processus en 4 étapes pour transformer vos besoins en solutions concrètes
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(expertise, index) in expertises"
          :key="index"
          cols="12"
          md="6"
          lg="3"
          class="expertise-col"
        >
          <v-card
            :elevation="8"
            class="expertise-card h-100"
            :class="`expertise-card-${expertise.color}`"
            rounded="xl"
          >
            <div class="expertise-number-wrapper">
              <div class="expertise-number" :class="`expertise-number-${expertise.color}`">
                {{ index + 1 }}
              </div>
            </div>
            <v-card-item class="pa-6 text-center">
              <v-icon :color="expertise.color" size="56" class="mb-4 expertise-icon">
                {{ expertise.icon }}
              </v-icon>
              <v-card-title class="text-h6 mb-3 expertise-title">
                <span class="expertise-title-text">{{ expertise.title }}</span>
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 expertise-description">
                {{ expertise.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const expertises = [
  {
    title: 'Analyse et cadrage des besoins',
    description:
      'Chaque collaboration commence par une étude approfondie de vos objectifs, vos processus internes et vos enjeux spécifiques. Cette phase nous permet de bâtir une réponse ultra personnalisée, conforme à votre réalité terrain.',
    color: 'primary',
    icon: 'mdi-magnify'
  },
  {
    title: 'Recrutement de talents qualifiés',
    description:
      "Nous sélectionnons des profils adaptés à vos critères métiers et à votre culture d'entreprise, grâce à un sourcing rigoureux, localisé et validé. Nos talents sont rapidement opérationnels et intégrés dans une logique de performance durable.",
    color: 'secondary',
    icon: 'mdi-account-search'
  },
  {
    title: 'Mise en place des ressources',
    description:
      "Une fois les profils validés, nous assurons une intégration rapide et structurée au sein de votre organisation. Qu'il s'agisse d'une équipe dédiée ou d'un besoin ponctuel, notre suivi garantit continuité, performance et fluidité.",
    color: 'success',
    icon: 'mdi-office-building'
  },
  {
    title: 'Gestion administrative et conformité',
    description:
      "Contrats, salaires, conformité légale, encadrement RH… EBHI prend en charge l'ensemble des démarches administratives. Vous bénéficiez d'un cadre réglementaire maîtrisé, d'une exécution fluide et d'un haut niveau de fiabilité.",
    color: 'info',
    icon: 'mdi-file-document-check'
  }
]
</script>

<style scoped>
.expertises-section {
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

.expertise-col {
  margin-bottom: 32px;
}

.expertise-card {
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: visible;
  background: white;
  border: 2px solid transparent;
}

.expertise-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
}

.expertise-card-primary:hover {
  border-color: #1a237e;
}

.expertise-card-secondary:hover {
  border-color: #283593;
}

.expertise-card-success:hover {
  border-color: #4caf50;
}

.expertise-card-info:hover {
  border-color: #2196f3;
}

.expertise-number-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 24px;
}

.expertise-number {
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

.expertise-number-primary {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
}

.expertise-number-secondary {
  background: linear-gradient(135deg, #283593 0%, #3949ab 100%);
}

.expertise-number-success {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
}

.expertise-number-info {
  background: linear-gradient(135deg, #2196f3 0%, #42a5f5 100%);
}

.expertise-card:hover .expertise-number {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.expertise-icon {
  transition: all 0.4s ease;
}

.expertise-card:hover .expertise-icon {
  transform: scale(1.2);
}

.expertise-title {
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

.expertise-title-text {
  display: block;
  width: 100%;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  white-space: normal;
}

.expertise-description {
  min-height: 100px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .expertise-card {
    margin-bottom: 48px;
  }

  .expertise-number-wrapper {
    margin-top: -32px;
  }

  .expertise-number {
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
  }
}
</style>
