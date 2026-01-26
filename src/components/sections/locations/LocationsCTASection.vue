<template>
  <section class="locations-cta-section section-padding">
    <div class="locations-cta-background"></div>
    <v-container class="locations-cta-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-icon color="white" size="64" class="mb-6">mdi-earth</v-icon>
          <h2 class="locations-cta-title mb-6">
            Prêt à étendre votre<br>
            <span class="gradient-text-white">présence internationale ?</span>
          </h2>
          <p class="locations-cta-subtitle mb-8">
            Découvrez comment nos hubs stratégiques peuvent booster votre croissance 
            et optimiser vos opérations à l'international.
          </p>
          <div class="d-flex flex-column flex-md-row gap-4 justify-center">
            <v-btn
              color="white"
              size="x-large"
              variant="elevated"
              rounded="xl"
              class="cta-btn"
              to="/nos-services"
            >
              <v-icon start>mdi-arrow-right-circle</v-icon>
              Découvrez nos services
            </v-btn>
            <v-btn
              color="white"
              size="x-large"
              variant="outlined"
              rounded="xl"
              class="cta-btn"
              @click="scrollToContact"
            >
              <v-icon start>mdi-email</v-icon>
              Contactez-nous
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/#contact'
  }
}
</script>

<style scoped>
.locations-cta-section {
  position: relative;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.locations-cta-background {
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

.locations-cta-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.locations-cta-background::after {
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

.locations-cta-content {
  position: relative;
  z-index: 1;
}

.locations-cta-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
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

.locations-cta-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.95;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.cta-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 20px 40px !important;
  transition: all 0.3s ease;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.cta-btn:first-child {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
}

.cta-btn:first-child:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}

.cta-btn:last-child {
  border: 2px solid white !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
}

.cta-btn:last-child:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-4px);
}
</style>
