<template>
  <section class="join-us-hero section-padding">
    <div class="join-us-hero-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
    <v-container class="join-us-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <div class="hero-chip-wrapper mb-8">
            <v-chip
              color="white"
              variant="flat"
              size="large"
              class="hero-chip text-primary font-weight-bold"
            >
              <v-icon start class="chip-icon">mdi-account-plus</v-icon>
              {{ $t('joinUsPage.hero.chip') }}
            </v-chip>
          </div>
          <h1 class="join-us-hero-title mb-10" v-html="$t('joinUsPage.hero.title')"></h1>
          <p
            class="join-us-hero-subtitle mb-8 subtitle-text"
            v-html="$t('joinUsPage.hero.subtitle')"
          ></p>
          <div class="join-us-hero-description description-wrapper">
            <p
              class="text-body-1 description-paragraph"
              v-html="$t('joinUsPage.hero.description')"
            ></p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup></script>

<style scoped>
.join-us-hero {
  position: relative;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

.join-us-hero-background {
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

.join-us-hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.join-us-hero-background::after {
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
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 10%;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 15%;
  animation-delay: 10s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 20%;
  animation-delay: 15s;
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

.join-us-hero-content {
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
.join-us-hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
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

/* Subtitle */
.join-us-hero-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  opacity: 0.95;
  line-height: 1.4;
  font-weight: 600;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.subtitle-text {
  animation: fadeInUp 1s ease-out 0.8s both;
}

/* Description */
.join-us-hero-description {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  animation: fadeInUp 1s ease-out 1s both;
}

.description-wrapper {
  animation: fadeInUp 1s ease-out 1.2s both;
}

.description-paragraph {
  opacity: 0.95;
  line-height: 1.8;
}

@media (max-width: 960px) {
  .join-us-hero {
    min-height: 70vh;
    padding: 60px 0;
  }

  .join-us-hero-description {
    text-align: center;
  }

  .shape {
    opacity: 0.2;
  }
}

@media (max-width: 600px) {
  .join-us-hero {
    min-height: 60vh;
    padding: 40px 0;
  }

  .hero-chip-wrapper {
    margin-bottom: 24px !important;
  }

  .join-us-hero-title {
    margin-bottom: 32px !important;
  }

  .join-us-hero-subtitle {
    margin-bottom: 24px !important;
  }

  .shape {
    display: none;
  }
}
</style>
