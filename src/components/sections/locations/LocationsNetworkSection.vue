<template>
  <section class="locations-network-section section-padding">
    <div class="section-background"></div>
    <v-container>
      <!-- Header Section -->
      <v-row class="mb-12">
        <v-col cols="12" class="network-content-col">
          <div class="fade-in-up">
            <v-chip
              color="primary"
              variant="flat"
              size="large"
              class="mb-6 network-chip"
            >
              <v-icon start>mdi-map-marker-multiple</v-icon>
              Notre Réseau
            </v-chip>
            <h2 class="section-title mb-8">
              Un réseau international<br>
              <span class="gradient-text">en expansion</span>
            </h2>
            <div class="network-text-content">
              <p class="text-h6 mb-6 network-intro" style="line-height: 1.8;">
                Notre réseau couvre le <strong class="highlight-text">Maroc, le Sénégal, Madagascar et la France</strong>,<br>
                et s'étend bientôt à l'<strong class="highlight-text">Algérie, la Côte d'Ivoire et les Philippines</strong>.
              </p>
              <p class="text-body-1 mb-4" style="line-height: 1.8;">
                Chacun de nos hubs est pensé comme un<br>
                <strong class="highlight-text">écosystème de talents, d'infrastructures et de services</strong>,<br>
                capable d'opérer vos projets en toute fluidité.
              </p>
              <p class="text-body-1" style="line-height: 1.8;">
                Vous avez besoin de structurer un SAV multilingue,<br>
                un bureau d'études, une équipe marketing<br>
                ou un support administratif ?<br>
                Nous savons où, comment, et avec quels profils le faire.<br>
                <strong class="highlight-text">Sans délai, sans surcoût, sans compromis.</strong>
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Stats Cards -->
      <v-row class="mb-12 stats-row">
        <v-col
          v-for="(stat, index) in stats"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          class="stat-col"
        >
          <v-card
            :elevation="8"
            class="stat-card fade-in-up"
            :class="{ 'stat-card-clickable': stat.clickable }"
            :style="{ animationDelay: `${index * 0.1}s` }"
            rounded="xl"
            @click="stat.clickable ? openContinentsDialog() : null"
          >
            <v-card-item class="pa-6 text-center">
              <div class="stat-icon-wrapper mb-4">
                <v-icon :color="stat.color" size="48">{{ stat.icon }}</v-icon>
              </div>
              <div class="stat-value mb-2">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <!-- Map Section -->
      <v-row>
        <v-col cols="12" class="network-map-col">
          <v-card :elevation="16" class="network-map-card" rounded="xl">
            <div class="map-header">
              <div class="map-header-content">
                <v-icon color="white" size="32" class="mb-2">mdi-earth</v-icon>
                <div class="text-h5 font-weight-bold mb-1 text-white">
                  Présence Mondiale
                </div>
                <p class="text-body-2 text-white" style="opacity: 0.95;">
                  Des hubs stratégiques répartis sur plusieurs continents<br>
                  pour une couverture optimale
                </p>
              </div>
            </div>
            <div id="map" class="network-map"></div>
            <div class="map-legend">
              <div class="legend-item">
                <div class="legend-marker active"></div>
                <span class="legend-text">Hubs actifs</span>
              </div>
              <div class="legend-item">
                <div class="legend-marker coming-soon"></div>
                <span class="legend-text">Bientôt disponibles</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Countries Grid -->
      <!-- <v-row class="mt-12 countries-row">
        <v-col
          v-for="(country, index) in countries"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="country-col"
        >
          <v-card
            :elevation="8"
            class="country-card fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
            rounded="xl"
          >
            <v-card-item class="pa-6">
              <div class="d-flex align-center mb-3">
                <div class="country-flag-wrapper mr-4">
                  <v-icon :color="country.color" size="40">{{ country.icon }}</v-icon>
                </div>
                <v-spacer></v-spacer>
                <v-chip
                  :color="country.status === 'active' ? 'success' : 'warning'"
                  variant="flat"
                  size="small"
                >
                  {{ country.status === 'active' ? 'Actif' : 'Bientôt' }}
                </v-chip>
              </div>
              <v-card-title class="text-h6 mb-2 pa-0 country-name">
                {{ country.name }}
              </v-card-title>
              <v-card-subtitle class="text-body-2 text-grey-darken-1 pa-0">
                {{ country.cities }}
              </v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row> -->

      <!-- Continents Dialog -->
      <v-dialog
        v-model="continentsDialog"
        max-width="900"
        scrollable
        persistent
      >
        <v-card rounded="xl">
          <v-card-title class="d-flex align-center justify-space-between pa-6 dialog-header">
            <div class="d-flex align-center">
              <v-icon color="success" size="32" class="mr-3">mdi-globe-model</v-icon>
              <span class="text-h5 font-weight-bold">Nos Implantations par Continent</span>
            </div>
            <v-btn
              icon
              variant="text"
              size="small"
              @click="continentsDialog = false"
              class="close-btn"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <v-tabs
              v-model="activeTab"
              color="primary"
              align-tabs="start"
              class="continents-tabs"
            >
              <v-tab
                v-for="(continent, index) in continentsData"
                :key="index"
                :value="index"
                class="text-capitalize"
              >
                <v-icon start>{{ continent.icon }}</v-icon>
                {{ continent.name }}
              </v-tab>
            </v-tabs>

            <v-window v-model="activeTab">
              <v-window-item
                v-for="(continent, index) in continentsData"
                :key="index"
                :value="index"
              >
                <div class="pa-6">
                  <div class="continent-header mb-6">
                    <h3 class="text-h4 mb-3">{{ continent.name }}</h3>
                    <p class="text-body-1 text-grey-darken-1">{{ continent.description }}</p>
                  </div>

                  <v-row>
                    <v-col
                      v-for="(location, locIndex) in continent.locations"
                      :key="locIndex"
                      cols="12"
                      md="6"
                      class="location-col"
                    >
                      <v-card
                        :elevation="4"
                        class="location-card"
                        rounded="lg"
                      >
                        <v-card-item class="pa-5">
                          <div class="d-flex align-start mb-3">
                            <div class="location-icon-wrapper mr-4">
                              <v-icon :color="location.color" size="32">{{ location.icon }}</v-icon>
                            </div>
                            <div class="flex-grow-1">
                              <v-card-title class="text-h6 mb-2 pa-0 location-title">
                                {{ location.name }}
                              </v-card-title>
                              <v-card-subtitle class="text-body-2 text-grey-darken-1 pa-0 mb-3">
                                {{ location.country }}
                              </v-card-subtitle>
                              <v-chip
                                :color="location.status === 'active' ? 'success' : 'warning'"
                                variant="flat"
                                size="small"
                                class="mb-3"
                              >
                                {{ location.status === 'active' ? 'Hub actif' : 'Bientôt disponible' }}
                              </v-chip>
                            </div>
                          </div>
                          <p class="text-body-2 location-description">
                            {{ location.description }}
                          </p>
                        </v-card-item>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-window-item>
            </v-window>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              variant="elevated"
              rounded="lg"
              @click="continentsDialog = false"
            >
              Fermer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

let map = null
const continentsDialog = ref(false)
const activeTab = ref(0)

const stats = [
  { value: '9', label: 'Hubs stratégiques', icon: 'mdi-map-marker', color: 'primary', clickable: false },
  { value: '6', label: 'Pays couverts', icon: 'mdi-earth', color: 'secondary', clickable: false },
  { value: '4', label: 'Continents', icon: 'mdi-globe-model', color: 'success', clickable: true },
  { value: '24/7', label: 'Support disponible', icon: 'mdi-clock-outline', color: 'info', clickable: false }
]

const continentsData = [
  {
    name: 'Afrique',
    icon: 'mdi-earth',
    description: 'Notre présence en Afrique vous ouvre les portes d\'un marché en pleine croissance avec des hubs stratégiques au Maroc, au Sénégal et à Madagascar.',
    locations: [
      {
        name: 'Casablanca & Marrakech',
        country: 'Maroc',
        status: 'active',
        color: 'primary',
        icon: 'mdi-map-marker',
        description: 'Porte d\'entrée vers l\'Afrique, le Maroc est un pays clé pour les entreprises souhaitant croître dans un environnement stable, moderne et connecté. Casablanca, capitale économique du pays, offre un écosystème dynamique, une fiscalité avantageuse et une connexion internationale optimale. Marrakech, ville à la fois touristique et en plein essor économique, représente une plateforme idéale pour les projets orientés services, événementiel ou innovation. Grâce à nos implantations locales, EBHI accompagne les porteurs de projets dans toutes leurs démarches : domiciliation, création d\'entreprise, conseil fiscal et développement commercial.'
      },
      {
        name: 'Dakar',
        country: 'Sénégal',
        status: 'active',
        color: 'secondary',
        icon: 'mdi-map-marker',
        description: 'Capitale de l\'Afrique de l\'Ouest francophone, Dakar est un carrefour régional pour les affaires. Notre hub sénégalais permet aux entrepreneurs d\'accéder à la zone UEMOA/CEDEAO, avec un accompagnement adapté aux réalités du terrain : juridique, administratif, fiscal et stratégique.'
      },
      {
        name: 'Antananarivo',
        country: 'Madagascar',
        status: 'active',
        color: 'success',
        icon: 'mdi-map-marker',
        description: 'Antananarivo, capitale de Madagascar, est un pôle d\'innovation et de croissance où s\'installent de plus en plus d\'entreprises à la recherche de talents qualifiés, de coûts maîtrisés et d\'un environnement d\'affaires en développement. EBHI vous aide à vous y implanter efficacement, en toute conformité.'
      },
      {
        name: 'Alger',
        country: 'Algérie',
        status: 'coming-soon',
        color: 'warning',
        icon: 'mdi-map-marker',
        description: 'Notre prochaine implantation en Algérie vous permettra d\'accéder au marché maghrébin avec un hub dédié au développement et à l\'innovation.'
      },
      {
        name: 'Abidjan',
        country: 'Côte d\'Ivoire',
        status: 'coming-soon',
        color: 'warning',
        icon: 'mdi-map-marker',
        description: 'Bientôt disponible, notre hub à Abidjan vous ouvrira les portes de l\'Afrique centrale avec des services commerciaux et de développement adaptés.'
      }
    ]
  },
  {
    name: 'Europe',
    icon: 'mdi-earth',
    description: 'Notre présence en France vous ouvre les portes du marché européen avec des bureaux stratégiques à Paris et Cergy.',
    locations: [
      {
        name: 'Paris, Cergy et rayonnement national',
        country: 'France',
        status: 'active',
        color: 'info',
        icon: 'mdi-map-marker',
        description: 'Notre présence en France vous ouvre les portes du marché européen. Grâce à nos bureaux implantés à Paris et Cergy, nous accompagnons nos clients dans leur stratégie d\'implantation sur l\'ensemble du territoire français, que ce soit pour de la domiciliation, de la représentation commerciale ou des démarches administratives. Nos services en France sont pensés pour les entrepreneurs internationaux, freelances, start-ups et PME désireux de s\'installer ou de se développer dans l\'un des marchés les plus structurés au monde.'
      }
    ]
  },
  {
    name: 'Asie',
    icon: 'mdi-earth',
    description: 'Notre expansion en Asie vous permettra d\'accéder à un marché dynamique avec notre futur hub aux Philippines.',
    locations: [
      {
        name: 'Manille',
        country: 'Philippines',
        status: 'coming-soon',
        color: 'warning',
        icon: 'mdi-map-marker',
        description: 'Notre prochaine implantation à Manille, capitale des Philippines, vous offrira un hub Asie-Pacifique avec un support 24/7 et un accès privilégié aux talents locaux pour vos projets de développement et d\'externalisation.'
      }
    ]
  }
]

const openContinentsDialog = () => {
  continentsDialog.value = true
  activeTab.value = 0
}

const countries = [
  { name: 'Maroc', cities: 'Casablanca, Marrakech', status: 'active', color: 'primary', icon: 'mdi-flag' },
  { name: 'Sénégal', cities: 'Dakar', status: 'active', color: 'secondary', icon: 'mdi-flag' },
  { name: 'Madagascar', cities: 'Antananarivo', status: 'active', color: 'success', icon: 'mdi-flag' },
  { name: 'France', cities: 'Paris, Cergy', status: 'active', color: 'info', icon: 'mdi-flag' },
  { name: 'Algérie', cities: 'Alger', status: 'coming-soon', color: 'warning', icon: 'mdi-flag' },
  { name: 'Côte d\'Ivoire', cities: 'Abidjan', status: 'coming-soon', color: 'warning', icon: 'mdi-flag' },
  { name: 'Philippines', cities: 'Manille', status: 'coming-soon', color: 'warning', icon: 'mdi-flag' }
]

onMounted(() => {
  if (typeof L !== 'undefined') {
    // Initialize map with better styling
    map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
      dragging: true
    }).setView([20, 0], 2)

    // Add styled tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map)

    // Hub locations with enhanced markers
    const hubs = [
      { name: 'Casablanca, Maroc', lat: 33.5731, lng: -7.5898, status: 'active', color: '#1a237e' },
      { name: 'Marrakech, Maroc', lat: 31.6295, lng: -7.9811, status: 'active', color: '#1a237e' },
      { name: 'Dakar, Sénégal', lat: 14.7167, lng: -17.4677, status: 'active', color: '#283593' },
      { name: 'Antananarivo, Madagascar', lat: -18.8792, lng: 47.5079, status: 'active', color: '#4caf50' },
      { name: 'Paris, France', lat: 48.8566, lng: 2.3522, status: 'active', color: '#2196f3' },
      { name: 'Cergy, France', lat: 49.0364, lng: 2.0769, status: 'active', color: '#2196f3' },
      { name: 'Alger, Algérie', lat: 36.7538, lng: 3.0588, status: 'coming-soon', color: '#ffc107' },
      { name: 'Abidjan, Côte d\'Ivoire', lat: 5.3600, lng: -4.0083, status: 'coming-soon', color: '#ffc107' },
      { name: 'Manille, Philippines', lat: 14.5995, lng: 120.9842, status: 'coming-soon', color: '#ffc107' }
    ]

    // Add enhanced markers for each hub
    hubs.forEach((hub, index) => {
      const pulseAnimation = hub.status === 'active' ? 'pulse' : 'pulse-slow'
      const iconHtml = `
        <div class="custom-marker-wrapper ${pulseAnimation}" style="
          width: 32px;
          height: 32px;
          background-color: ${hub.color};
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ${pulseAnimation} 2s infinite;
        ">
          <div style="
            width: 12px;
            height: 12px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `
      
      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })

      const marker = L.marker([hub.lat, hub.lng], { icon: customIcon }).addTo(map)
      
      const statusText = hub.status === 'active' ? '✓ Hub actif' : '⏳ Bientôt disponible'
      const statusColor = hub.status === 'active' ? '#4caf50' : '#ffc107'
      marker.bindPopup(`
        <div style="text-align: center; padding: 12px; min-width: 180px;">
          <div style="
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, ${hub.color} 0%, ${hub.color}dd 100%);
            border-radius: 50%;
            margin: 0 auto 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          ">
            <span style="color: white; font-size: 24px;">📍</span>
          </div>
          <strong style="color: ${hub.color}; font-size: 16px; display: block; margin-bottom: 8px;">${hub.name}</strong>
          <span style="
            font-size: 13px;
            color: ${statusColor};
            font-weight: 600;
            background: ${statusColor}15;
            padding: 4px 12px;
            border-radius: 12px;
            display: inline-block;
          ">${statusText}</span>
        </div>
      `, {
        className: 'custom-popup'
      })
    })
  }
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped>
.locations-network-section {
  position: relative;
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
  overflow: hidden;
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(26, 35, 126, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(63, 81, 181, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.locations-network-section > .v-container {
  position: relative;
  z-index: 1;
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

.network-chip {
  animation: fadeInDown 0.6s ease-out;
}

.network-content-col {
  max-width: 1000px;
  margin: 0 auto;
}

.network-text-content {
  text-align: left;
}

.highlight-text {
  color: #1a237e;
  font-weight: 700;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  padding: 2px 6px;
  border-radius: 4px;
}

.network-intro {
  font-weight: 500;
}

/* Stats Cards */
.stats-row {
  margin-bottom: 64px;
}

.stat-col {
  margin-bottom: 24px;
}

.stat-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12) !important;
}

.stat-card-clickable {
  cursor: pointer;
  transition: all 0.3s ease;
}

.stat-card-clickable:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.stat-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%);
}

.stat-value {
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 800;
  color: #1a237e;
  line-height: 1;
}

.stat-label {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #616161;
  font-weight: 500;
}

/* Map Section */
.network-map-col {
  padding: 0;
}

.network-map-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1) !important;
}

.map-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.95) 0%, rgba(63, 81, 181, 0.95) 100%);
  padding: 24px 32px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.map-header-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.network-map {
  width: 100%;
  height: 600px;
  z-index: 1;
  margin-top: 120px;
}

.map-legend {
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  background: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.legend-marker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.legend-marker.active {
  background-color: #1a237e;
}

.legend-marker.coming-soon {
  background-color: #ffc107;
}

.legend-text {
  font-size: 14px;
  font-weight: 500;
  color: #424242;
}

.custom-marker {
  background: transparent !important;
  border: none !important;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

/* Countries Grid */
.countries-row {
  margin-top: 64px;
}

.country-col {
  margin-bottom: 24px;
}

.country-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
}

.country-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12) !important;
}

.country-flag-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.country-card:hover .country-flag-wrapper {
  transform: scale(1.1);
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%);
}

.country-name {
  font-weight: 700;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Animations */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .network-content-col {
    padding: 0;
    margin-bottom: 32px;
  }
  
  .network-map {
    height: 450px;
    margin-top: 100px;
  }
  
  .map-header {
    padding: 16px 20px;
  }
  
  .map-header-content {
    text-align: center;
  }
  
  .map-legend {
    position: relative;
    bottom: auto;
    right: auto;
    margin: 16px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .network-text-content p {
    text-align: left;
  }
  
  .stats-row {
    margin-bottom: 48px;
  }
  
  .countries-row {
    margin-top: 48px;
  }
}

@media (max-width: 600px) {
  .network-map {
    height: 400px;
    margin-top: 80px;
  }
  
  .map-header {
    padding: 12px 16px;
  }
  
  .map-header-content .text-h5 {
    font-size: 1.25rem;
  }
}

/* Dialog Styles */
.dialog-header {
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%);
}

.close-btn {
  transition: all 0.3s ease;
}

.close-btn:hover {
  transform: rotate(90deg);
  background-color: rgba(0, 0, 0, 0.05);
}

.continents-tabs {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.continent-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.location-col {
  margin-bottom: 16px;
}

.location-card {
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.location-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
}

.location-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.location-title {
  font-weight: 700;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.location-description {
  line-height: 1.7;
  color: #616161;
}
</style>
