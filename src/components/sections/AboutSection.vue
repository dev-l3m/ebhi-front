<template>
  <section id="about" class="about-section section-padding">
    <v-container>
      <v-row align="center" class="about-row">
        <v-col cols="12" md="6" class="about-content-col">
          <v-chip
            color="primary"
            variant="flat"
            size="large"
            class="mb-6"
          >
            <v-icon start>mdi-information</v-icon>
            À propos
          </v-chip>
          <h2 class="about-title mb-4">
            Qui sommes-nous ?
          </h2>
          <div class="about-subtitle text-primary mb-6">
            Votre entreprise d'externalisation off shore
          </div>
          <div class="about-text">
            <p class="text-body-1 mb-4" style="line-height: 1.8;">
              Chez <strong>Entrepreneur Business Hub International (EBHI)</strong>, nous sommes plus qu'un simple 
              prestataire de services d'externalisation. Nous sommes votre <strong>partenaire stratégique</strong>, 
              dédié à transformer vos défis opérationnels en opportunités de croissance.
            </p>
            <p class="text-body-1 mb-4" style="line-height: 1.8;">
              Fondée sur des valeurs d'<strong>excellence</strong>, de <strong>transparence</strong>, et de 
              <strong>collaboration</strong>, notre entreprise se distingue par une approche personnalisée qui 
              s'adapte aux besoins spécifiques de chaque client.
            </p>
            <p class="text-body-1 mb-8" style="line-height: 1.8;">
              Notre mission est de <strong>simplifier vos opérations</strong>, <strong>réduire vos coûts</strong> et 
              <strong>accélérer votre croissance</strong> en mettant à votre disposition des talents spécialisés et 
              des solutions innovantes.
            </p>
            <v-btn
              color="primary"
              size="x-large"
              variant="elevated"
              rounded="xl"
              class="about-cta-btn"
              @click="scrollToContact"
            >
              <v-icon start>mdi-calendar-clock</v-icon>
              Prenez rendez-vous
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="about-sectors-col">
          <v-card :elevation="12" class="sectors-card" rounded="xl">
            <v-card-item class="pa-8">
              <div class="text-center mb-8">
                <v-icon color="primary" size="48" class="mb-4">mdi-domain</v-icon>
                <div class="text-h4 font-weight-bold mb-2">Nos secteurs d'interventions</div>
                <p class="text-body-2 text-grey-darken-1">
                  Expertise dans tous les domaines
                </p>
              </div>
              <v-row class="sectors-grid">
                <v-col
                  v-for="(sector, index) in sectors"
                  :key="index"
                  cols="6"
                  class="sector-item"
                >
                  <div class="sector-card">
                    <div class="sector-icon-wrapper" :style="{ background: getSectorGradient(sector.color) }">
                      <v-icon
                        :color="sector.color"
                        size="32"
                      >
                        {{ sector.icon }}
                      </v-icon>
                    </div>
                    <div class="text-body-1 font-weight-medium mt-3 text-center">{{ sector.name }}</div>
                  </div>
                </v-col>
              </v-row>
              <v-divider class="my-6"></v-divider>
              <p class="text-body-2 text-center text-grey-darken-1" style="line-height: 1.6;">
                Que vous soyez dans la technologie, le design, le commerce, l'ingénierie ou la chimie, 
                EBHI a les compétences pour répondre à vos besoins.
              </p>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const sectors = [
  { name: 'Technologie', icon: 'mdi-laptop', color: 'primary' },
  { name: 'Design', icon: 'mdi-palette', color: 'secondary' },
  { name: 'Commerce', icon: 'mdi-store', color: 'success' },
  { name: 'Ingénierie', icon: 'mdi-cog', color: 'info' },
  { name: 'Chimie', icon: 'mdi-flask', color: 'warning' },
  { name: 'Marketing', icon: 'mdi-bullhorn', color: 'error' }
]

const getSectorGradient = (color) => {
  const gradients = {
    primary: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    secondary: 'linear-gradient(135deg, rgba(40, 53, 147, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    success: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.1) 100%)',
    info: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(100, 181, 246, 0.1) 100%)',
    warning: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 224, 130, 0.1) 100%)',
    error: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1) 0%, rgba(255, 138, 101, 0.1) 100%)'
  }
  return gradients[color] || gradients.primary
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.about-section {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
  position: relative;
}

.about-row {
  min-height: 600px;
}

.about-content-col {
  padding-right: 48px;
}

.about-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.about-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
}

.about-text {
  color: #424242;
}

.about-cta-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 16px rgba(26, 35, 126, 0.3) !important;
  transition: all 0.3s ease;
}

.about-cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(26, 35, 126, 0.4) !important;
}

.about-sectors-col {
  padding-left: 48px;
}

.sectors-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.sectors-grid {
  margin-top: 24px;
}

.sector-item {
  margin-bottom: 24px;
}

.sector-card {
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 12px;
}

.sector-card:hover {
  transform: translateY(-4px);
}

.sector-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.sector-card:hover .sector-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

@media (max-width: 960px) {
  .about-content-col,
  .about-sectors-col {
    padding: 0;
    margin-bottom: 48px;
  }
  
  .about-row {
    min-height: auto;
  }
}
</style>
