<template>
  <section class="why-choose-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Pourquoi choisir<br>
          <span class="gradient-text">EBHI ?</span>
        </h2>
      </div>

      <v-row>
        <v-col
          v-for="(reason, index) in reasons"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="reason-col"
        >
          <v-card
            :elevation="8"
            class="reason-card h-100"
            rounded="xl"
          >
            <v-card-item class="pa-6">
              <div class="d-flex align-start mb-4">
                <div class="reason-icon-wrapper mr-4">
                  <v-icon :color="reason.color" size="40">{{ reason.icon }}</v-icon>
                </div>
                <div class="flex-grow-1">
                  <v-card-title class="text-h6 mb-3 pa-0 reason-title" style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word;">
                    {{ reason.title }}
                  </v-card-title>
                  <v-card-text class="text-body-2 text-grey-darken-1 pa-0 reason-description">
                    {{ reason.description }}
                  </v-card-text>
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
const reasons = [
  {
    title: 'Un pilotage sur mesure',
    description: 'Pas une sous-traitance impersonnelle, mais un accompagnement personnalisé adapté à vos besoins spécifiques.',
    color: 'primary',
    icon: 'mdi-target'
  },
  {
    title: 'Une qualité de recrutement supérieure',
    description: 'Sélection rigoureuse de profils qualifiés qui s\'intègrent parfaitement à votre culture d\'entreprise.',
    color: 'secondary',
    icon: 'mdi-account-star'
  },
  {
    title: 'Un onboarding structuré et maîtrisé',
    description: 'Intégration rapide et efficace de vos équipes avec un suivi continu pour garantir la performance.',
    color: 'success',
    icon: 'mdi-account-group'
  },
  {
    title: 'Un accompagnement exigeant et fiable',
    description: 'Suivi régulier et transparent de vos projets avec une communication constante et des rapports détaillés.',
    color: 'info',
    icon: 'mdi-handshake'
  },
  {
    title: 'Un rapport qualité-prix optimal',
    description: 'Solutions performantes sur des marchés à fort potentiel, maximisant votre ROI tout en réduisant vos coûts.',
    color: 'warning',
    icon: 'mdi-chart-line'
  }
]
</script>

<style scoped>
.why-choose-section {
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

.reason-col {
  margin-bottom: 32px;
}

.reason-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.reason-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.reason-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(26, 35, 126, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.reason-card:hover .reason-icon-wrapper {
  transform: scale(1.1);
  background: rgba(26, 35, 126, 0.15);
}

.reason-title {
  font-weight: 700;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  min-height: auto;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reason-description {
  line-height: 1.6;
}

@media (max-width: 960px) {
  .reason-card {
    margin-bottom: 24px;
  }
}
</style>
