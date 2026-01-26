<template>
  <div>
    <AppHeader />
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="10" lg="8" class="mx-auto">
          <h1 class="text-h3 font-weight-bold mb-6">Politique de cookies</h1>
          
          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p class="text-body-1 mb-4" style="line-height: 1.8;">
                Un cookie est un petit fichier texte enregistré sur votre appareil lors de la visite d'un site web. 
                Il permet de conserver des données utilisateur afin de faciliter la navigation et d'améliorer l'expérience en ligne.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">2. Pourquoi utilisons-nous des cookies ?</h2>
              <p class="text-body-1 mb-4" style="line-height: 1.8;">
                EBHI utilise des cookies pour :
              </p>
              <ul class="text-body-1" style="line-height: 1.8;">
                <li>Garantir le bon fonctionnement du site</li>
                <li>Mesurer l'audience et analyser le comportement des visiteurs</li>
                <li>Personnaliser votre navigation</li>
                <li>Faciliter l'accès à certains services</li>
              </ul>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">3. Types de cookies utilisés</h2>
              <ul class="text-body-1" style="line-height: 1.8;">
                <li><strong>Cookies strictement nécessaires</strong> : indispensables pour la navigation.</li>
                <li><strong>Cookies de performance</strong> : collectent des données anonymes sur l'utilisation du site.</li>
                <li><strong>Cookies fonctionnels</strong> : permettent de mémoriser vos préférences.</li>
                <li><strong>Cookies de marketing</strong> : utilisés pour afficher des publicités pertinentes.</li>
              </ul>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">4. Gestion des cookies</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                Lors de votre première visite, une bannière vous propose d'accepter ou de refuser les cookies. 
                Vous pouvez également modifier vos préférences à tout moment via les paramètres de votre navigateur.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">5. Durée de conservation</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                Les cookies sont conservés pour une durée maximale de 13 mois.
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
