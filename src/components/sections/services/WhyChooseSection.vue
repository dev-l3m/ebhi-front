<template>
  <section class="why-choose-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Pourquoi choisir<br>
          <span class="gradient-text">EBHI ?</span>
        </h2>
      </div>

      <!-- Desktop Grid View -->
      <v-row class="d-none d-md-flex">
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

      <!-- Mobile Carousel View -->
      <div class="d-block d-md-none mobile-carousel-wrapper">
        <v-carousel
          v-model="carouselModel"
          :show-arrows="false"
          hide-delimiters
          height="auto"
          class="mobile-reasons-carousel"
        >
          <v-carousel-item
            v-for="(reason, index) in reasons"
            :key="index"
          >
            <div class="carousel-item-content">
              <v-card
                :elevation="8"
                class="reason-card-mobile"
                rounded="xl"
              >
                <v-card-item class="pa-6">
                  <div class="mobile-reason-content">
                    <div class="mobile-reason-icon-wrapper mb-4">
                      <v-icon :color="reason.color" size="48">{{ reason.icon }}</v-icon>
                    </div>
                    <v-card-title class="text-h6 mb-4 pa-0 mobile-reason-title">
                      {{ reason.title }}
                    </v-card-title>
                    <v-card-text class="text-body-2 text-grey-darken-1 pa-0 mobile-reason-description">
                      {{ reason.description }}
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </div>
          </v-carousel-item>
        </v-carousel>
        
        <!-- Custom Navigation Dots -->
        <div class="carousel-dots">
          <button
            v-for="(reason, index) in reasons"
            :key="index"
            :class="['carousel-dot', { active: carouselModel === index }]"
            @click="carouselModel = index"
            :aria-label="`Aller à ${reason.title}`"
          ></button>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const carouselModel = ref(0)

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

/* Mobile Carousel Styles */
.mobile-carousel-wrapper {
  position: relative;
  padding: 0 8px;
}

.mobile-reasons-carousel {
  margin-bottom: 24px;
}

.mobile-reasons-carousel :deep(.v-carousel__item) {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item-content {
  padding: 8px;
  height: 100%;
  display: flex;
  align-items: stretch;
}

.reason-card-mobile {
  width: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.mobile-reason-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-reason-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(26, 35, 126, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.mobile-reason-title {
  font-weight: 700;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: center;
  font-size: 1.125rem !important;
  min-height: auto;
}

.mobile-reason-description {
  line-height: 1.6;
  text-align: center;
  font-size: 0.9375rem !important;
}

/* Custom Navigation Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 0 16px;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  outline: none;
  flex-shrink: 0;
}

.carousel-dot:hover {
  background: rgba(26, 35, 126, 0.4);
  transform: scale(1.2);
}

.carousel-dot.active {
  background: #1a237e;
  width: 32px;
  border-radius: 5px;
  transform: scale(1);
}

@media (max-width: 600px) {
  .mobile-carousel-wrapper {
    padding: 0 4px;
  }
  
  .carousel-item-content {
    padding: 4px;
  }
  
  .reason-card-mobile .v-card-item {
    padding: 20px 16px !important;
  }
  
  .mobile-reason-icon-wrapper {
    width: 64px;
    height: 64px;
    margin-bottom: 16px !important;
  }
  
  .mobile-reason-icon-wrapper .v-icon {
    font-size: 36px !important;
  }
  
  .mobile-reason-title {
    font-size: 1rem !important;
    margin-bottom: 12px !important;
  }
  
  .mobile-reason-description {
    font-size: 0.875rem !important;
    line-height: 1.5;
  }
  
  .carousel-dots {
    margin-top: 16px;
    gap: 6px;
  }
  
  .carousel-dot {
    width: 8px;
    height: 8px;
  }
  
  .carousel-dot.active {
    width: 24px;
  }
}
</style>
