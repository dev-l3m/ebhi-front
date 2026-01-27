<template>
  <section class="about-values-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-heart</v-icon>
          Nos Valeurs
        </v-chip>
        <h2 class="section-title mb-6">
          Nos engagements & valeurs<br>
          <span class="gradient-text">fondamentales</span>
        </h2>
      </div>

      <v-row>
        <v-col
          v-for="(value, index) in values"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="value-col"
        >
          <v-card
            :elevation="8"
            class="value-card h-100"
            rounded="xl"
          >
            <v-card-item class="pa-6">
              <div class="d-flex align-start">
                <div class="value-icon-wrapper mr-4">
                  <v-icon :color="value.color" size="40">{{ value.icon }}</v-icon>
                </div>
                <div class="flex-grow-1">
                  <v-card-title class="text-h6 mb-2 pa-0 value-title">
                    {{ value.title }}
                  </v-card-title>
                  <v-card-text class="text-body-2 text-grey-darken-1 pa-0 value-description">
                    {{ value.description }}
                  </v-card-text>
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
const values = [
  {
    title: 'Exigence',
    description: 'nous ne recrutons que des profils capables de porter votre image',
    color: 'primary',
    icon: 'mdi-star'
  },
  {
    title: 'Clarté',
    description: 'vous savez qui travaille sur quoi, quand et comment',
    color: 'secondary',
    icon: 'mdi-eye'
  },
  {
    title: 'Professionnalisme',
    description: 'un accompagnement rigoureux et structuré',
    color: 'success',
    icon: 'mdi-briefcase'
  },
  {
    title: 'Discrétion',
    description: 'la confidentialité de vos projets est une priorité',
    color: 'info',
    icon: 'mdi-lock'
  },
  {
    title: 'Agilité',
    description: 'vos besoins évoluent ? Nos solutions aussi',
    color: 'warning',
    icon: 'mdi-lightning-bolt'
  },
  {
    title: 'Ambition',
    description: 'nous visons haut, avec vous',
    color: 'error',
    icon: 'mdi-trending-up'
  },
  {
    title: 'Excellence',
    description: 'un niveau de service premium, sans compromis',
    color: 'primary',
    icon: 'mdi-trophy'
  },
  {
    title: 'Sécurité',
    description: 'nous maîtrisons les environnements réglementaires et contractuels',
    color: 'secondary',
    icon: 'mdi-shield-check'
  },
  {
    title: 'Durabilité',
    description: 'nous bâtissons des solutions solides, évolutives et durables',
    color: 'success',
    icon: 'mdi-leaf'
  }
]
</script>

<style scoped>
.about-values-section {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
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

.value-col {
  margin-bottom: 32px;
}

.value-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.value-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(26, 35, 126, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon-wrapper {
  transform: scale(1.1);
  background: rgba(26, 35, 126, 0.15);
}

.value-title {
  font-weight: 700;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
}

.value-description {
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }
  
  .value-card {
    margin-bottom: 24px;
  }
  
  .value-card .v-card-item {
    padding: 20px !important;
  }
  
  .value-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .value-icon-wrapper .v-icon {
    font-size: 36px !important;
  }
  
  .value-title {
    font-size: 1.125rem !important;
    line-height: 1.3;
    margin-bottom: 8px !important;
  }
  
  .value-description {
    font-size: 0.9375rem !important;
    line-height: 1.5;
  }
}

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 32px;
  }
  
  .section-title {
    font-size: clamp(1.5rem, 6vw, 2rem) !important;
    margin-bottom: 24px;
  }
  
  .value-col {
    margin-bottom: 16px;
  }
  
  .value-card {
    margin-bottom: 16px;
  }
  
  .value-card .v-card-item {
    padding: 16px !important;
  }
  
  .value-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    margin-right: 12px !important;
  }
  
  .value-icon-wrapper .v-icon {
    font-size: 32px !important;
  }
  
  .value-title {
    font-size: 1rem !important;
    line-height: 1.3;
    margin-bottom: 6px !important;
    min-height: auto !important;
  }
  
  .value-description {
    font-size: 0.875rem !important;
    line-height: 1.5;
  }
}
</style>
