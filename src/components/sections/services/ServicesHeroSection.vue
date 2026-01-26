<template>
  <section class="services-hero section-padding">
    <div class="services-hero-background"></div>
    <v-container class="services-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-chip
            color="white"
            variant="flat"
            size="large"
            class="mb-6 text-primary font-weight-bold"
          >
            <v-icon start>mdi-rocket-launch</v-icon>
            Nos Services
          </v-chip>
          <h1 class="services-hero-title mb-6">
            L'externalisation autrement :<br>
            <span class="gradient-text-white">rigueur, performance et maîtrise</span>
          </h1>
          <p class="services-hero-subtitle mb-8">
            Chez EBHI, nous ne proposons pas une externalisation standardisée. Nous construisons avec vous 
            une organisation sur mesure, optimisée et pilotée à distance, pour alléger votre charge opérationnelle, 
            améliorer vos performances et vous faire gagner du temps sans compromis sur la qualité.
          </p>
          <div class="services-hero-highlight">
            <v-icon color="white" size="32" class="mr-3">mdi-star-circle</v-icon>
            <span class="text-h6 font-weight-bold">Notre force</span> : un accompagnement structuré, humain et stratégique, de A à Z.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
</script>

<style scoped>
.services-hero {
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.services-hero-background {
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

.services-hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.services-hero-background::after {
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

.services-hero-content {
  position: relative;
  z-index: 1;
}

.services-hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-text-white {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.services-hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.95;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
}

.services-hero-highlight {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 20px 32px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 32px;
}
</style>
