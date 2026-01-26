<template>
  <section class="what-we-do-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-handshake</v-icon>
          Ce que nous faisons
        </v-chip>
        <h2 class="section-title mb-6">
          Ce que nous faisons<br>
          <span class="gradient-text">pour vous</span>
        </h2>
      </div>

      <v-card
        :elevation="12"
        class="project-card"
        rounded="xl"
      >
        <v-row no-gutters>
          <v-col cols="12" md="5" class="project-card-image">
            <div class="project-card-bg">
              <v-icon color="white" size="120" opacity="0.2">mdi-folder-multiple</v-icon>
            </div>
          </v-col>
          <v-col cols="12" md="7" class="project-content-col">
            <v-card-item class="pa-6 pa-md-8">
              <div class="d-flex align-start mb-4 flex-wrap">
                <v-icon color="primary" size="48" class="mr-4 mb-2" style="flex-shrink: 0;">mdi-folder-star</v-icon>
                <v-card-title class="project-title pa-0 flex-grow-1">Gestion de projet clé en main</v-card-title>
              </div>
              <v-card-text class="pa-0 text-body-1 project-description">
                De la définition du besoin à l'exécution, EBHI prend en charge l'ensemble du <br>projet. 
                Nous coordonnons les aspects humains, techniques, administratifs  <br>et juridiques pour vous 
                livrer une solution <strong>100 % opérationnelle</strong>,<br> sans friction.
                <strong>Vous gagnez du temps, nous prenons le relais.</strong>
              </v-card-text>
              <v-card-actions class="pa-0 mt-6">
                <v-btn
                  color="primary"
                  size="large"
                  variant="elevated"
                  rounded="xl"
                  class="project-btn"
                  @click="scrollToContact"
                >
                  <v-icon start>mdi-email</v-icon>
                  Discutons de votre projet
                </v-btn>
              </v-card-actions>
            </v-card-item>
          </v-col>
        </v-row>
      </v-card>
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
.what-we-do-section {
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

.project-card {
  overflow: visible;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.project-card-image {
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.project-card-bg {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-content-col {
  display: flex;
  align-items: center;
  overflow: visible;
  min-height: 300px;
}

.project-title {
  font-size: clamp(1.5rem, 3vw, 2.25rem) !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.project-description {
  line-height: 1.8 !important;
  font-size: clamp(1rem, 1.5vw, 1.125rem) !important;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: visible !important;
  white-space: normal !important;
  max-width: 100% !important;
}

:deep(.v-card-text) {
  overflow: visible !important;
  max-height: none !important;
}

.project-btn {
  white-space: nowrap;
}

@media (max-width: 960px) {
  .project-card-image {
    min-height: 200px;
  }
  
  .project-title {
    font-size: 1.5rem !important;
  }
}
</style>
