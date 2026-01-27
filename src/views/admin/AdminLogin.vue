<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="elevation-12" rounded="xl">
              <v-card-title class="text-center pa-8">
                <div class="w-100">
                  <v-icon color="primary" size="64" class="mb-4">mdi-shield-lock</v-icon>
                  <h1 class="text-h4 font-weight-bold mb-2">Backoffice EBHI</h1>
                  <p class="text-body-1 text-grey-darken-1">Connectez-vous pour accéder au panneau d'administration</p>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-8">
                <v-form ref="form" v-model="valid" @submit.prevent="handleLogin">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                    prepend-inner-icon="mdi-email"
                    :rules="emailRules"
                    required
                    variant="outlined"
                    class="mb-4"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Mot de passe"
                    type="password"
                    prepend-inner-icon="mdi-lock"
                    :rules="passwordRules"
                    required
                    variant="outlined"
                    class="mb-4"
                  ></v-text-field>
                  <v-alert
                    v-if="error"
                    type="error"
                    variant="tonal"
                    class="mb-4"
                    closable
                    @click:close="error = ''"
                  >
                    {{ error }}
                  </v-alert>
                  <v-btn
                    type="submit"
                    color="primary"
                    size="large"
                    block
                    :loading="loading"
                    :disabled="!valid"
                    rounded="lg"
                  >
                    Se connecter
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../../services/api.js'

const router = useRouter()
const form = ref(null)
const valid = ref(false)
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const emailRules = [
  v => !!v || 'L\'email est requis',
  v => /.+@.+\..+/.test(v) || 'L\'email doit être valide'
]

const passwordRules = [
  v => !!v || 'Le mot de passe est requis',
  v => (v && v.length >= 6) || 'Le mot de passe doit contenir au moins 6 caractères'
]

const handleLogin = async () => {
  if (!valid.value) return

  loading.value = true
  error.value = ''

  try {
    await api.login(email.value, password.value)
    router.push({ name: 'AdminDashboard' })
  } catch (err) {
    error.value = err.message || 'Erreur de connexion. Vérifiez vos identifiants.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
}
</style>
