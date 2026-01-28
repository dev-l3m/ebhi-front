<template>
  <section class="about-hero section-padding">
    <div class="about-hero-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
    <v-container class="about-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <div class="hero-chip-wrapper mb-8">
            <v-chip
              color="white"
              variant="flat"
              size="large"
              class="hero-chip text-primary font-weight-bold"
            >
              <v-icon start class="chip-icon">mdi-information</v-icon>
              {{ $t('aboutPage.hero.chip') }}
            </v-chip>
          </div>
          <h1 class="about-hero-title mb-10" v-html="$t('aboutPage.hero.title')"></h1>
          <div class="about-hero-description text-left">
            <p
              class="text-h6 mb-5 description-paragraph"
              style="opacity: 0.95; line-height: 1.8"
              v-html="$t('aboutPage.hero.description1')"
            ></p>
            <p class="text-body-1 description-paragraph" style="opacity: 0.95; line-height: 1.8">
              {{ $t('aboutPage.hero.description2') }}
            </p>
          </div>
          <div class="hero-stats mt-10">
            <div class="stat-item">
              <div class="stat-number">+250</div>
              <div class="stat-label">{{ $t('stats.projects') }}</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">+100</div>
              <div class="stat-label">{{ $t('stats.collaborators') }}</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">+12</div>
              <div class="stat-label">{{ $t('stats.expertises') }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup></script>

<style scoped>
.about-hero {
  position: relative;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

.about-hero-background {
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

.about-hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.about-hero-background::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

/* Floating Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 5%;
  animation-delay: 0s;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 10%;
  animation-delay: 5s;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.shape-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 15%;
  animation-delay: 10s;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 20%;
  animation-delay: 15s;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translate(30px, -30px) rotate(90deg);
    opacity: 0.5;
  }
  50% {
    transform: translate(-20px, 20px) rotate(180deg);
    opacity: 0.4;
  }
  75% {
    transform: translate(20px, 30px) rotate(270deg);
    opacity: 0.6;
  }
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

.about-hero-content {
  position: relative;
  z-index: 2;
  animation: fadeInUp 1s ease-out;
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

/* Hero Chip */
.hero-chip-wrapper {
  animation: fadeInDown 0.8s ease-out 0.2s both;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-chip {
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.hero-chip::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.hero-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.chip-icon {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Hero Title */
.about-hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  animation: fadeInUp 1s ease-out 0.4s both;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.gradient-text-white {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.gradient-text-white::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  filter: blur(10px);
  z-index: -1;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 0.6;
  }
}

/* Description */
.about-hero-description {
  max-width: 900px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.description-paragraph {
  animation: fadeInUp 1s ease-out both;
}

.description-paragraph:nth-child(1) {
  animation-delay: 0.8s;
}

.description-paragraph:nth-child(2) {
  animation-delay: 1s;
}

/* Hero Stats */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 1.2s both;
  padding: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.stat-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px) scale(1.05);
}

.stat-number {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
}

.stat-label {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 600;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 960px) {
  .about-hero {
    min-height: 70vh;
    padding: 60px 0;
  }

  .hero-stats {
    gap: 24px;
    padding: 20px;
  }

  .stat-divider {
    height: 50px;
  }

  .shape-1,
  .shape-2,
  .shape-3,
  .shape-4 {
    opacity: 0.2;
  }
}

@media (max-width: 600px) {
  .about-hero {
    min-height: 60vh;
    padding: 40px 0;
  }

  .hero-chip-wrapper {
    margin-bottom: 24px !important;
  }

  .about-hero-title {
    margin-bottom: 32px !important;
  }

  .hero-stats {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .stat-divider {
    width: 60px;
    height: 1px;
  }

  .stat-number {
    font-size: 2rem !important;
  }

  .stat-label {
    font-size: 0.75rem !important;
  }

  .shape {
    display: none;
  }
}
</style>
