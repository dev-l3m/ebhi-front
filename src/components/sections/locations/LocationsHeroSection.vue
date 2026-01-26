<template>
  <section class="locations-hero section-padding">
    <div class="locations-hero-background"></div>
    <v-container class="locations-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-chip
            color="white"
            variant="flat"
            size="large"
            class="mb-6 text-primary font-weight-bold"
          >
            <v-icon start>mdi-earth</v-icon>
            Implantations
          </v-chip>
          <h1 class="locations-hero-title mb-8">
            Nos implantations<br>
            <span class="gradient-text-white">stratégiques</span>
          </h1>
          <div class="locations-hero-description text-left">
            <p class="text-h6 mb-4" style="opacity: 0.95; line-height: 1.8;">
              Des bases opérationnelles sur-mesure. Partout où vos projets l'exigent.
            </p>
            <p class="text-body-1 mb-4" style="opacity: 0.95; line-height: 1.8;">
              Chez <strong>Entrepreneur Business Hub International (EBHI)</strong>, nous ne vous proposons pas 
              simplement des pays d'implantation.
            </p>
            <p class="text-body-1" style="opacity: 0.95; line-height: 1.8;">
              Nous vous offrons des <strong>leviers concrets de croissance</strong>, activables immédiatement, 
              conçus pour externaliser avec efficacité, coordonner à l'international, et booster votre performance globale.
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
.locations-hero {
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.locations-hero-background {
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

.locations-hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.locations-hero-background::after {
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

.locations-hero-content {
  position: relative;
  z-index: 1;
}

.locations-hero-title {
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

.locations-hero-description {
  max-width: 900px;
  margin: 0 auto;
}
</style>
