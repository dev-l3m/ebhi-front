<template>
  <section class="about-locations-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Un ancrage local,<br />
          <span class="gradient-text">une vision globale</span>
        </h2>
        <p class="section-description text-grey-darken-1 mx-auto">
          Nos implantations à Casablanca, Marrakech, Dakar, Antananarivo, Paris et Cergy sont
          pensées comme des <strong>hubs opérationnels</strong>, permettant de répondre aux enjeux
          de proximité, de disponibilité et d'agilité.
        </p>
        <p class="section-highlight font-weight-bold text-primary mt-6">
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
          <v-card :elevation="8" class="location-card text-center" rounded="xl">
            <v-card-item class="pa-6">
              <v-icon :color="location.color" size="48" class="mb-3">
                {{ location.icon }}
              </v-icon>
              <v-card-title class="text-body-1 font-weight-bold pa-0 location-title">
                {{ location.name }}
              </v-card-title>
              <v-card-text class="location-country text-grey-darken-1 pa-0 mt-2">
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

.section-description {
  font-size: 1.25rem;
  line-height: 1.8;
  max-width: 800px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.section-highlight {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.6;
}

.location-country {
  font-size: 0.75rem;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }

  .section-description {
    font-size: 1.125rem !important;
    line-height: 1.7;
  }

  .section-highlight {
    font-size: 1.125rem !important;
    line-height: 1.6;
    margin-top: 24px !important;
  }

  .location-card {
    margin-bottom: 16px;
  }

  .location-card .v-card-item {
    padding: 20px !important;
  }

  .location-card .v-icon {
    font-size: 40px !important;
  }

  .location-title {
    font-size: 0.9375rem !important;
    line-height: 1.3;
  }

  .location-country {
    font-size: 0.6875rem !important;
  }
}

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: clamp(1.5rem, 6vw, 2rem) !important;
    margin-bottom: 20px;
  }

  .section-description {
    font-size: 0.9375rem !important;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .section-highlight {
    font-size: 0.9375rem !important;
    line-height: 1.5;
    margin-top: 20px !important;
  }

  .location-col {
    margin-bottom: 12px;
  }

  .location-card {
    margin-bottom: 12px;
  }

  .location-card .v-card-item {
    padding: 16px 12px !important;
  }

  .location-card .v-icon {
    font-size: 36px !important;
    margin-bottom: 8px !important;
  }

  .location-title {
    font-size: 0.875rem !important;
    line-height: 1.3;
    min-height: auto !important;
  }

  .location-country {
    font-size: 0.625rem !important;
    line-height: 1.3;
    margin-top: 4px !important;
  }
}
</style>
