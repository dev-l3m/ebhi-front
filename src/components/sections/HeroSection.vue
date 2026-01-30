<template>
  <v-container
    fluid
    class="hero-section pa-0"
    style="min-height: 100vh; position: relative; overflow: hidden"
  >
    <!-- Background avec gradient animé -->
    <div class="hero-background"></div>

    <!-- Éléments décoratifs -->
    <div class="hero-decoration">
      <div class="decoration-circle circle-1"></div>
      <div class="decoration-circle circle-2"></div>
      <div class="decoration-circle circle-3"></div>
    </div>

    <v-row
      align="center"
      justify="center"
      class="ma-0 hero-content"
      style="min-height: 100vh; position: relative; z-index: 2"
    >
      <v-col cols="12" md="10" lg="8" class="text-center text-white px-8">
        <!-- Badge -->
        <div class="hero-badge mb-6 fade-in-delay-1">
          <v-chip
            color="white"
            variant="flat"
            size="large"
            class="text-primary font-weight-bold hero-chip"
            style="margin-top: 50px"
          >
            <v-icon start class="hero-chip-icon">mdi-rocket-launch</v-icon>
            <span class="hero-chip-text">{{ $t('hero.badge') }}</span>
          </v-chip>
        </div>

        <!-- Titre principal -->
        <h1 class="hero-title mb-6 fade-in-delay-2" v-html="formatHeroTitle($t('hero.title'))"></h1>

        <!-- Sous-titre -->
        <p class="hero-subtitle mb-10 fade-in-delay-3">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Boutons d'action -->
        <div class="hero-actions d-flex flex-column flex-md-row justify-center fade-in-delay-4">
          <v-btn
            size="x-large"
            color="white"
            variant="elevated"
            class="hero-btn-primary"
            rounded="xl"
            @click="scrollToSection('services')"
          >
            <v-icon start class="hero-btn-icon">mdi-arrow-right-circle</v-icon>
            <span class="hero-btn-text">{{ $t('hero.ctaDiscover') }}</span>
          </v-btn>
          <v-btn
            size="x-large"
            color="white"
            variant="outlined"
            class="hero-btn-secondary"
            rounded="xl"
            @click="scrollToSection('contact')"
          >
            <v-icon start class="hero-btn-icon">mdi-phone</v-icon>
            <span class="hero-btn-text">{{ $t('hero.ctaContact') }}</span>
          </v-btn>
        </div>

        <!-- Stats rapides -->
        <div class="hero-stats mt-12 fade-in-delay-5">
          <v-row class="text-center">
            <v-col cols="6" md="3">
              <div class="stat-number">+250</div>
              <div class="stat-label">{{ $t('hero.stats.projects') }}</div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="stat-number">+100</div>
              <div class="stat-label">{{ $t('hero.stats.collaborators') }}</div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="stat-number">+12</div>
              <div class="stat-label">{{ $t('hero.stats.expertises') }}</div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="stat-number">+20</div>
              <div class="stat-label">{{ $t('hero.stats.partners') }}</div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <!-- Indicateur de scroll -->
    <div class="scroll-indicator">
      <v-icon color="white" size="large">mdi-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<script setup>
const formatHeroTitle = title => {
  return title
    .replace(/Externalisez/g, '<span class="gradient-text-white">Externalisez</span>')
    .replace(/Boostez/g, '<span class="gradient-text-white">Boostez</span>')
    .replace(/Outsource/g, '<span class="gradient-text-white">Outsource</span>')
    .replace(/Boost/g, '<span class="gradient-text-white">Boost</span>')
}

const scrollToSection = id => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

/* Background animé */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a237e 0%, #283593 30%, #3f51b5 60%, #5c6bc0 100%);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
  z-index: 0;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Éléments décoratifs */
.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  animation: float 20s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation-delay: 0s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
  animation-delay: 5s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 10%;
  animation-delay: 10s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Contenu */
.hero-content {
  position: relative;
  z-index: 2;
}

/* Badge */
.hero-badge {
  display: inline-block;
}

/* Titre */
.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-text-white {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

/* Sous-titre */
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  opacity: 0.95;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Boutons */
.hero-actions {
  gap: 16px;
}

.hero-btn-primary {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 20px 40px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
  transition: all 0.3s ease;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.hero-btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3) !important;
}

.hero-btn-secondary {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 20px 40px !important;
  border: 2px solid white !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.hero-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.8) !important;
}

/* Stats */
.hero-stats {
  margin-top: 60px;
}

.stat-number {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: white;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

/* Animations */
.fade-in-delay-1 {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.fade-in-delay-2 {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.fade-in-delay-3 {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.fade-in-delay-4 {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.fade-in-delay-5 {
  animation: fadeInUp 0.8s ease-out 1s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Indicateur de scroll */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: bounce 2s infinite;
  cursor: pointer;
}

.scroll-indicator:hover {
  opacity: 0.7;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-15px);
  }
  60% {
    transform: translateX(-50%) translateY(-7px);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .hero-section {
    padding-top: 80px;
  }

  .hero-title {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    width: 100%;
    max-width: 400px;
  }
}

@media (max-width: 600px) {
  .hero-chip {
    font-size: 0.75rem !important;
    padding: 8px 12px !important;
    max-width: 100%;
  }

  .hero-chip-icon {
    font-size: 16px !important;
    margin-right: 4px !important;
  }

  .hero-chip-text {
    white-space: normal;
    line-height: 1.3;
    text-align: center;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    font-size: 0.875rem !important;
    padding: 16px 24px !important;
    min-height: 48px !important;
  }

  .hero-btn-icon {
    font-size: 20px !important;
    margin-right: 8px !important;
  }

  .hero-btn-text {
    white-space: normal;
    line-height: 1.2;
  }
}
</style>
