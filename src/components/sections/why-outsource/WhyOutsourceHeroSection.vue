<template>
  <section class="why-outsource-hero section-padding">
    <div class="why-outsource-hero-background"></div>
    <v-container class="why-outsource-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-chip
            color="white"
            variant="flat"
            size="large"
            class="mb-6 text-primary font-weight-bold"
          >
            <v-icon start>mdi-lightbulb-on</v-icon>
            Externalisation
          </v-chip>
          <h1 class="why-outsource-hero-title mb-6">
            Pourquoi externaliser<br>
            <span class="gradient-text-white">avec EBHI ?</span>
          </h1>
          <p class="why-outsource-hero-subtitle mb-8">
            Libérez votre potentiel, recentrez-vous sur votre croissance
          </p>
          <div class="why-outsource-hero-description">
            <p class="text-body-1 mb-4" style="opacity: 0.95; line-height: 1.8;">
              Dans un contexte économique exigeant, la capacité à se concentrer sur son cœur de métier 
              tout en maîtrisant ses charges et en accélérant son développement est devenue essentielle. 
              L'externalisation ne consiste plus à simplement déléguer une tâche, mais à 
              <strong>faire le choix stratégique de la performance, de la flexibilité et de l'optimisation des ressources</strong>.
            </p>
            <p class="text-body-1" style="opacity: 0.95; line-height: 1.8;">
              Chez <strong>EBHI</strong>, nous avons redéfini l'externalisation comme un 
              <strong>levier structurant de croissance</strong>. Grâce à notre approche sur mesure, 
              nous vous permettons d'accéder à des compétences de haut niveau, à un pilotage rigoureux 
              et à des résultats tangibles, tout en réduisant les risques et les coûts.
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
.why-outsource-hero {
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.why-outsource-hero-background {
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

.why-outsource-hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.why-outsource-hero-background::after {
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

.why-outsource-hero-content {
  position: relative;
  z-index: 1;
}

.why-outsource-hero-title {
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

.why-outsource-hero-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  opacity: 0.95;
  line-height: 1.4;
  font-weight: 600;
}

.why-outsource-hero-description {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}
</style>
