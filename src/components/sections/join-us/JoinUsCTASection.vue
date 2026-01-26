<template>
  <section class="join-us-cta-section section-padding">
    <div class="join-us-cta-background"></div>
    <v-container class="join-us-cta-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-icon color="white" size="64" class="mb-6">mdi-briefcase-search</v-icon>
          <h2 class="join-us-cta-title mb-6">
            Prêt à nous<br>
            <span class="gradient-text-white">rejoindre ?</span>
          </h2>
          <p class="join-us-cta-subtitle mb-8">
            Découvrez nos offres d'emploi et postulez pour rejoindre une équipe dynamique 
            qui accompagne la croissance des entreprises ambitieuses.
          </p>
          <v-btn
            color="white"
            size="x-large"
            variant="elevated"
            rounded="xl"
            class="join-us-cta-btn"
            href="https://l3m.factorial.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon start>mdi-briefcase</v-icon>
            Consultez nos offres
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
</script>

<style scoped>
.join-us-cta-section {
  position: relative;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.join-us-cta-background {
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

.join-us-cta-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.join-us-cta-background::after {
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

.join-us-cta-content {
  position: relative;
  z-index: 1;
}

.join-us-cta-title {
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

.join-us-cta-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.95;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.join-us-cta-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 20px 40px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.join-us-cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}
</style>
