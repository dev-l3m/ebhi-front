<template>
  <div>
    <AppHeader />
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="10" lg="8" class="mx-auto">
          <h1 class="text-h3 font-weight-bold mb-6">Politique de confidentialité</h1>
          
          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">1. Données collectées</h2>
              <p class="text-body-1 mb-4" style="line-height: 1.8;">
                EBHI collecte des données personnelles via :
              </p>
              <ul class="text-body-1 mb-4" style="line-height: 1.8;">
                <li>Les formulaires de contact</li>
                <li>Les demandes de devis</li>
                <li>Les cookies</li>
              </ul>
              <p class="text-body-1" style="line-height: 1.8;">
                Les données collectées peuvent inclure : nom, prénom, e-mail, téléphone, société, adresse IP.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">2. Finalité du traitement</h2>
              <p class="text-body-1 mb-4" style="line-height: 1.8;">
                Les données sont utilisées pour :
              </p>
              <ul class="text-body-1" style="line-height: 1.8;">
                <li>Répondre à vos demandes</li>
                <li>Améliorer nos services</li>
                <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                <li>Sécuriser le site</li>
              </ul>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">3. Durée de conservation</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                Les données sont conservées pour la durée nécessaire à la finalité du traitement 
                ou selon les obligations légales.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl" class="mb-6">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">4. Partage des données</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                Vos données ne sont pas vendues ni cédées à des tiers. Elles peuvent être partagées 
                uniquement avec des prestataires techniques liés à EBHI.
              </p>
            </v-card-item>
          </v-card>

          <v-card :elevation="4" rounded="xl">
            <v-card-item class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">5. Vos droits</h2>
              <p class="text-body-1" style="line-height: 1.8;">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, 
                d'opposition et de portabilité de vos données.<br>
                Vous pouvez exercer ces droits par e-mail à <strong>contact@ebhi.fr</strong>.
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
