<template>
  <section class="domains-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Domaines<br>
          <span class="gradient-text">d'intervention</span>
        </h2>
        <p class="section-subtitle mx-auto">
          EBHI met à votre disposition des ressources spécialisées et immédiatement opérationnelles, 
          selon les besoins spécifiques de votre secteur d'activité.
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(domain, index) in domains"
          :key="index"
          cols="6"
          md="4"
          lg="3"
          class="domain-col"
        >
          <v-card
            :elevation="4"
            class="domain-card text-center"
            rounded="xl"
          >
            <v-card-item class="pa-6">
              <div class="domain-icon-wrapper mb-4">
                <div class="domain-icon-bg" :style="{ background: getDomainGradient(domain.color) }">
                  <v-icon :color="domain.color" size="40">{{ domain.icon }}</v-icon>
                </div>
              </div>
              <v-card-title class="text-body-1 font-weight-bold pa-0">
                {{ domain.name }}
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const domains = [
  { name: 'Technologie', icon: 'mdi-laptop', color: 'primary' },
  { name: 'Relation client', icon: 'mdi-account-heart', color: 'secondary' },
  { name: 'Design', icon: 'mdi-palette', color: 'success' },
  { name: 'Back-office', icon: 'mdi-office-building', color: 'info' },
  { name: 'Support technique', icon: 'mdi-headset', color: 'warning' },
  { name: 'Ingénierie', icon: 'mdi-cog', color: 'error' },
  { name: 'Achats', icon: 'mdi-cart', color: 'primary' },
  { name: 'Finance', icon: 'mdi-currency-eur', color: 'secondary' },
  { name: 'Industrie', icon: 'mdi-factory', color: 'success' }
]

const getDomainGradient = (color) => {
  const gradients = {
    primary: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    secondary: 'linear-gradient(135deg, rgba(40, 53, 147, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    success: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.1) 100%)',
    info: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(100, 181, 246, 0.1) 100%)',
    warning: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 224, 130, 0.1) 100%)',
    error: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1) 0%, rgba(255, 138, 101, 0.1) 100%)'
  }
  return gradients[color] || gradients.primary
}
</script>

<style scoped>
.domains-section {
  position: relative;
}

.section-header {
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #616161;
  max-width: 700px;
  line-height: 1.6;
}

.domain-col {
  margin-bottom: 24px;
}

.domain-card {
  transition: all 0.3s ease;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.domain-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1) !important;
}

.domain-icon-wrapper {
  display: flex;
  justify-content: center;
}

.domain-icon-bg {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.domain-card:hover .domain-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

@media (max-width: 960px) {
  .domain-card {
    margin-bottom: 16px;
  }
}
</style>
