<template>
  <section class="what-you-gain-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-trophy</v-icon>
          Vos Gains
        </v-chip>
        <h2 class="section-title mb-6">
          Ce que vous gagnez<br />
          <span class="gradient-text">avec EBHI</span>
        </h2>
      </div>

      <v-row>
        <v-col v-for="(gain, index) in gains" :key="index" cols="12" md="6" lg="3" class="gain-col">
          <v-card :elevation="8" class="gain-card h-100 text-center" rounded="xl">
            <v-card-item class="pa-6">
              <div class="gain-icon-wrapper mb-4">
                <div class="gain-icon-bg" :style="{ background: getGainGradient(gain.color) }">
                  <v-icon :color="gain.color" size="48">{{ gain.icon }}</v-icon>
                </div>
              </div>
              <v-card-title
                class="text-h6 mb-3 pa-0 gain-title"
                style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
              >
                {{ gain.title }}
              </v-card-title>
              <v-card-text class="text-body-2 text-grey-darken-1 pa-0 gain-description">
                {{ gain.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const gains = [
  {
    title: 'Un partenaire engagé',
    description: 'qui comprend vos enjeux stratégiques',
    color: 'primary',
    icon: 'mdi-handshake'
  },
  {
    title: 'Une structure de pilotage complète',
    description: 'pas un simple prestataire',
    color: 'secondary',
    icon: 'mdi-chart-timeline-variant'
  },
  {
    title: 'Des solutions conçues pour durer',
    description: "s'adapter et évoluer",
    color: 'success',
    icon: 'mdi-sync'
  },
  {
    title: 'Un réseau de talents qualifiés',
    description: 'mobilisable rapidement',
    color: 'info',
    icon: 'mdi-account-network'
  }
]

const getGainGradient = color => {
  const gradients = {
    primary: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    secondary: 'linear-gradient(135deg, rgba(40, 53, 147, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    success: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.1) 100%)',
    info: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(100, 181, 246, 0.1) 100%)'
  }
  return gradients[color] || gradients.primary
}
</script>

<style scoped>
.what-you-gain-section {
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

.gain-col {
  margin-bottom: 32px;
}

.gain-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.gain-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.gain-icon-wrapper {
  display: flex;
  justify-content: center;
}

.gain-icon-bg {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.gain-card:hover .gain-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.gain-title {
  font-weight: 700;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  text-align: center;
}

.gain-description {
  min-height: 40px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .gain-card {
    margin-bottom: 24px;
  }
}
</style>
