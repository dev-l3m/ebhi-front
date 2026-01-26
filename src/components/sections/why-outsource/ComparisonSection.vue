<template>
  <section class="comparison-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Externalisation ou gestion interne ?<br>
          <span class="gradient-text">Faites le bon choix</span>
        </h2>
      </div>

      <v-card :elevation="8" rounded="xl" class="comparison-card">
        <v-card-item class="pa-0">
          <v-table class="comparison-table">
            <thead>
              <tr>
                <th class="text-left comparison-header">Critère</th>
                <th class="text-center comparison-header">Gestion interne</th>
                <th class="text-center comparison-header comparison-header-highlight">Externalisation</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in comparisonData"
                :key="index"
                :class="{ 'comparison-row-highlight': index % 2 === 0 }"
              >
                <td class="comparison-criterion">
                  <strong>{{ row.criterion }}</strong>
                </td>
                <td class="text-center comparison-internal">
                  {{ row.internal }}
                </td>
                <td class="text-center comparison-external">
                  <strong>{{ row.external }}</strong>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>
    </v-container>
  </section>
</template>

<script setup>
const comparisonData = [
  {
    criterion: 'Coût global',
    internal: 'Élevé (salaires, locaux, gestion RH)',
    external: 'Réduit, prévisible et optimisé'
  },
  {
    criterion: 'Temps de mise en œuvre',
    internal: 'Long (sourcing, formation, intégration)',
    external: 'Rapide, clé en main'
  },
  {
    criterion: 'Accès aux compétences',
    internal: 'Limité aux ressources internes disponibles',
    external: 'Spécialistes expérimentés sélectionnés selon vos besoins'
  },
  {
    criterion: 'Charge managériale',
    internal: 'Lourde et chronophage',
    external: 'Allégée grâce à un pilotage EBHI structuré'
  },
  {
    criterion: 'Souplesse et évolutivité',
    internal: 'Faible flexibilité (contrats, organisation interne)',
    external: 'Haute adaptabilité, ressources modulables'
  },
  {
    criterion: 'Maîtrise du risque',
    internal: 'Responsabilité interne sur tous les volets',
    external: 'Encadrement légal, RH et qualité assuré par EBHI'
  }
]
</script>

<style scoped>
.comparison-section {
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

.comparison-card {
  overflow: hidden;
  background: white;
}

.comparison-table {
  width: 100%;
}

.comparison-header {
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white !important;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 20px 16px !important;
}

.comparison-header-highlight {
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
}

.comparison-criterion {
  padding: 20px 24px !important;
  font-size: 1rem;
  background: #f5f5f5;
  border-right: 2px solid #e0e0e0;
}

.comparison-internal {
  padding: 20px 16px !important;
  font-size: 0.95rem;
  color: #616161;
}

.comparison-external {
  padding: 20px 16px !important;
  font-size: 0.95rem;
  color: #1a237e;
  background: rgba(76, 175, 80, 0.05);
}

.comparison-row-highlight {
  background: rgba(0, 0, 0, 0.02);
}

.comparison-row-highlight .comparison-external {
  background: rgba(76, 175, 80, 0.1);
}

@media (max-width: 960px) {
  .comparison-header,
  .comparison-criterion,
  .comparison-internal,
  .comparison-external {
    font-size: 0.875rem;
    padding: 12px 8px !important;
  }
}
</style>
