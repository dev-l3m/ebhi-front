<template>
  <section class="about-hero section-padding">
    <div class="about-hero-background"></div>
    <v-container class="about-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-chip
            color="white"
            variant="flat"
            size="large"
            class="mb-6 text-primary font-weight-bold"
          >
            <v-icon start>mdi-information</v-icon>
            À propos
          </v-chip>
          <h1 class="about-hero-title mb-8">
            À PROPOS<br>
            <span class="gradient-text-white">D'EBHI</span>
          </h1>
          <div class="about-hero-description text-left">
            <p class="text-h6 mb-4" style="opacity: 0.95; line-height: 1.8;">
              <strong>ENTREPRENEUR BUSINESS HUB INTERNATIONAL</strong> est un hub opérationnel international 
              au service des entreprises ambitieuses.
            </p>
            <p class="text-body-1" style="opacity: 0.95; line-height: 1.8;">
              Nous ne vendons pas des prestations génériques. Nous mettons en place — pour vous, 
              avec vous — les ressources humaines, techniques et digitales dont vous avez besoin 
              pour concrétiser vos projets de développement, en divisant vos coûts et en augmentant 
              vos capacités d'action.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-hero {
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
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
  z-index: 1;
}

.about-hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.gradient-text-white {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-hero-description {
  max-width: 900px;
  margin: 0 auto;
}
</style>
