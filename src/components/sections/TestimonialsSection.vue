<template>
  <section class="testimonials-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-format-quote-open</v-icon>
          Témoignages
        </v-chip>
        <h2 class="section-title mb-6">
          Ils nous font confiance,<br>
          <span class="gradient-text">et ils en parlent !</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Découvrez ce que nos clients disent de leur expérience avec EBHI
        </p>
      </div>

      <v-row class="testimonials-grid">
        <v-col
          v-for="(testimonial, index) in testimonials"
          :key="index"
          cols="12"
          md="4"
          class="testimonial-col"
        >
          <v-card
            :elevation="8"
            class="testimonial-card h-100"
          >
            <div class="testimonial-quote-icon">
              <v-icon color="primary" size="48" opacity="0.1">mdi-format-quote-open</v-icon>
            </div>
            <v-card-item class="pa-6">
              <div class="testimonial-rating mb-4">
                <v-icon
                  v-for="i in 5"
                  :key="i"
                  color="warning"
                  size="20"
                >
                  mdi-star
                </v-icon>
              </div>
              <v-card-text class="pa-0 mb-6">
                <p class="text-body-1 testimonial-text" style="line-height: 1.8; font-style: italic;">
                  "{{ testimonial.text }}"
                </p>
              </v-card-text>
              <v-divider class="mb-4"></v-divider>
              <div class="d-flex align-center">
                <v-avatar
                  :color="testimonial.color"
                  size="56"
                  class="mr-4"
                >
                  <span class="text-h6 text-white font-weight-bold">{{ testimonial.initials }}</span>
                </v-avatar>
                <div>
                  <div class="text-h6 font-weight-bold mb-1">{{ testimonial.name }}</div>
                  <div class="text-body-2 text-grey-darken-1">{{ testimonial.role }}</div>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Sabrina B.',
    role: 'CEO, RSE Conseil',
    text: 'Grâce à EBHI, nous bénéficions aujourd\'hui d\'un support web fiable et réactif. Leur équipe a parfaitement compris nos besoins et mis en place des solutions efficaces qui facilitent notre travail au quotidien.',
    initials: 'SB',
    color: 'primary'
  },
  {
    name: 'Ronan L.',
    role: 'CEO, La Bonne Allure',
    text: 'Le processus de recrutement et de mise en place des ressources a été très fluide grâce à EBHI. Nous sommes extrêmement satisfaits de leurs services, tant sur la qualité que la rapidité d\'exécution.',
    initials: 'RL',
    color: 'secondary'
  },
  {
    name: 'Isabelle D.',
    role: 'BASF',
    text: 'EBHI nous a grandement facilité la gestion de notre support client. Leur équipe est disponible, réactive et professionnelle, ce qui nous permet de nous concentrer pleinement sur notre cœur de métier.',
    initials: 'ID',
    color: 'success'
  }
]
</script>

<style scoped>
.testimonials-section {
  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
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

.testimonials-grid {
  margin-top: 40px;
}

.testimonial-col {
  margin-bottom: 32px;
}

.testimonial-card {
  border-radius: 24px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a237e, #3f51b5);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.testimonial-quote-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0.1;
  transition: all 0.4s ease;
}

.testimonial-card:hover .testimonial-quote-icon {
  opacity: 0.2;
  transform: scale(1.1);
}

.testimonial-rating {
  display: flex;
  gap: 4px;
}

.testimonial-text {
  color: #424242;
  position: relative;
  z-index: 1;
}

@media (max-width: 960px) {
  .testimonial-card {
    margin-bottom: 24px;
  }
}
</style>
