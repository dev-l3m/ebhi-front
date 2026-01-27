<template>
  <div>
    <AppHeader />
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="10" lg="8" class="mx-auto">
          <h1 class="text-h3 font-weight-bold mb-6">Conditions Générales d'Utilisation</h1>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">1. Présentation</h2>
              <p class="text-body-1" style="line-height: 1.8">
                Le site ebhi.fr est édité par
                <strong>Entrepreneur Business Hub International (EBHI)</strong>, dont le siège
                social est situé à :<br />
                Bureau 7, Centre d'Affaires Jihane, Avenue du 11 Janvier, Marrakech.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">2. Objet</h2>
              <p class="text-body-1" style="line-height: 1.8">
                Les présentes conditions régissent l'utilisation du site. En naviguant sur ebhi.fr,
                vous acceptez ces termes sans réserve.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">3. Accès au site</h2>
              <p class="text-body-1" style="line-height: 1.8">
                Le site est accessible gratuitement, 24h/24 et 7j/7, sauf cas de force majeure,
                maintenance ou problème technique.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">4. Propriété intellectuelle</h2>
              <p class="text-body-1" style="line-height: 1.8">
                Tous les contenus (textes, images, logos, vidéos…) sont la propriété exclusive de
                EBHI, sauf mention contraire. Toute reproduction est interdite sans autorisation
                préalable.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">5. Responsabilité</h2>
              <p class="text-body-1" style="line-height: 1.8">
                EBHI ne saurait être tenue responsable des erreurs, inexactitudes ou interruptions
                du site. L'utilisateur est seul responsable de l'usage qu'il fait des informations
                disponibles.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">6. Modification des conditions</h2>
              <p class="text-body-1" style="line-height: 1.8">
                EBHI se réserve le droit de modifier les présentes conditions à tout moment. Les
                utilisateurs seront informés des modifications majeures.
              </p>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
</script>
