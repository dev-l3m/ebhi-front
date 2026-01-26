<template>
  <section class="advantages-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-star-circle</v-icon>
          Avantages
        </v-chip>
        <h2 class="section-title mb-6">
          Les avantages stratégiques<br>
          <span class="gradient-text">de l'externalisation EBHI</span>
        </h2>
      </div>

      <v-row>
        <v-col
          v-for="(advantage, index) in advantages"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="advantage-col"
        >
          <v-card
            :elevation="8"
            class="advantage-card h-100"
            rounded="xl"
          >
            <v-card-item class="pa-6">
              <div class="d-flex align-start mb-4">
                <div class="advantage-number-wrapper mr-4">
                  <div class="advantage-number">{{ index + 1 }}</div>
                </div>
                <div class="flex-grow-1">
                  <v-icon
                    :color="advantage.color"
                    size="40"
                    class="mb-3"
                  >
                    {{ advantage.icon }}
                  </v-icon>
                  <v-card-title class="text-h6 mb-3 pa-0 advantage-title" style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word;">
                    {{ advantage.title }}
                  </v-card-title>
                  <v-card-text class="text-body-2 text-grey-darken-1 pa-0 advantage-description">
                    {{ advantage.description }}
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
const advantages = [
  {
    title: 'Réduction des coûts, sans compromis sur la qualité',
    description: 'Salaires, charges sociales, locaux, matériel, supervision : les coûts fixes explosent. L\'externalisation vous permet de transformer ces dépenses en charges variables, parfaitement maîtrisées, tout en maintenant des standards élevés de performance.',
    color: 'primary',
    icon: 'mdi-cash-multiple'
  },
  {
    title: 'Accès rapide à une expertise qualifiée',
    description: 'Nous mobilisons des talents compétents, immédiatement opérationnels, sélectionnés selon vos critères métiers et culturels. Plus besoin d\'investir dans un long processus de recrutement : vous disposez, dès le départ, de profils adaptés et performants.',
    color: 'secondary',
    icon: 'mdi-account-star'
  },
  {
    title: 'Gain de temps opérationnel',
    description: 'Nous prenons en charge les démarches administratives, juridiques et RH. Vous bénéficiez d\'un accompagnement complet, qui libère vos équipes internes et vous permet de vous recentrer sur des missions à forte valeur ajoutée.',
    color: 'success',
    icon: 'mdi-clock-fast'
  },
  {
    title: 'Agilité et adaptabilité instantanée',
    description: 'Créez, redimensionnez ou ajustez une équipe en fonction de votre activité. Nos solutions sont conçues pour évoluer avec vos besoins, vous permettant de répondre rapidement aux pics d\'activité, aux urgences projets ou aux changements stratégiques.',
    color: 'info',
    icon: 'mdi-sync'
  },
  {
    title: 'Garantie de qualité et de continuité',
    description: 'Nous assurons un suivi rigoureux de chaque projet. Grâce à nos process internes et à une culture du résultat, vous bénéficiez de prestations stables, performantes et suivies, avec un interlocuteur unique.',
    color: 'warning',
    icon: 'mdi-shield-check'
  },
  {
    title: 'Réduction des risques opérationnels',
    description: 'Externaliser avec EBHI, c\'est bénéficier d\'un cadre juridique, contractuel et réglementaire sécurisé. Nous opérons en totale conformité avec les lois locales et internationales. Vous gagnez en sérénité, tout en gardant le contrôle.',
    color: 'error',
    icon: 'mdi-shield-lock'
  }
]
</script>

<style scoped>
.advantages-section {
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

.advantage-col {
  margin-bottom: 32px;
}

.advantage-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.advantage-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.advantage-number-wrapper {
  flex-shrink: 0;
}

.advantage-number {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  box-shadow: 0 4px 12px rgba(26, 35, 126, 0.3);
}

.advantage-title {
  font-weight: 700;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  min-height: auto;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.advantage-description {
  line-height: 1.7;
  min-height: 80px;
}

@media (max-width: 960px) {
  .advantage-card {
    margin-bottom: 24px;
  }
}
</style>
