<template>
  <section class="services-cta-section section-padding">
    <div class="services-cta-background"></div>
    <v-container class="services-cta-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-icon color="white" size="64" class="mb-6">mdi-rocket-launch</v-icon>
          <h2 class="services-cta-title mb-6">
            Faites partie de notre<br />
            <span class="gradient-text-white">écosystème</span>
          </h2>
          <p class="services-cta-subtitle mb-8">
            Choisir EBHI, c'est rejoindre un écosystème structuré, exigeant et en pleine
            expansion.<br />
            Nous nous adressons aux entreprises qui souhaitent croître autrement, avec méthode,
            exigence et intelligence opérationnelle.
          </p>
          <p class="text-h6 font-weight-bold mb-8">
            Prenez contact avec notre équipe pour définir ensemble la solution qui fera progresser
            votre organisation, en toute confiance.
          </p>
          <v-btn
            color="white"
            size="x-large"
            variant="elevated"
            rounded="xl"
            class="services-cta-btn"
            @click="scrollToContact"
          >
            <v-icon start class="cta-btn-icon">mdi-calendar-clock</v-icon>
            <span class="cta-btn-text">Commencez dès aujourd'hui</span>
          </v-btn>
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
.services-cta-section {
  position: relative;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.services-cta-background {
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

.services-cta-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.services-cta-background::after {
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

.services-cta-content {
  position: relative;
  z-index: 1;
}

.services-cta-title {
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

.services-cta-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.95;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.services-cta-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 20px 40px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease;
  white-space: normal;
  word-wrap: break-word;
}

.cta-btn-text {
  white-space: normal;
  line-height: 1.3;
}

.cta-btn-icon {
  flex-shrink: 0;
}

.services-cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}

@media (max-width: 960px) {
  .services-cta-btn {
    font-size: 0.9375rem !important;
    padding: 16px 28px !important;
    min-height: 52px !important;
    width: 100%;
    max-width: 100%;
  }

  .cta-btn-icon {
    font-size: 20px !important;
    margin-right: 8px !important;
  }

  .cta-btn-text {
    font-size: 0.9375rem !important;
  }

  .services-cta-title {
    font-size: clamp(1.75rem, 5vw, 2.5rem) !important;
  }

  .services-cta-subtitle {
    font-size: clamp(0.9375rem, 2vw, 1.125rem) !important;
  }
}

@media (max-width: 600px) {
  .services-cta-btn {
    font-size: 0.875rem !important;
    padding: 14px 20px !important;
    min-height: 48px !important;
    border-radius: 12px !important;
  }

  .cta-btn-icon {
    font-size: 18px !important;
    margin-right: 6px !important;
  }

  .cta-btn-text {
    font-size: 0.875rem !important;
    line-height: 1.2;
  }

  .services-cta-section {
    min-height: 400px;
  }

  .services-cta-title {
    margin-bottom: 16px !important;
  }

  .services-cta-subtitle {
    margin-bottom: 16px !important;
    line-height: 1.6;
  }

  .text-h6 {
    font-size: 1rem !important;
    margin-bottom: 16px !important;
  }
}
</style>
