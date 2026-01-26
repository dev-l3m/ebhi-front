<template>
  <section id="services" class="services-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-star-circle</v-icon>
          Nos Services
        </v-chip>
        <h2 class="section-title mb-6">
          Externalisation de fonctions<br>
          <span class="gradient-text">support et opérationnelles</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Notre approche personnalisée garantit que chaque membre de notre équipe s'intègre 
          parfaitement à votre structure et contribue activement à vos objectifs.
        </p>
      </div>

      <v-row class="services-grid">
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="service-col"
        >
          <v-card
            :class="['service-card', { 'service-card-hovered': hovered === index }]"
            :elevation="hovered === index ? 12 : 4"
            @mouseenter="hovered = index"
            @mouseleave="hovered = null"
          >
            <div class="service-icon-wrapper">
              <div class="service-icon-bg" :style="{ background: getColorGradient(service.color) }">
                <v-icon :color="service.color" size="48">{{ service.icon }}</v-icon>
              </div>
            </div>
            <v-card-item class="pa-6 pt-0">
              <v-card-title class="text-h5 mb-3 service-title">
                {{ service.title }}
              </v-card-title>
              <v-card-text class="pa-0">
                <p class="text-body-1 text-grey-darken-1 service-description">
                  {{ service.description }}
                </p>
              </v-card-text>
            </v-card-item>
            <v-card-actions class="pa-6 pt-0">
              <v-btn
                :color="service.color"
                variant="text"
                class="service-btn"
                @click="openServiceDialog(service)"
              >
                En savoir plus
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Service Details Dialog -->
      <v-dialog
        v-model="serviceDialog"
        max-width="900"
        scrollable
        persistent
      >
        <v-card rounded="xl" v-if="selectedService">
          <v-card-title class="d-flex align-center justify-space-between pa-6 dialog-header" :style="{ background: getColorGradient(selectedService.color) }">
            <div class="d-flex align-center">
              <div class="dialog-icon-wrapper mr-4">
                <v-icon :color="selectedService.color" size="40">{{ selectedService.icon }}</v-icon>
              </div>
              <span class="text-h5 font-weight-bold">{{ selectedService.title }}</span>
            </div>
            <v-btn
              icon
              variant="text"
              size="small"
              @click="serviceDialog = false"
              class="close-btn"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-6">
            <div class="service-details-content">
              <p class="text-h6 mb-6 service-intro">
                {{ selectedService.detailedDescription }}
              </p>

              <div class="service-features mb-6">
                <h3 class="text-h6 mb-4 font-weight-bold">Nos prestations</h3>
                <v-row>
                  <v-col
                    v-for="(feature, index) in selectedService.features"
                    :key="index"
                    cols="12"
                    md="6"
                    class="feature-col"
                  >
                    <div class="feature-item d-flex align-start mb-3">
                      <v-icon :color="selectedService.color" size="24" class="mr-3 mt-1">mdi-check-circle</v-icon>
                      <span class="text-body-1">{{ feature }}</span>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <v-divider class="my-6"></v-divider>

              <div class="service-benefits">
                <h3 class="text-h6 mb-4 font-weight-bold">Avantages</h3>
                <v-row>
                  <v-col
                    v-for="(benefit, index) in selectedService.benefits"
                    :key="index"
                    cols="12"
                    sm="6"
                    md="4"
                    class="benefit-col"
                  >
                    <v-card
                      :elevation="2"
                      class="benefit-card"
                      rounded="lg"
                    >
                      <v-card-item class="pa-4">
                        <div class="d-flex align-center">
                          <v-icon :color="selectedService.color" size="28" class="mr-3">{{ benefit.icon }}</v-icon>
                          <div>
                            <div class="text-body-2 font-weight-bold mb-1">{{ benefit.title }}</div>
                            <div class="text-caption text-grey-darken-1">{{ benefit.description }}</div>
                          </div>
                        </div>
                      </v-card-item>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-6">
            <v-spacer></v-spacer>
            <v-btn
              :color="selectedService.color"
              variant="elevated"
              rounded="lg"
              size="large"
              @click="scrollToContact"
            >
              <v-icon start>mdi-email</v-icon>
              Nous contacter
            </v-btn>
            <v-btn
              variant="outlined"
              rounded="lg"
              size="large"
              class="ml-3"
              @click="serviceDialog = false"
            >
              Fermer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const hovered = ref(null)
const serviceDialog = ref(false)
const selectedService = ref(null)

const services = [
  {
    title: 'Ressources Humaines',
    description: 'Gestion complète de vos ressources humaines avec des experts dédiés. Recrutement, formation, gestion des carrières et bien plus.',
    detailedDescription: 'EBHI vous accompagne dans la gestion complète de vos ressources humaines avec une expertise dédiée. Nous mettons à votre disposition des professionnels qualifiés pour optimiser votre gestion RH et développer vos talents.',
    icon: 'mdi-account-group',
    color: 'primary',
    features: [
      'Recrutement et sélection de profils',
      'Gestion administrative du personnel',
      'Formation et développement des compétences',
      'Gestion des carrières et mobilité',
      'Paie et gestion des contrats',
      'Conseil en stratégie RH'
    ],
    benefits: [
      { icon: 'mdi-account-multiple', title: 'Équipes qualifiées', description: 'Profils sélectionnés selon vos critères' },
      { icon: 'mdi-chart-line', title: 'Performance optimisée', description: 'Amélioration continue de vos processus' },
      { icon: 'mdi-shield-check', title: 'Conformité garantie', description: 'Respect des réglementations en vigueur' }
    ]
  },
  {
    title: 'Ingénierie en Conception',
    description: 'Solutions d\'ingénierie et de conception produits sur mesure. De la conception à la production, nous accompagnons vos projets.',
    detailedDescription: 'Notre expertise en ingénierie et conception vous permet de développer des produits innovants et performants. De la phase de conception à la production, nos équipes d\'ingénieurs vous accompagnent dans tous vos projets techniques.',
    icon: 'mdi-cog',
    color: 'secondary',
    features: [
      'Conception et développement de produits',
      'Ingénierie mécanique et électrique',
      'CAO/DAO et modélisation 3D',
      'Prototypage et tests',
      'Optimisation des processus de production',
      'Support technique et maintenance'
    ],
    benefits: [
      { icon: 'mdi-lightbulb-on', title: 'Innovation', description: 'Solutions techniques avancées' },
      { icon: 'mdi-speedometer', title: 'Rapidité', description: 'Délais de développement optimisés' },
      { icon: 'mdi-cog', title: 'Expertise', description: 'Ingénieurs expérimentés' }
    ]
  },
  {
    title: 'Produits Chimie et Conception',
    description: 'Expertise en chimie et conception de produits innovants. Développement de solutions chimiques adaptées à vos besoins.',
    detailedDescription: 'Notre expertise en chimie et conception de produits vous permet de développer des solutions innovantes et performantes. Nos équipes de chimistes et concepteurs travaillent sur des projets variés, de la recherche à la production.',
    icon: 'mdi-flask',
    color: 'success',
    features: [
      'Développement de formulations',
      'Analyse et contrôle qualité',
      'Conception de produits chimiques',
      'Recherche et développement',
      'Optimisation des procédés',
      'Conformité réglementaire'
    ],
    benefits: [
      { icon: 'mdi-flask-outline', title: 'Expertise scientifique', description: 'Chimistes et chercheurs qualifiés' },
      { icon: 'mdi-shield-check', title: 'Sécurité', description: 'Respect des normes de sécurité' },
      { icon: 'mdi-chart-bar', title: 'Qualité', description: 'Contrôles qualité rigoureux' }
    ]
  },
  {
    title: 'Marketing et Communication',
    description: 'Stratégies marketing et communication pour développer votre présence. Création de contenu, gestion des réseaux sociaux et campagnes publicitaires.',
    detailedDescription: 'Développez votre présence et votre notoriété avec nos solutions marketing et communication. Nos équipes créatives et stratégiques vous accompagnent dans tous vos projets de communication, du digital au print.',
    icon: 'mdi-bullhorn',
    color: 'info',
    features: [
      'Stratégie marketing et communication',
      'Création de contenu et rédaction',
      'Gestion des réseaux sociaux',
      'Campagnes publicitaires digitales',
      'Design graphique et branding',
      'Analyse et reporting de performance'
    ],
    benefits: [
      { icon: 'mdi-trending-up', title: 'Croissance', description: 'Augmentation de votre visibilité' },
      { icon: 'mdi-palette', title: 'Créativité', description: 'Contenus créatifs et engageants' },
      { icon: 'mdi-chart-line', title: 'ROI mesurable', description: 'Suivi des performances' }
    ]
  },
  {
    title: 'Support Techniques',
    description: 'Support technique réactif et professionnel pour vos opérations. Assistance 24/7 et résolution rapide des problèmes.',
    detailedDescription: 'Bénéficiez d\'un support technique réactif et professionnel pour toutes vos opérations. Nos équipes techniques sont disponibles 24/7 pour vous assister et résoudre rapidement tous vos problèmes techniques.',
    icon: 'mdi-headset',
    color: 'warning',
    features: [
      'Support technique multilingue',
      'Assistance 24/7',
      'Résolution de problèmes',
      'Maintenance préventive',
      'Formation utilisateurs',
      'Documentation technique'
    ],
    benefits: [
      { icon: 'mdi-clock-outline', title: 'Disponibilité', description: 'Support 24/7' },
      { icon: 'mdi-speedometer', title: 'Réactivité', description: 'Résolution rapide' },
      { icon: 'mdi-account-group', title: 'Expertise', description: 'Équipes qualifiées' }
    ]
  },
  {
    title: 'Service après vente',
    description: 'Services après-vente complets pour satisfaire vos clients. Gestion des réclamations, suivi client et amélioration continue.',
    detailedDescription: 'Offrez à vos clients une expérience exceptionnelle avec nos services après-vente complets. Nous gérons toutes les interactions post-vente pour garantir la satisfaction et la fidélisation de vos clients.',
    icon: 'mdi-handshake',
    color: 'error',
    features: [
      'Gestion des réclamations',
      'Suivi client et relation client',
      'Support post-vente',
      'Gestion des retours et échanges',
      'Enquêtes de satisfaction',
      'Amélioration continue'
    ],
    benefits: [
      { icon: 'mdi-heart', title: 'Satisfaction', description: 'Clients satisfaits et fidèles' },
      { icon: 'mdi-chart-line', title: 'Performance', description: 'Amélioration continue' },
      { icon: 'mdi-account-group', title: 'Relation', description: 'Relation client optimisée' }
    ]
  }
]

const getColorGradient = (color) => {
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

const openServiceDialog = (service) => {
  selectedService.value = service
  serviceDialog.value = true
}

const scrollToContact = () => {
  serviceDialog.value = false
  setTimeout(() => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }, 300)
}
</script>

<style scoped>
.services-section {
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
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

.services-grid {
  margin-top: 40px;
}

.service-col {
  margin-bottom: 32px;
}

.service-card {
  border-radius: 24px !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a237e, #3f51b5);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card-hovered::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.service-icon-wrapper {
  position: relative;
  padding: 32px 32px 0;
  display: flex;
  justify-content: center;
}

.service-icon-bg {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-card:hover .service-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.service-icon-bg::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .service-icon-bg::after {
  opacity: 1;
}

.service-title {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3;
}

.service-description {
  line-height: 1.7;
  min-height: 60px;
}

.service-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.service-btn:hover {
  transform: translateX(4px);
}

/* Dialog Styles */
.dialog-header {
  position: relative;
  overflow: hidden;
}

.dialog-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.close-btn {
  transition: all 0.3s ease;
  color: rgba(0, 0, 0, 0.7) !important;
}

.close-btn:hover {
  transform: rotate(90deg);
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.service-details-content {
  max-width: 100%;
}

.service-intro {
  color: #424242;
  line-height: 1.8;
  font-weight: 500;
}

.service-features {
  margin-top: 32px;
}

.feature-col {
  margin-bottom: 8px;
}

.feature-item {
  line-height: 1.6;
}

.service-benefits {
  margin-top: 32px;
}

.benefit-col {
  margin-bottom: 16px;
}

.benefit-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }
  
  .service-card {
    margin-bottom: 24px;
  }

  .dialog-header {
    padding: 20px !important;
  }

  .dialog-header .text-h5 {
    font-size: 1.25rem;
  }

  .dialog-icon-wrapper {
    width: 48px;
    height: 48px;
  }

  .dialog-icon-wrapper .v-icon {
    font-size: 24px !important;
  }
}
</style>
