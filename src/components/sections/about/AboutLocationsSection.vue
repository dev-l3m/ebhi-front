<template>
  <section class="about-locations-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Un ancrage local,<br>
          <span class="gradient-text">une vision globale</span>
        </h2>
        <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 800px; line-height: 1.8;">
          Nos implantations à Casablanca, Marrakech, Dakar, Antananarivo, Paris et Cergy sont pensées 
          comme des <strong>hubs opérationnels</strong>, permettant de répondre aux enjeux de proximité, 
          de disponibilité et d'agilité.
        </p>
        <p class="text-h6 font-weight-bold text-primary mt-6" style="max-width: 800px; margin: 0 auto;">
          Nous ne vous apportons pas seulement une main d'œuvre externalisée, mais 
          <strong>un véritable prolongement structuré de votre organisation.</strong>
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(location, index) in locations"
          :key="index"
          cols="6"
          md="4"
          lg="2"
          class="location-col"
        >
          <v-card
            :elevation="8"
            class="location-card text-center"
            rounded="xl"
          >
            <v-card-item class="pa-6">
              <v-icon
                :color="location.color"
                size="48"
                class="mb-3"
              >
                {{ location.icon }}
              </v-icon>
              <v-card-title class="text-body-1 font-weight-bold pa-0 location-title">
                {{ location.name }}
              </v-card-title>
              <v-card-text class="text-caption text-grey-darken-1 pa-0 mt-2">
                {{ location.country }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const locations = [
  { name: 'Casablanca', country: 'Maroc', color: 'primary', icon: 'mdi-map-marker' },
  { name: 'Marrakech', country: 'Maroc', color: 'primary', icon: 'mdi-map-marker' },
  { name: 'Dakar', country: 'Sénégal', color: 'secondary', icon: 'mdi-map-marker' },
  { name: 'Antananarivo', country: 'Madagascar', color: 'success', icon: 'mdi-map-marker' },
  { name: 'Paris', country: 'France', color: 'info', icon: 'mdi-map-marker' },
  { name: 'Cergy', country: 'France', color: 'info', icon: 'mdi-map-marker' }
]
</script>

<style scoped>
.about-locations-section {
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

.location-col {
  margin-bottom: 24px;
}

.location-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.location-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1) !important;
}

.location-title {
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
}

@media (max-width: 960px) {
  .location-card {
    margin-bottom: 16px;
  }
}
</style>
