<template>
  <div>
    <AppHeader />
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="10" lg="8" class="mx-auto">
          <h1 class="text-h3 font-weight-bold mb-6">Mentions légales</h1>
          
          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">Éditeur du site</h2>
              <p class="text-body-1 mb-2" style="line-height: 1.8;">
                <strong>Entrepreneur Business Hub International (EBHI)</strong><br>
                Bureau 7, Centre d'Affaires Jihane, Avenue du 11 Janvier, Marrakech
              </p>
              <p class="text-body-1 mb-2" style="line-height: 1.8;">
                <strong>Email :</strong> contact@ebhi.fr<br>
                <strong>Téléphone :</strong> +33 1 84 60 38 50
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">Hébergeur du site</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                EBHI – Bureau 7, CENTRE D'AFFAIRE JIHANE AVENUE DU 11 JANVIER MARRAKECH – +33 1 84 60 38 50
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">Propriété intellectuelle</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                Le site et l'ensemble de ses contenus sont protégés par les droits de propriété intellectuelle. 
                Toute reproduction totale ou partielle sans autorisation est strictement interdite.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">Crédits</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                Design, développement et contenus réalisés par EBHI.
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
