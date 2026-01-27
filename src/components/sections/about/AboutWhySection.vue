<template>
  <section class="about-why-section section-padding">
    <div class="about-why-background"></div>
    <v-container class="about-why-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-icon color="white" size="64" class="mb-6">mdi-lightbulb-on</v-icon>
          <h2 class="about-why-title mb-6">
            Pourquoi<br />
            <span class="gradient-text-white">EBHI ?</span>
          </h2>
          <div class="about-why-description text-left">
            <p class="text-h6 mb-4" style="opacity: 0.95; line-height: 1.8">
              Parce que vous ne cherchez pas un sous-traitant, mais
              <strong>un partenaire de confiance</strong>. Parce que vous avez besoin de
              <strong>ressources fiables, disponibles, encadrées et évolutives</strong>. Parce que
              vous voulez aller plus vite, plus loin, sans perdre en maîtrise ni en qualité.
            </p>
            <p class="text-h5 font-weight-bold" style="opacity: 0.95">
              Vous avez un projet ? Nous avons la structure pour le concrétiser.
            </p>
          </div>
          <div class="mt-8">
            <v-btn
              color="white"
              size="x-large"
              variant="elevated"
              rounded="xl"
              class="about-why-btn"
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
.about-why-section {
  position: relative;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.about-why-background {
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

.about-why-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.about-why-background::after {
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

.about-why-content {
  position: relative;
  z-index: 1;
}

.about-why-title {
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

.about-why-description {
  max-width: 900px;
  margin: 0 auto;
}

.about-why-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 20px 40px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease;
}

.about-why-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}
</style>
